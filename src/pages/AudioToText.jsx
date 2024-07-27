import React from "react";
import DropDownMenu from "../components/DropDownMenu";
import SideMenu from "../components/SideMenu";
import ChangeAudioToText from "../components/ChangeAudioToText";
import AudioToTextContainer from "../components/AudioToTextContainer";

function AudioToText() {
    return(
        <div className="bg-white text-white w-screen h-screen relative">
            <ChangeAudioToText />
            <AudioToTextContainer />
            <div className="absolute top-[48px] left-[47px]">
                <DropDownMenu type='account' />
            </div>
            <SideMenu clickedItem='audioToText' />
            <div className="absolute top-[728px] left-[435px] w-[200px] h-[37px] flex flex-row-reverse justify-center items-center
            gap-3" >
                <p className="text-custom-color-2 text-sm rtl">:زبان گفتار</p>
                <DropDownMenu type='language' />
            </div>
        </div>
    );
}

export default AudioToText;