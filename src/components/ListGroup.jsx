import React from "react";
import PropTypes from 'prop-types';

class ListGroup extends React.Component{
  renderingKids = kids => {
    return kids.map((item, key) => <li key={key} className="list-group-item">{item}</li>
    )
  }

  render() {
    const {children} = this.props;

    return(
      <ul className="list-group">
        {this.renderingKids(children)}
      </ul>
    )
  }

}


ListGroup.propTypes = {
  children: PropTypes.array.isRequired,
}

export default ListGroup;
