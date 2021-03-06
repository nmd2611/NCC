import React, { Component } from "react";
import "./Search.css";
import { connect } from "react-redux";
//import "font-awesome/css/font-awesome.min.css";
class Search extends Component {
  constructor(props) {
    super(props);
  }
  onFormSubmit = (val, e) => {
    e.preventDefault();
    this.props.onSearch(val);
  };
  render() {
    const { onSearch, teams, Searching, search } = this.props;

    return (
      <div className="row myrow">
        <form onSubmit={e => this.onFormSubmit(this.props.search, e)}>
          <div className={this.props.minutes < 15 ? "spanGayab" : "spanSearch"}>
            <input
              type="text"
              className="form-control"
              id="filter"
              placeholder="Search..."
              onChange={Searching}
              autoComplete="off"
            />

            <button
              type="submit"
              onClick={() => onSearch(this.props.search)}
              className="btnSearch"
            >
              <img
                src="/Search.png"
                style={{ height: "100%", width: "100%" }}
              ></img>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    seconds: state.root.seconds,
    minutes: state.root.minutes,
    hours: state.root.hours
  };
};
export default connect(mapStateToProps)(Search);
