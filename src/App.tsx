import React from "react";
import styles from "./App.module.css";
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import { HomePage } from "./pages";

function App() {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/signIn" render={() => <h1>Sign In</h1>} />
                    

                    <Route render={() => <h1>404 Not found</h1>} />
                </Switch>
            </BrowserRouter>
        </div >
    );
}
export default App;
