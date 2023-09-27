import React, {createContext, useEffect, useState, useContext} from "react";
import AsyncStorage from '@react-native-community/async-storage'
import authService from "../services/auth";
import api from "../services/api";

interface User {
  name: string;
  email: string;
}

interface AuthContextProps {
  signed: boolean;
  user: User | null;
  sing(): Promise<void>;
  logOut(): void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC = ({children}: any) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function loadDataUser() {
      const storageUser = await AsyncStorage.getItem('@RNAuth:user')
      const storageToken = await AsyncStorage.getItem('@RNAuth:token')
      
      if(storageToken && storageUser) {
        api.defaults.headers['Authorization'] = `Bearer ${storageToken}`
        setUser(JSON.parse(storageUser))
      }
      setLoading(false)
    }
    loadDataUser()
  }, [])


  async function sing() {
    const response = await authService()
    setUser(response.user)
    api.defaults.headers['Authorization'] = `Bearer ${response.token}`
    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user))
    await AsyncStorage.setItem('@RNAuth:token', response.token)
  }

  async function logOut() {
    AsyncStorage.clear().then(() => {
      setUser(null)
    })
  }

  return (
    <AuthContext.Provider value={{
      signed: !!user,
      sing, 
      user,
      logOut,
      loading
      }}>
      {children}
    </AuthContext.Provider>

  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  return context
}