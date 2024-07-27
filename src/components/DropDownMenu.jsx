import React from "react";
import userIcon from '../icons/user_icon.svg';
import dropIcon from '../icons/drop_icon.svg'


function DropDownMenu(props) {

    let menu;
    if (props.type === 'account') {

        menu = <div className="flex flex-row-reverse justify-center items-center gap-2 px-5">
                        <div>
                            <img src={userIcon} alt="" className="" />
                        </div>
                        <div>
                            <p>مهمان</p>
                        </div>
                        <div>
                            <img src={dropIcon} alt="" className="" />
                        </div>
                </div>
    }

    else if (props.type === 'language') {
        menu = <div className="flex flex-row-reverse justify-center items-center gap-4 px-6">
                    <div>
                        <p className="">فارسی</p>
                    </div>
                    <div className="">
                        <img src={dropIcon} alt="" className="" />
                    </div>
                </div>
    }

    return (
        <div className="w-fill h-[37px] block text-custom-color-1 border-solid border-[1px] border-custom-color-1 rounded-[20px]">
            <button className="w-full h-full">
                {menu}
            </button>
        </div>
    )
}

export default DropDownMenu;
