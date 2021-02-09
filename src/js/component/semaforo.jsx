import React from "react";

//include images into your bundle

//create your first component
export class Semaforo extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedColor: null
		};
	}
	render() {
		console.log(this.state);
		let rojoSelectedClass = "";
		if (this.state.clickedColor == "red") rojoSelectedClass = "selected";
		let amarilloSelectedClass = "";
		if (this.state.clickedColor == "yellow")
			amarilloSelectedClass = "selected";
		let greenSelectedClass = "";
		if (this.state.clickedColor == "green") greenSelectedClass = "selected";
		return (
			<div>
				<div className="cable"></div>
				<div className="semaforo">
					<div
						className={"rojo " + rojoSelectedClass}
						onClick={() =>
							this.setState({ clickedColor: "red" })
						}></div>
					<div
						className={"amarillo " + amarilloSelectedClass}
						onClick={() =>
							this.setState({ clickedColor: "yellow" })
						}></div>
					<div
						className={"green " + greenSelectedClass}
						onClick={() =>
							this.setState({ clickedColor: "green" })
						}></div>
				</div>
			</div>
		);
	}
}
