// Import React
import React, { Component } from "react";

// Import other Components
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import HowMade from "./HowMade";

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
          <Route exact path="/home" render={() => <Home />} />
          <Route
            exact
            path="/shop"
            render={() => <Shop items={this.props.items} />}
          />
          <Route exact path="/aboutus" render={() => <About />} />
          <Route exact path="/howitsmade" render={() => <HowMade />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
