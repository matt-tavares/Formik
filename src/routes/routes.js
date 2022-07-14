import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import SignUp from "../pages/SignUp";

import { UserProvider } from "../providers/User";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <UserProvider>
                    <Route exact path="/">
                        <SignUp />
                    </Route>
                </UserProvider>
            </Switch>
        </BrowserRouter>
    )
}

export default Router