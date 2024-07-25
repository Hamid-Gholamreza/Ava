import React from "react";
import upload_icon from '../icons/sideMenu/upload_icon_light.svg';


function UploadFile() {
    return(
        <div className="w-full h-[429px] rounded-[25px] rounded-tl-[25px] border-[1px] border-custom-color-blue flex
        flex-col justify-center items-center gap-3">
            <label htmlFor="file-input" className="w-[62px] h-[62px] custom-file-button rounded-full ">
                <img src={upload_icon} alt="" className="py-2 w-full h-full" />
            </label>
            <input type="file" id="file-input" />
            <p className="text-custom-color-2 w-[415px] text-center">برای بارگزاری فایل گفتاری(صوتی/تصویری) 
                دکمه را فشار دهید متن پیدا شده آن، در اینجا ظاهر می شود</p>
        </div>
    )
}

export default UploadFile;

//w-[62px] h-[62px]