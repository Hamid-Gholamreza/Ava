import React from "react";
import Account from "../components/Account";
import SideMenu from "../components/SideMenu";
import ChangeAudioToText from "../components/ChangeAudioToText";
import AudioToTextContainer from "../components/AudioToTextContainer";



function AudioToText() {
    return(
        <div className="bg-white text-white w-screen h-screen relative">
            <ChangeAudioToText />
            <AudioToTextContainer />
            <Account />
            <SideMenu clickedItem='audioToText' />
        </div>
    );
}

export default AudioToText;