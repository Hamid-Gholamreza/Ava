import React from "react";
import Account from "../components/Account";
import SideMenu from "../components/SideMenu";
import ChangeAudioToText from "../components/ChangeAudioToText";



function AudioToText() {
    return(
        <div className="bg-white text-white w-screen h-screen relative">
            <ChangeAudioToText />
            <Account />
            <SideMenu />
        </div>
    );
}

export default AudioToText;