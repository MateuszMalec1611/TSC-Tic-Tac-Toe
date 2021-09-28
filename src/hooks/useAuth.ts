import { useContext } from "react";
import { AuthContext } from "src/store/Auth/Auth.context";

export const useAuth = () => {
    return useContext(AuthContext);
};