export type ProviderValue = {
    currentUser: any;
    signup: (email: string, password: string) => any;
    login: (email: string, password: string) => any;
    logout: () => any;
};
