import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import SignUp from "../pages/SignUp";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <SignUp />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router