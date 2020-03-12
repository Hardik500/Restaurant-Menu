import React from "react";

// Stateless

const Header = props => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">of</span>
        <span className="The">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      {/*<span>Fresh Seafood Market</span>*/}
      {/*Static Part*/}
      <span>{props.tagline}</span>
      {/*Dynamic Part*/}
    </h3>
  </header>
);

/*
Stateless functional component is used in the case when we are using one method that is render in our case
This may increase a bit of performance

Instead of (props) we can also use ({tagline, age or whatever}) i.e ES6 destructuring in the
function declaration and instead of using {props.tagline} we can just use
{tagline}{age} etc...
this.props.tagline becomes props.tagline
*/

/*
class Header extends React.Component {
	render(){
		return(
			<header className="top">
				<h1>
					Catch
						<span className="ofThe">
							<span className="of">of</span>
							<span className="The">The</span>
						</span>
					Day
				</h1>
				<h3 className="tagline">
					//<span>Fresh Seafood Market</span> //Static Part
					<span>{this.props.tagline}</span> //Dynamic Part
				</h3>
			</header>
		);
	}
}
*/

export default Header;
