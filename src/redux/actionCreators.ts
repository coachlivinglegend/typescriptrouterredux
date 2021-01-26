import * as actionTypes from './actionTypes';
import {IArticle} from '../types'

export const addArticle = (article: IArticle) => {
    return {
        type: actionTypes.ADD_ARTICLE,
        payload: article
    }
}

export const removeArticle = (article: IArticle) => {
    return {
        type: actionTypes.REMOVE_ARTICLE,
        payload: article
    }
}

