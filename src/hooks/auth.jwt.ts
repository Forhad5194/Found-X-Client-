"use server"
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export const getCurrentUser = async() => {

    const accessToken =  cookies().get("accessToken")?.value;
  
    let decodedToken = null; 
  
    if(accessToken) {
  
      decodedToken = await jwtDecode(accessToken);
      
      return {
        _id: decodedToken._id,
        name: decodedToken.name,
        email: decodedToken.email,
        mobileNumber:decodedToken.mobileNumber,
        role: decodedToken.role,
        status:decodedToken.status,
      }
  
    }
    return decodedToken;
  
  
  }



  
export const logout = ()=> {
    cookies().delete('accessToken')
    cookies().delete('refreshToken')
}


