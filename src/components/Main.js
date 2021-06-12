// Import React
import React, { Component } from "react";

// Import other Components
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import HowMade from "./HowMade";
import Featured from "./Featured";

// Import router and redux functionality
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// Import redux Action Creators
import { fetchItems } from "../redux/ActionCreators";

// Map state to props
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = {
  fetchItems: () => fetchItems(),
};

class Main extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <div className="page-wrap">
        <Header />
        <Switch>
          <Route
            path="/home"
            render={() => <Home items={this.props.items} />}
          />
          <Route
            exact
            path="/shop"
            render={() => <Shop items={this.props.items} />}
          />
          <Route exact path="/aboutus" render={() => <About />} />
          <Route exact path="/howitsmade" render={() => <HowMade />} />
          <Route
            exact
            path="/featured"
            render={() => <Featured items={this.props.items} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
