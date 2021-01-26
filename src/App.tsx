import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";

import { useSelector, shallowEqual, useDispatch } from "react-redux";

import Article from "./components/Article";
import AddArticle from "./components/AddArticle";
import { addArticle, removeArticle } from "./redux/actionCreators";
import { useCallback } from "react";

import { IArticle, ArticleState } from "./types";

function App() {
    const articles: IArticle[] = useSelector(
        (state: ArticleState) => state.articles,
        shallowEqual
    );
    const dispatch = useDispatch();

    const saveArticle = useCallback(
        article => {
            dispatch(addArticle(article));
        },
        [dispatch]
    );

    return (
        <div className="app">
            <Header />
            <main>
                <h1>My Articles</h1>
                <AddArticle saveArticle={saveArticle} />
                {articles.map((article: IArticle) => (
                    <Article
                        key={article.id}
                        article={article}
                        removeArticle={removeArticle}
                    />
                ))}
            </main>
            <Switch>
                <Route exact path="/" render={() => <div> HOME IS BEST</div>} />
                <Route path="/page1" component={Page1} />
                <Route path="/page2" component={Page2} />
                <Route
                    path="/page3"
                    render={props => <Page3 {...props} moreProps="p2p" />}
                />
                <Route path="/page4" component={Page4} />
            </Switch>
        </div>
    );
}

export default App;
