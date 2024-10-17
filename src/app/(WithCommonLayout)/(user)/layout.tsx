import { ReactNode } from "react";

const layout = ({children} : {children : ReactNode}) => {
    return (
        <div>
            <h2>This Part of User.</h2>
          {children}
        </div>
    );
};

export default layout;