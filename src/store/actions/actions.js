export const loading = () => {
    return {
        type: "LOADING "
    }
}

export const ageUPAsnc = (val) => {
    return {
        type: "AGE_UP", value: val
    }
};
export const ageUP = (val) => {

    return dispatch => {
        dispatch(loading());
        setTimeout(() => {
           val++;
        }, 5000)
    }
}

export const ageDown = (val) => {
    return {
        type: "AGE_DOWN", value: val
    }
};