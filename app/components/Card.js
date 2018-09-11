import React from 'react';
import heart from '../images/heart.svg';
import club from '../images/club.svg';
import diamond from '../images/diamond.svg';
import spade from '../images/spade.svg';



class Card extends React.PureComponent {
	render () {
		const suit = (suit) => {
			switch (suit) {
				case 'Spades':
					return <object type="image/svg+xml" data={spade} className="suit-icon"/>;
				case 'Hearts':
					return <object type="image/svg+xml" data={heart} className="suit-icon"/>;
				case 'Clubs':
					return 	<object type="image/svg+xml" data={club} className="suit-icon"/>;
				case 'Diamonds': 
					return <object type="image/svg+xml" data={diamond} className="suit-icon"/>;
				default:
					return 'err';
			}
		}

		return (
			<div className='card'>
				{suit(this.props.card.suit)}
				{this.props.card.value}
			</div>
		)		
	}



}



export default Card;