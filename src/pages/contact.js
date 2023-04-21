import React from "react";
import Layout from '../components/layout';
import { useForm, ValidationError } from "@formspree/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
	const [state, handleSubmit] = useForm(process.env.FORMSPREE_TOKEN);
	if (state.succeeded) {
		alert("Message Submitted!");
	}

	return (
		<Layout>
			<div className="textArea">
				<h1>Contact Me!</h1>
				<p>I'd love to listen your opinions on my works. Send me a message here or find me on different social media platforms. I'll try to reply the best I can.</p>
			</div>
			<form id="contact" method="POST" onSubmit={handleSubmit} className="form">
				<label htmlFor="email">Email Address</label>
				<input id="email" type="email" name="email" required />
				<ValidationError
					prefix="Email"
					field="email"
					className="fieldErrors"
					errors={state.errors}
				/>

				<label htmlFor="message">Message</label>
				<textarea id="message" name="message" required></textarea>
				<ValidationError
					prefix="Message"
					field="message"
					className="fieldErrors"
					errors={state.errors}
				/>
			</form>
			<button className="formbtn" form="contact" type="submit" disabled={state.submitting}>
				Submit
			</button>
			<ValidationError className="formErrors" errors={state.errors} />

			<div className="socials">
				<a href="/">
					<FontAwesomeIcon icon={faFacebookF} />
				</a>
				<span> | </span>
				<a href="/">
					<FontAwesomeIcon icon={faInstagram} />
				</a>
				<span> | </span>
				<a href="/">
					<FontAwesomeIcon icon={faTwitter} />
				</a>
			</div>
		</Layout>
	)
}

export default Contact;