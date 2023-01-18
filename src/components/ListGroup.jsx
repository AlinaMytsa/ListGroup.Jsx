import React from "react";
import PropTypes from 'prop-types';

class ListGroup extends React.Component{
//   renderingKids = kids => {
//     return kids.map((item, key) => <li key={key} className="list-group-item">{item}</li>
//     )
//   }
//
//   render() {
//     const {children} = this.props;
//
//     return(
//       <ul className="list-group">
//         {this.renderingKids(children)}
//       </ul>
//     )
//   }
  //   -------------

  render() {
    const {children} = this.props;

    function* getKey(){
      let i = 0;
      while (true){
        yield ++ i
      }
    }
    const kidsKey = getKey();

    return(
      <ul className="list-group">{
        children.map(item => {
          return(
            <li className="list-group-item" key={kidsKey.next().value}>{item}</li>
          )
        })
      }</ul>
    )
  }

}


ListGroup.propTypes = {
  children: PropTypes.array.isRequired,
}

export default ListGroup;
