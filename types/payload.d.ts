export interface LoginPayload {
  mu_nik: string;
  mu_password: string;
}

export interface PinPayload {
  mu_nik: string;
  mu_pin: string;
}

export interface UpdatePhotoPayload {
  mu_uuid: string;
  mu_avatar_url: string;
}