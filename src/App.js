import React from "react";
import "./App.css";
import Content from "./UI/content/Content";
import { compose } from "redux";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { withRouter } from "./redux/withRouter";
import LoaderSVG from "../src/UI/SpinnerPreloader/Spinner";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      // setTimeout(() => {
      //   return <LoaderSVG />;
      // }, 1000);
      return <LoaderSVG />;
      // TODO Уточнить, чтобы не мерцало
    }

    return (
      <div className="App">
        <Content />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { initialized: state.app.initialized };
}

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
