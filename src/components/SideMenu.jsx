import React from "react";
import ava_icon from '../icons/sideMenu/ava_icon.svg';
import archive_icon from '../icons/sideMenu/archive_icon.svg';
import speech_icon from '../icons/sideMenu/speech_icon.svg';
import { Link } from "react-router-dom";


function SideMenu(props) {



    return(
        <div className="w-[166px] h-[924px] bg-custom-color-1 py-0 absolute top-0 right-0
        rounded-tl-[10px] rounded-bl-[10px]">
            <div className="flex flex-row-reverse text-xl w-[54px] h-[38px] absolute top-[48px] left-[55px]">
                <img src={ava_icon} alt="" />
                <h1 className="px-2 text-center pt-1">آوا</h1>
            </div>

            <div className="absolute top-[268px] text-center mx-2 flex flex-col justify-center items-center gap-3">
                <div id="audioToText" key={0} className={`text-base w-[150px] h-[48px] rounded-[10px] 
                    ${props.type === 'audioToText' ? 'bg-custom-color-3': 'bg-custom-color-1'}` }>
                    <Link to={'/audio-to-text'} className="flex w-full h-full justify-center items-center gap-1"  >
                        <p>تبدیل گفتار</p>
                        <img src={speech_icon} alt="" className="w-[42px] h-[24.81px]" />
                    </Link>
                </div>

                <div id="archive" className={`text-base flex mx-auto w-[150px] h-[48px] rounded-[10px]
                ${props.type === 'archive' ? 'bg-custom-color-3': 'bg-custom-color-1'}`}>
                    <Link to={'/archive'} className="flex w-full h-full justify-center items-center gap-8"  >
                        <p>آرشیو</p>
                        <img src={archive_icon} alt="" className="w-[20px] h-[20px]" />
                    </Link>
                </div>
            </div>
        </div>
    );
}


export default SideMenu;