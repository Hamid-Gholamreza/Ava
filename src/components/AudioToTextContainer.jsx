import React from "react";
import mic_icon from '../icons/sideMenu/mic_icon.svg';
import upload_icon from '../icons/sideMenu/upload_icon.svg';
import chain_icon from '../icons/sideMenu/chain_icon.svg';

function AudioToTextContainer() {
    return(
        <div className="w-[653px] h-[477px] absolute top-[237px] left-[460px]">
            <div className="flex flex-row-reverse h-[48px]">
                <div className="flex w-[144px] justify-center items-center gap-2 bg-custom-color-1 rounded-t-[10px]">
                    <p className="text-base font-thin text-white">ضبط صدا</p>
                    <img src={mic_icon} alt="" />
                </div>
                <div className="flex w-[144px] justify-center items-center gap-2">
                    <p className="text-base font-thin text-custom-color-2">بارگزاری فایل</p>
                    <img src={upload_icon} alt="" />
                </div>
                <div className="flex w-[144px] justify-center items-center gap-2">
                    <p className="text-base font-thin text-custom-color-2">لینک</p>
                    <img src={chain_icon} alt="" />
                </div>
            </div>
            <div className="w-full h-[429px] rounded-b-[25px] rounded-tl-[25px] border-2 border-custom-color-1">
                <button className="w-[62px] h-[62px] bg-custom-color-1 rounded-full flex items-center justify-center">
                    <img src={mic_icon} alt="" className="w-[19.63px] h-[32.72px]"/>
                </button>
            </div>
        </div>
    );
}

export default AudioToTextContainer;