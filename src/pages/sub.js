import React from "react";
import Layout from '../components/layout';
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class SubForm extends React.Component {
	constructor() {
		super()
		this.state = { email: "", result: {} }
	}

	_handleSubmit = async e => {
		console.log("Handling Sub")
		e.preventDefault()
		const result = await addToMailchimp(this.state.email)
		console.log("result", result)
		this.setState({ result: result.result })
	}

	handleChange = event => {
		this.setState({ email: event.target.value })
	}

	render() {
		return this.state.result === "success" ? (
			<Layout>
				<div>SUCCESS</div>
			</Layout>
		) : this.state.result === "error" ? (
			<Layout>
				<div>ERROR</div>
			</Layout>
		) : (
			<Layout>
				<div className="textArea">
					<h1>Subscribe to never miss a blog!</h1>
				</div>
				<form className="form" onSubmit={this._handleSubmit}>
					<p>
						<label>
							Your email:
							<br />
							<input type="email" name="email" onChange={this.handleChange} required/>
						</label>
					</p>
					<br />
					<button className="formbtn" type="submit">
						Subscribe
					</button>
				</form>
			</Layout>
		)
	}
}