import React, { Component } from 'react';
import { connect } from 'react-redux';


class SelectedCity extends Component {
  renderContent = () => {
    const url = `https://kitt.lewagon.com/placeholder/cities/${this.props.selectedCity.slug}`;
    return (
      <div>
        <p>{this.props.selectedCity.name}</p>
        <p>{this.props.selectedCity.address}</p>
        <img src={url} />
      </div>
    );
  };

  render() {
    return (
      <div className="active-city">
        <div>
          {!this.props.selectedCity ? null : this.renderContent()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { selectedCity: state.selectedCity };
}

export default connect(mapStateToProps)(SelectedCity);
