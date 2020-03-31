import React , { Component } from 'react' ;
import { Route , BrowserRouter as Router, Switch} from 'react-router-dom' ;

import Category from './Category' ;
import Home from './Home' ;
import Expenses from './Expenses' ;

class App extends Component {
    state = {  }


    render() { 
        return (  
                    <Router>
                        <Switch>
                            <Route path = '/' exact = {true} component = {Home}></Route>
                            <Route path = '/categories' exact = {true} component = {Category}></Route>
                            <Route path = '/expenses' exact = {true} component = {Expenses}></Route>
                        </Switch>
                    </Router>



        );
    }
}
 
export default App ;