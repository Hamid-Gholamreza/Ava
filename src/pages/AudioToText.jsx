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
            <SideMenu type='audioToText' />
            <div className="absolute top-[725px] left-[435px] w-[179px] h-[81px] flex flex-row-reverse justify-center items-center
            gap-3" >
                <div className="w-full h-full flex flex-row-reverse justify-center items-center box-border gap-3">
                    <div>
                        <p className="text-custom-color-2 text-sm rtl text-center">:زبان گفتار</p>
                    </div>
                    <div>
                        <DropDownMenu type='language' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AudioToText;