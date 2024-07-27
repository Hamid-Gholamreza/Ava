import React from "react";
import DropDownMenu from "../components/DropDownMenu";
import SideMenu from "../components/SideMenu";
import Table from '../components/Table';


function Archive() {
    return(
        <div className="bg-white text-white w-screen h-screen relative">
            <h1 className="text-custom-color-1 text-2xl w-[98px] h-[42px] absolute top-[88px] right-[320px]">آرشیو من</h1>
            <div className="absolute top-[48px] left-[47px]">
                <DropDownMenu type='account' />
            </div>
            <SideMenu clickedItem='archive' />
            <div className="absolute top-[200px] left-[200px]">
                <Table />
            </div>
        </div>
    );
}

export default Archive;