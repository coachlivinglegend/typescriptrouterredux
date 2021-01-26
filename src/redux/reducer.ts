import * as actionTypes from "./actionTypes";
import {IArticle, ArticleState, ArticleAction} from '../types'


const initialState = {
    articles: [
        {
            id: 1,
            title: "post 1",
            body:
                "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
        },
        {
            id: 2,
            title: "post 2",
            body:
                "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
        },
    ],
};

const reducer = (state: ArticleState = initialState, action: ArticleAction) => {
    switch (action.type) {
        case actionTypes.ADD_ARTICLE:
            const newArticle: IArticle = {
                id: Math.random(), // not really unique
                title: action.payload.title,
                body: action.payload.body,
            };
            return {
                ...state,
                articles: [...state.articles, newArticle],
            };
        case actionTypes.REMOVE_ARTICLE:
            const updatedArticles: IArticle[] = state.articles.filter(
                article => article.id !== action.payload.id
            );
            return {
                ...state,
                articles: updatedArticles,
            };
        default:
            return state;
    }
};

export default reducer;
