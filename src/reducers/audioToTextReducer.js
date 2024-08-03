import { act } from "react";

const data = [
    'recordVoice',
    'uploadFile',
    'link',
]



export default (state = data[0], action) => {
    if (action.type === 'updateAudioToText') {
        console.log(action.payload.type);
        const newState = action.payload.type;
        return newState;
    }
    return state;
}