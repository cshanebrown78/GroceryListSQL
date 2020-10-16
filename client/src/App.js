import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { loadUser } from './actions/authActions'

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Pages
import MainPage from './pages/Index';
import ShoppingList from './pages/ShoppingList';
import BasicList from './pages/BasicList';
import RepeatableList from './pages/RepeatableList';
import NoMatch from './pages/NoMatch';

class App extends Component {
    componentDidMount() {
      store.dispatch(loadUser());
    }


  render() {
    return(
      <Provider store={store}>
        <AppNavbar />
        <Router>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/shoppinglist' component={ShoppingList} />
            <Route exact path='/basiclist' component={BasicList} />
            <Route exact path='/repeatablelist' component={RepeatableList} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}


// class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <div className="App">
//           <AppNavbar />
//           <Container>
//             {/* <ItemModal /> */}
//             <ShoppingList />
//           </Container>
          
//         </div>
//       </Provider>
      
//     )
//   }  
//     ;
// }

export default App;
