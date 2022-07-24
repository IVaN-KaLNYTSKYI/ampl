import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Link} from "react-router-dom";
import {Switch} from "react-router-dom"
import {AdminPanelSigninStep2,AdminPanelSigninStep1} from "./ui-components";
import B2B from "./components/B2B";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path={"/"}>
                    <AdminPanelSigninStep1 width={"100%"}/>
                </Route>
                <Route exact path={"/login"}>
                    <AdminPanelSigninStep2 width={"100%"}/>
                </Route>
                <Route exact path={"/all"}>
                    <B2B/>
                </Route>
            </Switch>
        </Router>
    {/*      <ButtonSave detail={detail}/>*/}
    </div>
  );
}

export default App;
