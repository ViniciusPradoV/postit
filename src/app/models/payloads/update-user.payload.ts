export interface UpdateUserPayload {
    name: string;
    role: string;
  }
  
export interface ProfilePicPayload  extends UpdateUserPayload{
    imageUrl: string
  }