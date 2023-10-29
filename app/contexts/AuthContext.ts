import { createContext, useContext } from "react";

const AuthContext = createContext<AuthData | null>(null)

const useAuth = ()=>{
    const context = useContext(AuthContext)
    if(context){
        return context
    }else{
        throw new Error(
            "useAuth has to be used within <AuthContext.Provider>"
          )
      
    }
}

export { AuthContext, useAuth }