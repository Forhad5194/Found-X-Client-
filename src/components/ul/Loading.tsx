import { Spinner } from "@nextui-org/spinner";

import React from 'react';

const Loading = () => {
    return (
        <div>
           <div className=" h-screen fixed bg-black/10 inset-0 z-[999] backdrop-blur-md flex justify-center items-center">
<Spinner size="lg" />
</div>
        </div>
    );
};

export default Loading;