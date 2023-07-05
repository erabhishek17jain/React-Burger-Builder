import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/CheckOut/Checkout';
import Orders from './containers/Orders/Orders';
import About from './components/About/About'
import Auth from './containers/Auth/Auth'
import Logout from './containers/Auth/Logout/Logout';
import { connect } from 'react-redux'
import * as actions from './store/actions/index'

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignUp();
  }
  render () {
    let routes = (
        <Switch>
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/about" component={About} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/auth" component={Auth} />
            <Redirect to='/' />
          </Switch>
    );

    if (this.props.isAuth){
      routes = (
        <Switch>
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/orders" component={Orders} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/about" component={About} />
            <Route path="/auth" component={Auth} />
            <Route path="/logout" component={Logout} />
            <Redirect to='/' />
          </Switch>
      )
    }
    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !==null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
