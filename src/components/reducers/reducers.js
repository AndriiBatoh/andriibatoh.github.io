import {NEXT_QUESTION, SET_SELECTED_SECTION} from "../../constants";

export const selectedSection = (state = '', action) => {
    switch (action.type) {
        case SET_SELECTED_SECTION:
            return action.section;
        default:
            return state;
    }
};

export const signs = (state = {}, action) => {
    const mutation = {...state}
    switch (action.type) {
        case NEXT_QUESTION:
            let item = mutation[action.section].splice(action.randomIndex, 1);
            return mutation;
        default:
            return state;
    }
}
export const i18n = (state = {}, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const question = (state = {}, action) => {
    switch (action.type) {
        default:
            return state;
    }
}