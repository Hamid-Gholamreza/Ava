import React, {useState} from "react";
import mic_icon from '../icons/sideMenu/mic_icon.svg';
import upload_icon from '../icons/sideMenu/upload_icon.svg';
import chain_icon from '../icons/sideMenu/chain_icon.svg';
import RecordVoice from "./RecordVoice";
import UploadFile from "./UploadFile";
import Link from "./Link";

function AudioToTextContainer() {

    const [status, setStatus] = useState(null);



    return(
        <div className="w-[653px] h-[477px] absolute top-[237px] left-[440px]">
            <div className="flex flex-row-reverse h-[48px]">
                <div className="w-[144px] bg-custom-color-1 rounded-t-[10px]">
                    <button className="w-full h-full flex justify-center items-center gap-2">
                        <p className="text-base font-thin text-white">ضبط صدا</p>
                        <img src={mic_icon} alt="" />
                    </button>
                </div>
                <div className="w-[144px]">
                    <button className="w-full h-full flex justify-center items-center gap-2">
                        <p className="text-base font-thin text-custom-color-2">بارگزاری فایل</p>
                        <img src={upload_icon} alt="" />
                    </button>
                </div>
                <div className="w-[144px]">
                    <button className="w-full h-full flex justify-center items-center gap-2">
                        <p className="text-base font-thin text-custom-color-2">لینک</p>
                        <img src={chain_icon} alt="" />
                    </button>
                </div>
            </div>
            <RecordVoice />
        </div>
    );
}

export default AudioToTextContainer;