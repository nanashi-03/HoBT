import React, { useState } from "react";
import Layout from '../components/layout';

const Contact = () => {
	const [formStatus, setFormStatus] = useState('Send');

	const onSubmit = (e) => {
		e.preventDefault();
		setFormStatus('Submitting');
		const {name, email, message} = e.target.elements;
		
		let sub = {
			name: name,
			email: email,
			message: message,
		}

		console.log(sub);
	}

	return (
		<Layout>
			<>
			</>
		</Layout>
	)
}