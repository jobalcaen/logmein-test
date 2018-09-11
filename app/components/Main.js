import React from 'react';
import Card from './Card';
import Controls from './Controls';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			deck: [],
			dealtCards: []
		};

		this.generateDeck = this.generateDeck.bind(this);
		this.shuffle = this.shuffle.bind(this);
		this.dealOneCard = this.dealOneCard.bind(this);
	}

	generateDeck() {
		console.log('generate deck');
		const cardValues = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King','Ace'] ;
		const suits = ['Diamonds','Hearts','Clubs','Spades'];
		const newDeck = [];

		cardValues.forEach((value)=> {
			suits.forEach((suit) => {
				newDeck.push({
					name: `${value} of ${suit}`,
					suit: suit,
					value: value
				})
			})
		})

		//shuffle the initial deck and clear the dealt cards array
		this.setState({
			deck: newDeck.sort(() => 0.5 - Math.random()),
			dealtCards: []
		});
	}

	shuffle() {
		this.setState({deck: [...this.state.deck].sort(() => 0.5 - Math.random())});
	}

	dealOneCard() {
		const deck = [...this.state.deck];

		if (deck.length == 0) {
			// do nothing if there are no more cards in the deck
			null
		} else {
			const getRandomInt = (max) => {
				// get a ranom integer that is within the index range of the deck
  				return Math.floor(Math.random() * Math.floor(max));
			}
		
			const randomInt = getRandomInt(deck.length);

			// pick a random card from the array
			const dealtCard =  deck[randomInt];

			// remove the card that was dealt from the deck, change in place
			deck.splice(randomInt,1);

			this.setState({
				deck: [...deck],
				dealtCards: [...this.state.dealtCards, dealtCard]
			})

		}
	}


	componentDidMount() {
		this.generateDeck();
  	}
	
	render() {

		const deckCards = this.state.deck.map(card => <Card card={card}/>);

		const dealtCards = this.state.dealtCards.map(card => <Card card={card}/>);

		return (
			<div className="grid-container">

				<div id='deck-cards-box'>
					<h1>Deck of Cards</h1>
						<div className='cards-list'>
						{this.state.deck == 0 ? 'No more cards left to deal...' : deckCards}
						</div>
				</div>

				<div id='dealt-cards-box'>
					<h1>Dealt Cards</h1>
					<div className='cards-list'>
						{dealtCards}
					</div>
				</div>

				<Controls
					dealt={this.state.dealtCards}
 					deck={this.state.deck}
					shuffle={this.shuffle}
					deal={this.dealOneCard}
					reset={this.generateDeck}
				/>

			</div>
		)
	}	
}

export default Main;