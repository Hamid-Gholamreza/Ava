import React, {useEffect} from "react";
import axios from "axios";
import customData from './requests.json';
import { Link } from "react-router-dom";
import delete_icon from '../icons/del_icon.svg';
import copy_icon from '../icons/copy_icon.svg';
import copy_icon_hover from '../icons/copy_icon_hover.svg';
import word_icon from '../icons/word_icon.svg';
import download_icon from '../icons/download_icon.svg';


function Table() {



    console.log(customData.results);
    const itemsList = customData.results.map((item, index) => {
        return <tr key={index}>
                    <td>
                        <div className="flex gap-6">
                            <div>
                                <Link>
                                    <img src={delete_icon} alt="" />
                                </Link>
                            </div>
                            <div>
                                <Link>
                                    <img src={copy_icon} alt="" />
                                </Link>
                            </div>
                            <div>
                                <Link>
                                    <img src={word_icon} alt="" />
                                </Link>
                            </div>
                            <div>
                                <Link>
                                    <img src={download_icon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </td>
                    <td>{item.duration.substring(0, item.duration.length - 4)}</td>
                    <td>{item.url.substring(item.url.length - 4, item.url.length)}</td>
                    <td>{item.processed}</td>
                    <td></td>
                </tr>
    });


    return(
        <div>
            <table className="table-auto text-black w-[1034px] font-light">
                <thead>
                    <tr className="rtl text-right text-sm font-light w-full">
                        <th></th>
                        <th className="font-medium tracking-wide">مدت زمان</th>
                        <th className="font-medium">نوع فایل</th>
                        <th className="font-medium">تاریخ بارگزاری</th>
                        <th className="font-medium">نام فایل</th>
                    </tr>
                </thead>
                <tbody>
                    {itemsList}
                </tbody>
            </table>
        </div>
    )
}

export default Table;