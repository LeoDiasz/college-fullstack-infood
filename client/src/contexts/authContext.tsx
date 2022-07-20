import {createContext, ReactNode, useEffect} from "react";
import {useState} from "react"
import { api } from "../services/api";
import {useNavigate} from "react-router-dom"

type authContextChildren = {
  children: ReactNode;
};

type ContextProps  = {
  signIn: ({email, password} : SignInDatas) => Promise<Boolean>;
  signOut: () => void;
  user: User | null;
};

type SignInDatas = {
  email: string | null;
  password: string | null;
}

type User =  {
  user: {
    id: string;
    name: string;
    email: string;
  }
  token: string;
};

export const AuthContext = createContext({} as ContextProps);


export function AuthProvider({children}: authContextChildren) {
  const [user, setUser] = useState<User | null>(null);

  useEffect( () => {
    let userExists = window.localStorage.getItem("user")
    userExists = JSON.stringify(userExists)

    if (userExists) {
      const dataFormat = JSON.parse(userExists)
      setUser(dataFormat)
    }
      
  }, []);

  async function signIn({email, password} : SignInDatas) {

    if (!email?.length || !password?.length) {
      return false
    }
    
    const dataUser = {email, password}

    try {
      const {data: userExists} = await api.post<User>("/user/authenticate", dataUser)
      
      setUser(userExists)
      localStorage.setItem("user", JSON.stringify(userExists))

      api.defaults.headers.common.authorization = `Bearer ${userExists.token}`
   
      return true
    } catch {
      return false
    }
  
  }

  function signOut() {
    
    if(user) {
      setUser(null)
      localStorage.removeItem("user")
    }
    
   
  }
  
  return (
    <AuthContext.Provider value={{signIn, user, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}