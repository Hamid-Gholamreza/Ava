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
            <div className="absolute top-[735px] left-[435px] w-[200px] h-[81px] flex flex-row-reverse justify-center items-center
            gap-3" >
                <div className="w-full h-full">
                    <div className="w-full h-ful flex justify-center items-center gap-5 py-auto">
                        <DropDownMenu type='language' />
                        <p className="h-full block text-custom-color-2 text-sm rtl">:زبان گفتار</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AudioToText;