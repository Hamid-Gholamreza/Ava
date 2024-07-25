import React from "react";
import mic_icon_light from '../icons/sideMenu/mic_icon_light.svg';



function RecordVoice() {
    return(
        <div className="w-full h-[429px] rounded-b-[25px] rounded-tl-[25px] border-[1px] border-custom-color-1 flex
        flex-col justify-center items-center gap-3">
            <button className="w-[62px] h-[62px] bg-custom-color-1 rounded-full flex items-center justify-center">
                <img src={mic_icon_light} alt="" className="w-[19.63px] h-[32.72px]"/>
            </button>
            <p className="text-custom-color-2 text-base w-[276px] font-light text-center">
                برای شروع صحبت، دکمه را فشار دهید متن پیاده شده آن، در اینجا ظاهر شود
            </p>
        </div>
    )
}

export default RecordVoice;