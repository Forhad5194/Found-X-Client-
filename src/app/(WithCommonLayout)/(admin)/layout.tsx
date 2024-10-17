import { ReactNode } from "react";


const layout = ({children} : {children : ReactNode}) => {
    return (
        <>
        <h2>This Area of Admin power...</h2>
         {children}  
        </>
    );
};

export default layout;