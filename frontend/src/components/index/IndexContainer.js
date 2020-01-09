import React, { Component } from "react";
import NavContainer from "../nav/NavContainer"
import PropTypes from "prop-types"
import { connect } from "react-redux"

class IndexContainer extends Component {
    static propTypes = {
        global: PropTypes.object.isRequired,
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

  render() {
    return (
      <div className="index">
          {/*<span>You are invited to join</span>*/}
        {/*<NavContainer history={this.props.history}/>*/}
        <a href="/rsvp">
            <img className="poster" src={this.props.global.STATIC_URL + "img/index.png"} />
        </a>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//     return {
//         global: state.global,
//         ...state,
//     }
// }

const mapStateToProps = dispatch => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(IndexContainer)