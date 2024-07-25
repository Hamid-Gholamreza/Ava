import React from "react";
import chain_icon from '../icons/sideMenu/chain_icon_light.svg';


function Link() {

    return (
        <div className="w-full h-[429px] rounded-b-[25px] rounded-[25px] border-[1px] border-custom-color-red flex
        flex-col justify-center items-center gap-3">
            <form action="" className="w-full h-full flex flex-col justify-center items-center gap-4">
                <div className="w-[328px] h-[46px] flex justify-center items-center">
                    <input type="text" className="h-full w-full text-black border-[0.5px] border-custom-color-red
                    rounded-[50px] pl-[60px]"/>
                    <button type="submit" className="w-[30px] h-[30px] bg-custom-color-red rounded-full flex items-center 
                    justify-center absolute top-[215px] left-[180px]">
                        <img src={chain_icon} alt="" />
                    </button>
                </div>
                <div>
                <p className="text-custom-color-2 w-[415px] text-center text-base">نشانی اینترنتی فایل حاوی گفتار
                    ، (صوتی/تصویری) را وارد و دکمه را فشار دهید</p>
                </div>
            </form>
        </div>
    )
}

export default Link;