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

function isTokenExpired(expiresAt: string): boolean {
  return new Date(expiresAt).getTime() <= new Date().getTime();
}

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
    if (isLoading) return;
  
    const handleSession = () => {
      if (!sessionData) {
        router.replace("/");
        return;
      }

      if (sessionData.user.mu_pin !== null) {
        router.replace("/(auth)/verify-pin");
        return;
      } else {
        router.replace("/(dashboard)/dashboard");
      }
      
      if (sessionData.expiresAt && isTokenExpired(sessionData.expiresAt)) {
        console.warn("Session expired. Signing out.");
        setSession(null);
        router.replace("/");
        return;
      }
  
      setSession(sessionData);
      router.replace("/(dashboard)/dashboard");
    };
  
    handleSession();
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
                expiresAt: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
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
