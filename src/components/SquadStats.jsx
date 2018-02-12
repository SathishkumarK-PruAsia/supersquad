import React, { Component } from 'react';
import { connect } from 'react-redux';

class SquadStats extends Component {
  calcStrength() {
    return this.props.heroes.reduce((total, hero) => {
      return total + hero.strength;
    }, 0)
  }

  calcIntelligence() {
    return this.props.heroes.reduce((total, hero) => {
      return total + hero.intelligence;
    }, 0)
  }

  calcSpeed() {
    return this.props.heroes.reduce((total, hero) => {
      return total + hero.speed;
    }, 0)
  }

  render() {
    return (
      <div>
        <h4>Squad Stats</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Overall Strength</b> { this.calcStrength() }
          </li>
          <li className="list-group-item">
            <b>Overall Intelligence</b> { this.calcIntelligence() }
          </li>
          <li className="list-group-item">
            <b>Overall Speed</b> { this.calcSpeed() }
          </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes
  };
}
export default connect(mapStateToProps, null)(SquadStats);
