"use client"
import { createContext, Dispatch, ReactNode, SetStateAction,  useContext,  useEffect,  useState } from "react";
import { IUser } from "../types";
import { getCurrentUser } from "../hooks/auth.jwt";




const UserContext = createContext<IUserProviderValues | undefined>(undefined)



interface IUserProviderValues {
    user: IUser | null;
    setUser : (user: IUser | null) => void;
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}



const UserProvider = ({children} : {children : ReactNode}) => {

    const [user, setUser] = useState<IUser | null> (null)
    const [ isLoading , setIsLoading] = useState(true)


    const handleUser = async() => {

        const user = await getCurrentUser()


        setUser(user)
        setIsLoading(false)
    }


    useEffect(() => {
        handleUser()
        
    }, [isLoading])






    return (
        <UserContext.Provider value= {{
            user, 
            setUser, 
            isLoading, 
            setIsLoading
        }}>

            {children}

        </UserContext.Provider>
    )





}



export const useUser = () => {
    const context = useContext(UserContext)
    if(context === undefined) {
        throw new Error("useUser musr be used writhed in UserProvider Context") 
    }

    return context;
}









export default UserProvider;