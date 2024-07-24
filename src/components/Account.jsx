import React from "react";
import userIcon from '../icons/user_icon.svg';
import dropIcon from '../icons/drop_icon.svg'


function Account() {
    return (
        <div className="w-[121px] h-[37px] block text-custom-color-1 border-solid border-2 border-custom-color-1 rounded-2xl absolute
         top-[48px] left-[47px]">
            <button className="px-2 py-1">
                <div className="flex flex-row-reverse">
                    <div className="px-1 relative">
                        <img src={userIcon} alt="" className="" />
                    </div>
                    <div className="px-1">
                        <p className="">مهمان</p>
                    </div>
                    <div className="px-2 py-0 relative">
                        <img src={dropIcon} alt="" className="absolute top-3 right-1" />
                    </div>
                </div>
            </button>
        </div>
    )
}

export default Account;