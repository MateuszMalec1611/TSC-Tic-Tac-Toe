export type ProviderValue = {
    currentUser: any;
    signup: (email: string, password: string) => any;
    login: (email: string, password: string) => any;
    logout: () => any;
    resetPassword: (emial: string) => any;
};

export enum AuthActions {
    LOGIN = 'LOGIN',
    SIGNUP = 'SIGNUP',
    LOGOUT = 'LOGOUT',
    RESET_PASSWORD = 'RESET_PASSWORD',
}
