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
  id: string;
  name: string;
  email: string;
  token: string;
};

type UserReturn = {
  user: {
    id: string;
    name: string;
    email: string;
  },
  token: string;
}

export const AuthContext = createContext({} as ContextProps);


export function AuthProvider({children}: authContextChildren) {
  const [user, setUser] = useState<User | null>(null);

  useEffect( () => {
    const userExists = window.localStorage.getItem("user")

    if (userExists) {
  
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
   
      return true
    } catch {
      return false
    }
  
  }

  function signOut() {
    
    if(user) {
      setUser(null)
    }
    
   
  }
  
  return (
    <AuthContext.Provider value={{signIn, user, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}