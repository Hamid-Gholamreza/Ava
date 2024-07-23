import React from "react";
import Account from "../components/Account";
import SideMenu from "../components/SideMenu";



function AudioToText() {
    return(
        <div className="bg-white text-white w-screen h-screen relative">
            <Account />
            <SideMenu />
        </div>
    );
}

export default AudioToText;