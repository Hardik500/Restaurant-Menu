import React from 'react';

class AddFishForm extends React.Component {
	createFish = event => {
		event.preventDefault();

		const fish = {
			name : event.target.name.value,
			price : parseFloat(event.target.price.value),
			status : event.target.status.value,
			desc : event.target.desc.value,
			image : event.target.image.value
		};

		// console.log(fish);
		this.props.addFish(fish);

		event.currentTarget.reset();
	}

	render(){
		return(
			<form className="fish-edit" onSubmit={this.createFish}>
				<input name="name" type="text" placeholder="Name"/>
				<input name="price" type="text" placeholder="Price"/>
				<select name="status">
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out</option>
				</select>
				<textarea name="desc" placeholder="Desc"/>
				<input name="image" type="text" placeholder="Image"/>
				<button type="submit">+ Add Fish</button>
			</form>
		);
	}
}

export default AddFishForm;