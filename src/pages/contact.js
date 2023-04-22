import React from "react";
import Layout from '../components/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

function encode(data) {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&')
}

const Contact = () => {
	const [state, setState] = React.useState({});

	const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const form = e.target
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': form.getAttribute('name'),
				...state,
			}),
		})
			.then(() => alert("Form Submitted!"))
			.catch((error) => alert(error))
	}

	return (
		<Layout>
			<div className="textArea">
				<h1>Contact Me!</h1>
				<p>I'd love to listen your opinions on my works. Send me a message here or find me on different social media platforms. I'll try to reply the best I can.</p>
			</div>
			<form id="contact" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} className="form">
				<input type="hidden" name="form-name" value="contact" />
				<p className="hide">
					<label>
						Don't fill this out: <input name="bot-field" onChange={handleChange} />
					</label>
				</p>

				<p>
					<label>
						Your name:
						<br />
						<input type="text" name="name" onChange={handleChange} required/>
					</label>
				</p>

				<p>
					<label>
						Your email:
						<br />
						<input type="email" name="email" onChange={handleChange} required/>
					</label>
				</p>

				<p>
					<label>
						Message:
						<br />
						<textarea name="message" onChange={handleChange} required/>
					</label>
				</p>
			</form>
			<button className="formbtn" form="contact" type="submit">
				Submit
			</button>

			<div className="socials">
				<a href="/">
					<FontAwesomeIcon icon={faFacebookF} />
				</a>
				{/* <span> | </span> */}
				<a href="/">
					<FontAwesomeIcon icon={faInstagram} />
				</a>
				{/* <span> | </span> */}
				<a href="/">
					<FontAwesomeIcon icon={faTwitter} />
				</a>
			</div>
		</Layout>
	)
}

export default Contact;