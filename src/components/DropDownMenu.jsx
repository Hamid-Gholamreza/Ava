import React from "react";
import { Link } from "react-router-dom";
import userIcon from '../icons/user_icon.svg';
import dropIcon from '../icons/drop_icon.svg';
import dropUpIcon from '../icons/drop_up_icon.svg';
import logoutIcon from '../icons/logout_icon.svg';
import { connect } from "react-redux";
import updateDropdown from "../actions/updateDropdown";
import { bindActionCreators } from "redux";


function DropDownMenu(props) {


    function handleToggle(dropdownId) {
        props.updateDropdown(dropdownId);
    }

    
    let menu;
    if (props.type === 'account') {
            if (props.dropdownData.accountDropdown.status === false) {
                menu = <div id="dropdown" className="w-fill h-[37px] block text-custom-color-1 border-solid border-[1px] border-custom-color-1 rounded-[20px]">
                            <button className="w-full h-full" onClick={() => handleToggle('accountDropdown')}>
                                <div className="flex flex-row-reverse justify-center items-center gap-2 px-5">
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
                            </button>
                        </div>
            }

            else if (props.dropdownData.accountDropdown.status === true) {
                menu = <div id="dropdown" className="w-fill h-[81px] block text-custom-color-1 border-solid border-[1px] border-custom-color-1 rounded-[20px]">
                            <button className="w-full h-full" onClick={() => handleToggle('accountDropdown')}>
                                <div className="flex flex-col">
                                    <div className="flex flex-row-reverse justify-center items-center gap-2 px-5">
                                        <div className="">
                                            <img src={userIcon} alt="" />
                                        </div>
                                        <div>
                                            <p>مهمان</p>
                                        </div>
                                        <div>
                                            <img src={dropUpIcon} alt="" />
                                        </div>
                                    </div>
                                    <div className="px-5 pt-2">
                                        <hr className="border-t-[1px] border-custom-color-1" />
                                    </div>
                                    <div className="flex flex-row-reverse justify-center items-center gap-2 pr-5 pl-11 pt-2">
                                        <div>
                                            <img src={logoutIcon} alt="" />
                                        </div>
                                        <div>
                                            <Link>
                                                <p>خروج</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                        </button>
                    </div>
        }
    }

    else if (props.type === 'language') {
        if (props.dropdownData.languageDropdown.status === false) {
            menu = <div id="dropdown" className="w-[105px] h-[37px] block text-custom-color-1 border-solid border-[1px] border-custom-color-1 rounded-[20px]">
                        <button className="w-full h-full" onClick={() => handleToggle('languageDropdown')}>
                            <div className="flex flex-row-reverse justify-center items-center gap-2 px-5">
                                <div>
                                    <p>فارسی</p>
                                </div>
                                <div>
                                    <img src={dropIcon} alt="" className="" />
                                </div>
                            </div>
                        </button>
                    </div>
        }

        else if (props.dropdownData.languageDropdown.status === true) {
            menu = <div id="dropdown" className="w-[105px] h-[81px] block text-custom-color-1 border-solid border-[1px] border-custom-color-1 rounded-[20px]">
                        <button className="w-full h-full" onClick={() => handleToggle('languageDropdown')}>
                            <div className="flex flex-col">
                                <div className="flex flex-row-reverse justify-center items-center gap-2">
                                    <div>
                                        <p>فارسی</p>
                                    </div>
                                    <div>
                                        <img src={dropUpIcon} alt="" />
                                    </div>
                                </div>
                                <div className="px-5 pt-2">
                                    <hr className="border-t-[1px] border-custom-color-1" />
                                </div>
                                <div className="flex flex-row-reverse justify-center items-center gap-2">
                                    <div>
                                        <p>انگلیسی</p>
                                    </div>
                                </div>
                            </div>
                    </button>
                </div>
        }

    }

    return (
        <div>
            {menu}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        dropdownData: state.dropdown
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateDropdown: updateDropdown
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DropDownMenu);
