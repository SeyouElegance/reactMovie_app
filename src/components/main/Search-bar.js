import React, { Fragment } from "react";
import Switch from "./Switch";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      placeHolder: "Search your movie..",
      intervalBeforeRequest: 1000,
      lockRequest: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleChange(e) {
    this.setState({ searchText: e.target.value });
    if (!this.state.lockRequest) {
      this.setState({ lockRequest: true });
      setTimeout(
        function() {
          this.search();
        }.bind(this),
        this.state.intervalBeforeRequest
      );
    }
  }

  search() {
    this.props.callback(this.state.searchText);
    this.setState({ lockRequest: false });
  }

  handleOnClick() {
    this.search();
    this.setState({ searchText: "" });
  }

  renderError() {
    // Si il y a une erreur, car requête retourne rien
    if (this.props.error) {
      return (
        <div className="col s12">
          <div className="red-text text-darken-4" role="alert">
            Neither Title matches
          </div>
        </div>
      );
    }
    return;
  }

  render() {
    return (
      <Fragment>
        <div className="container my-class-search">
          <div className="row">
            <div className="col s12">
              <p>Search Bar</p>
            </div>
            <div className="col s12">
              <nav className="my-class-nav-searchbar">
                <div className="nav-wrapper">
                  <form>
                    <div className="input-field z-depth-1">
                      <input
                        id="search"
                        type="search"
                        className="grey lighten-3"
                        onChange={this.handleChange}
                        placeholder={this.state.placeHolder}
                        value={this.state.searchText}
                      />
                      <label className="label-icon" htlmfor="search">
                        <i className="material-icons black-text">search</i>
                      </label>
                      <i
                        className="material-icons black-text"
                        onClick={this.handleOnClick}
                      >
                      delete
                      </i>
                    </div>
                  </form>
                </div>
              </nav>
            </div>
            {this.renderError()}
          </div>
        </div>
        <Switch />
      </Fragment>
    );
  }
}

export default SearchBar;
