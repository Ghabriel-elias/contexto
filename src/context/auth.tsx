import React, {createContext} from "react";
import authService from "../services/auth";

interface AuthContextProps {
  signed: boolean;
  user: object;
  sing(): Promise<void>
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC = ({children}: any) => {

  async function sing() {
    const response = await authService()
    const {token, user} = response
  }

  return (
    <AuthContext.Provider value={{
      signed: false,
      sing, 
      user: {}}}>
      {children}
    </AuthContext.Provider>

  )
}



export default AuthContext