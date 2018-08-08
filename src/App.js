import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom'
import Index from './views/index'
import Login from './views/login'
import Register from './views/register'
import Prolist from './views/prolist'
import Prodetail from './views/prodetail'
import Orders from './views/orders'
import Proyd from './views/proyd'
class App extends Component {
  render() {
    return (
       	<Router>
       		<div>
						<Switch>
							<Route path='/index' component={Index}></Route>
							<Route path='/login' component={Login}></Route>
							<Route path='/register' component={Register}></Route>
							<Route path='/prolist/:list' component={Prolist}></Route>
							<Route path='/prodetail/:id' component={Prodetail}></Route>
							<Route path='/orders' component={Orders}></Route>
							<Route path='/proyd' component={Proyd}></Route>
							<Redirect to='/index'/>
						</Switch>
					</div>
    		</Router>
    );
  }
}

export default App;
