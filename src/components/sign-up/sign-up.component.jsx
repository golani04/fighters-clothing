import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
		};
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);

			await createUserProfileDocument(user, { displayName });
			// update state
			this.setState({ email: '', password: '', displayName: '' });
		} catch (error) {
			console.error(error);
		}
	};

	handleChange = (e) => {
		const { name, value } = e.target;

		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="sign-up">
				<h2>I don't have an account</h2>
				<span>Sign up with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						label="Name"
						type="text"
						name="displayName"
						value={displayName}
						onChange={this.handleChange}
						required
					/>
					<FormInput
						label="Email"
						type="email"
						name="email"
						value={email}
						onChange={this.handleChange}
						required
					/>
					<FormInput
						label="Password"
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
						required
					/>
					<FormInput
						label="Confirm Password"
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						onChange={this.handleChange}
						required
					/>

					<CustomButton type="submit">Sign up</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
