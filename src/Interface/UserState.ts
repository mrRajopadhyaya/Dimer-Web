export interface UserState {
    profile: UserProfile;
  }
  
  export interface UserProfile {
    displayName: string;
    email: string;
    phoneNumber?: string;
    photoURL: string;
    providerId: string;
    uid: string;
  }
  