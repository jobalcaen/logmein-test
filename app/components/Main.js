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

		let i = newDeck.length, j, t;

		while(i){
			j = Math.floor(Math.random() * i--);

			t = newDeck[j];
			newDeck[j] = newDeck[i];
			newDeck[i] = t;
		}
		
		this.setState({
			deck: newDeck,
			dealtCards: []
		});
	}

	shuffle() {
		let arr = [...this.state.deck];
		let i = [...this.state.deck].length, j, t;

		while(i){
			j = Math.floor(Math.random() * i--);

			t = arr[j];
			arr[j] = arr[i];
			arr[i] = t;
		}

		this.setState({deck: arr});
	}

	dealOneCard() {
		const deck = [...this.state.deck];

		if (deck.length == 0) {
			// do nothing if there are no more cards in the deck
			null
		} else {
			const dealtCard =  deck[deck.length -1];

			deck.pop();

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
					<h1>Deck of cards</h1>
						<div className='cards-list'>
						{this.state.deck == 0 ? 'No more cards left to deal...' : deckCards}
						</div>
				</div>

				<div id='dealt-cards-box'>
					<h1>Dealt cards</h1>
					<div className='cards-list'>
						{dealtCards}
					</div>
				</div>

				<Controls
					dealt={this.state.dealtCards}
 					deckLength={this.state.deck.length}
					shuffle={this.shuffle}
					deal={this.dealOneCard}
					reset={this.generateDeck}
				/>

			</div>
		)
	}	
}

export default Main;