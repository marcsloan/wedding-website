import React, { Component } from "react";
import PropTypes from "prop-types";

export default class NavContainer extends Component {
    static propTypes = {
        rsvp: PropTypes.bool.isRequired,
        gettinghere: PropTypes.bool.isRequired,
        wheretostay: PropTypes.bool.isRequired,
        weddinginfo: PropTypes.bool.isRequired
    }
  render() {
    return (
      <div className="wedding-navbar">
          {this.props.rsvp ? <button className="wedding-btn nav-btn" onClick={() => this.props.history.push("/rsvp/")}>RSVP</button> : ""}
          {this.props.gettinghere ? <button className="wedding-btn nav-btn yellow" onClick={() => this.props.history.push('/gettinghere/')}>Getting Here</button> : ""}
          {this.props.wheretostay ? <button className="wedding-btn nav-btn orange" onClick={() => this.props.history.push('/wheretostay/')}>Where to stay</button> : ""}
          {this.props.weddinginfo ? <button className="wedding-btn nav-btn yellow" onClick={() => this.props.history.push('/weddinginfo/')}>Wedding Info</button> : ""}
      </div>
    )
  }
}