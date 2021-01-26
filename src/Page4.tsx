import React from "react";
import { Route, Switch } from "react-router-dom";
import { RouteComponentProps } from 'react-router-dom'

interface Props extends RouteComponentProps<{ name: string}>{
}



const Page4: React.FC<Props> = props => {
    return (
        <div>
            <Switch>
                <Route
                    exact
                    path={`${props.match.path}`}
                    render={() => (
                        <div>
                            THIS WOULD BE THE COMPONENT ON THE MAIN /PAGE THAT
                            IDEALLY, YOU WOULD USE TO CHOOSE THE /PAGE/:PAGEID
                        </div>
                    )}
                />
                <Route
                    path={`${props.match.path}/:pageId`}
                    render={props => {
                        return (
                            <div>THAT STUFF: {props.match.params.pageId}</div>
                        );
                    }}
                />
            </Switch>
        </div>
    );
};

export default Page4;
