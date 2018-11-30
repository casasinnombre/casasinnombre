import ReactDOM from 'react-dom';
import React from 'react';

interface MegaPointsItemProps {
    name: String,
    score: Number,
    colour: String,
    photo: any
}

export default class MegaPointItem extends React.Component<MegaPointsItemProps, any> {
  constructor(props: MegaPointsItemProps) {
    super(props);
  }

  render() {
    return (
      <div className={`idv-mega-points ${this.props.colour}`}>
        <div className="idv-name">
            <img src={this.props.photo} className="person-icon"/>
            <h3>{this.props.name}</h3>
        </div>
        <div className="idv-points"><p>{this.props.score}</p></div>
      </div>
    );
  }
}
