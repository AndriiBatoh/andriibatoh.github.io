import {NEXT_QUESTION, SET_ITEM, SET_SELECTED_SECTION} from "../../constants";

export const setSection = (section) => {
    return {
        type: SET_SELECTED_SECTION,
        section
    }
}

export const nextQuestion = (section, randomIndex) => ({type: NEXT_QUESTION, section, randomIndex})