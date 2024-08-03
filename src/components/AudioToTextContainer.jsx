import React from "react";
import mic_icon from '../icons/sideMenu/mic_icon.svg';
import mic_icon_light from '../icons/sideMenu/mic_icon_light.svg';
import upload_icon from '../icons/sideMenu/upload_icon.svg';
import upload_icon_light from '../icons/sideMenu/upload_icon_light.svg';
import chain_icon from '../icons/sideMenu/chain_icon.svg';
import chain_icon_light from '../icons/sideMenu/chain_icon_light.svg';
import RecordVoice from "./RecordVoice";
import UploadFile from "./UploadFile";
import Link from "./Link";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import updateAudioToText from "../actions/updateAudioToText";

function AudioToTextContainer(props) {

    
    const handleActiveComponent = (type) => {
        props.updateAudioToText(type);
        handleButtonClick(type);
    }


    const handleButtonClick = (type) => {
        const linkBtn = document.querySelector('#link');
        const uploadFileBtn = document.querySelector('#upload');
        const recordBtn = document.querySelector('#record');

        if (type === 'recordVoice') {
            linkBtn.classList.remove('bg-custom-color-red');
            linkBtn.querySelector('p').classList.remove('text-white');
            linkBtn.querySelector('p').classList.add('text-custom-color-2');
            uploadFileBtn.classList.remove('bg-custom-color-blue');
            recordBtn.classList.add('bg-custom-color-1');
            recordBtn.querySelector('p').classList.remove('text-custom-color-2');
            recordBtn.querySelector('p').classList.add('text-white');
            uploadFileBtn.querySelector('p').classList.remove('text-white');
            uploadFileBtn.querySelector('p').classList.add('text-custom-color-2');
            uploadFileBtn.querySelector('img').src = upload_icon;
            linkBtn.querySelector('img').src = chain_icon;
            recordBtn.querySelector('img').src = mic_icon_light;
        }

        else if (type === 'uploadFile') {
            linkBtn.classList.remove('bg-custom-color-red');
            recordBtn.classList.remove('bg-custom-color-1');
            recordBtn.querySelector('p').classList.remove('text-white');
            recordBtn.querySelector('p').classList.add('text-custom-color-2');
            uploadFileBtn.querySelector('p').classList.add('text-white');
            uploadFileBtn.classList.add('bg-custom-color-blue');
            linkBtn.querySelector('p').classList.remove('text-white');
            linkBtn.querySelector('p').classList.add('text-custom-color-2');
            uploadFileBtn.querySelector('img').src = upload_icon_light;
            uploadFileBtn.querySelector('img').classList.add('w-[18.34px]', 'h-[15px]')
            recordBtn.querySelector('img').src = mic_icon;
            linkBtn.querySelector('img').src = chain_icon;
        }

        else if (type === 'link') {
            recordBtn.classList.remove('bg-custom-color-1');
            recordBtn.querySelector('p').classList.remove('text-white');
            recordBtn.querySelector('p').classList.add('text-custom-color-2');
            uploadFileBtn.classList.remove('bg-custom-color-blue');
            linkBtn.classList.add('bg-custom-color-red');
            linkBtn.querySelector('p').classList.remove('text-custom-color-2');
            linkBtn.querySelector('p').classList.add('text-white');
            uploadFileBtn.querySelector('p').classList.remove('text-white');
            uploadFileBtn.querySelector('p').classList.add('text-custom-color-2');
            linkBtn.querySelector('img').src = chain_icon_light;
            uploadFileBtn.querySelector('img').src = upload_icon;
            recordBtn.querySelector('img').src = mic_icon;
        }
    }

    return(
        <div className="w-[653px] h-[477px] absolute top-[237px] left-[440px]">
            <div className="flex flex-row-reverse h-[48px]">
                <div id="record" className="w-[144px] bg-custom-color-1 rounded-t-[10px]">
                    <button className="w-full h-full flex justify-center items-center gap-2" onClick={() => handleActiveComponent('recordVoice')}>
                        <p className="text-base font-thin text-white">ضبط صدا</p>
                        <img src={mic_icon_light} alt="" className="w-[13px] h-[17.9px]" />
                    </button>
                </div>
                <div id="upload" className="w-[144px] rounded-t-[10px]">
                    <button className="w-full h-full flex justify-center items-center gap-2" onClick={() => handleActiveComponent('uploadFile')}>
                        <p className="text-base font-thin text-custom-color-2">بارگزاری فایل</p>
                        <img src={upload_icon} alt="" className="w-[20.42px] h-[16.67px]" />
                    </button>
                </div>
                <div id="link" className="w-[90px] rounded-t-[10px]">
                    <button className="w-full h-full flex justify-center items-center gap-2" onClick={() => handleActiveComponent('link')}>
                        <p className="text-base font-thin text-custom-color-2">لینک</p>
                        <img src={chain_icon} alt="" className="w-[20.42px] h-[16.67px]" />
                    </button>
                </div>
            </div>
            {props.audioToTextData === 'recordVoice' && <RecordVoice />}
            {props.audioToTextData === 'uploadFile' && <UploadFile />}
            {props.audioToTextData === 'link' && <Link />}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        audioToTextData: state.audioToText,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateAudioToText: updateAudioToText
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioToTextContainer);