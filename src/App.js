import './App.css';
import Loginform from './Loginform';
import Registerform from './Registerform';
import {Route, Switch} from 'react-router-dom';
import Header from './header';
import Loginscreen from './LoginScreen';

function App(){
    return(
        <div>
            <Header />
            <Switch>
            <Route path="/Loginform" component={Loginform}></Route>
            <Route path="/Registerform" component={Registerform}></Route>
            <Route path="/Loginscreen" component={Loginscreen}></Route>
            </Switch>
        </div>
    );
}

export default App;

