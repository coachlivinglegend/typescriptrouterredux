import React, { useCallback } from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import {IArticle} from '../types'


type Props = {
    article: IArticle
    removeArticle: (article: IArticle) => void
  }

const Article: React.FC<Props> = ({ article, removeArticle }) => {
    const dispatch: Dispatch<any> = useDispatch();

    const deleteArticle = useCallback(
        article => {
            dispatch(removeArticle(article));
        },
        [dispatch, removeArticle]
    );

    return (
        <div className="Article">
            <div>
                <h1>{article.title}</h1>
                <p>{article.body}</p>
            </div>
            <button onClick={() => deleteArticle(article)}>Delete</button>
        </div>
    );
};

export default Article;
