import React from 'react';

interface RatingNumberProps {
    number: Number,
    colour: String
}

export default class RatingNumber extends React.Component<RatingNumberProps, any> {

  constructor(props: RatingNumberProps) {
    super(props);
  }

  render() {
    return (
      <li className={`${this.props.colour}`}>{this.props.number}</li>
    );
  }
}
