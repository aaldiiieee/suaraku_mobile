import { useContext, createContext, type PropsWithChildren, useEffect, useState } from "react";
import { useStorageState } from "@/hooks/useStorageState";
import { useAuth } from "@/hooks/useAuth";
import { LoginPayload } from "@/types/payload";
import { useRouter } from "expo-router";
import { Session } from "@/types/auth";

const AuthContext = createContext<{
  signIn: (payload: LoginPayload) => void;
  signOut: () => void;
  session?: Session | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");
  const { loginMutation } = useAuth();
  const router = useRouter();

  let sessionData = null;
  if (typeof session === "string") {
    try {
      sessionData = JSON.parse(session);
    } catch (error) {
      console.error("Failed to parse session:", error);
    }
  } else {
    sessionData = session;
  }

  useEffect(() => {
    if (!isLoading) {
      if (sessionData) {
        setSession(sessionData);
        router.replace("/(dashboard)/dashboard");
      } else {
        router.replace("/");
      }
    }
  }, [isLoading, sessionData, router]);

  return (
    <AuthContext.Provider
      value={{
        signIn: (payload: LoginPayload) => {
          loginMutation.mutate(payload, {
            onSuccess: (response) => {
              const userData = response.data;
              const newSession: Session = {
                user: userData,
                token: userData.token,
              };
              setSession(JSON.stringify(newSession));
            },
            onError: (error) => {
              console.error("Login failed:", error);
              setSession(null);
            },
          });
        },
        signOut: () => {
          setSession(null);
        },
        session: sessionData,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
