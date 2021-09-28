export type ProviderValue = {
    currentUser: any;
    signup: (email: string, password: string) => any;
    login: (email: string, password: string) => any;
    logout: () => any;
};

export enum AuthActions {
    LOGIN = 'LOGIN',
    SIGNUP = 'SIGNUP',
    LOGOUT = 'LOGOUT',
    PW_RECOVER = 'PW_RECOVER',
}
