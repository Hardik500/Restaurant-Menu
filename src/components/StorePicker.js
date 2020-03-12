import React from 'react';

//Import a function from a file
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	myInput = React.createRef(); //For 2nd method

	goToStore = event => {
		//Prevent the form from submitting
		event.preventDefault();

		//Get the value of the input field
		//1st method
		// console.log(event.target.store-name.value);
		//OR
		//2nd method
		// console.log(this.myInput.current.value);
		const storeName = this.myInput.current.value;

		//Change the page to /store/whatever...
		this.props.history.push(`/store/${storeName}`);

	}

	render(){
		return (
			<React.Fragment> {/*Fragment used for wrapping up multiple html codes since only one tag can be used at a time*/}
				{/* JSX comments format */}
				{/* <p>Paragraph</p> */}
				<form className="store-selector" onSubmit={this.goToStore}>
					<h2>Please Enter a Store</h2>
					<input
						type="text"
						name="store-name"
						ref={this.myInput} //For 2nd method
						required
						placeholder="StoreName"
						defaultValue={getFunName()}
					/>
					<button type="submit">Visit Store ➡</button>
				</form>
			</React.Fragment>
			);
	}
}

export default StorePicker;