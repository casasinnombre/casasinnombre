import React from 'react';
import RatingNumber from './RatingNumber'

interface RatingItemProps {
    name: String,
    ratings: any[]
}

export default class RatingItem extends React.Component<RatingItemProps, any> {

  constructor(props: RatingItemProps) {
    super(props);
  }

  render() {

    var ratings = this.props.ratings.sort((a, b) => {
      if(a.colour < b.colour) { return -1; }
      if(a.colour > b.colour) { return 1; }
      return 0;
    }).map((r, i) => (<RatingNumber key={i} number={r.number} colour={r.colour} />))

    return (
      <li>
        <ul className="ratings-numbers">
          {ratings}
        </ul>
        {this.props.name}
      </li>
    );
  }
}
