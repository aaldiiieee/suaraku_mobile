export interface Session {
  user: User | null;
  token: string | null;
//   login: (user: User, token: string) => void;
}

export interface User {
  mu_id: number;
  mu_uuid: string;
  mu_nik: string;
  mu_fullname: string;
  mu_phoneNumber: string;
  mu_blood_type: string;
  mu_address: string;
  mu_province: string;
  mu_city: string;
  mu_pin: string;
  mu_district: string;
  token: string;
}
