import React from 'react';

import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

import Fish from './Fish';

import sampleFishes from '../sample-fishes';

class App extends React.Component {
	state = {
		fishes: {},
		order: {}
	};

	addFish = (fish) => {
		// console.log('Fish added');
		// console.log(fish)

		//1. Take a copy of the initial state
		const fishes = {...this.state.fishes};
		//2. Add our fish to the fishes variable
		fishes[`fish${Date.now()}`] = fish;
		//3. Set the new fishes object to state
		this.setState({fishes}); //equilent to fishes: fishes
	}

	loadSamplesFishes = () => {
		this.setState({
			fishes: sampleFishes
		});
	}

	addToOrder = (key) => {
		const order = {...this.state.order};
		order[key] = order[key] + 1 || 1;
		this.setState({order});
	}

	render(){
		return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
				details={this.state.fishes[key]}
				index={key}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>

        <Order fish={this.state.fishes} order={this.state.order}/> {/* you can also use {...this.state} to pass all the state as props */}
        <Inventory
          addFish={this.addFish}
          loadSamplesFishes={this.loadSamplesFishes}
        />
      </div>
    );
	}
}

export default App;