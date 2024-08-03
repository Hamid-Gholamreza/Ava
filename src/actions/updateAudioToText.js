export default (type) => {

    return {
        type: 'updateAudioToText',
        payload: {
            type,
        }
    }
}