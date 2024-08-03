export default (dropdownId) => {
    return {
        type: 'updateDropdown',
        payload: {
            dropdownId,
        }
    }
}