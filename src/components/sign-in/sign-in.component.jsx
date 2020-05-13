import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();

		this.setState({ email: '', password: '' });
	};

	handleChange = (e) => {
		const { name, value } = e.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						label="Email"
						type="email"
						name="email"
						value={this.state.email}
						onChange={this.handleChange}
						required
					/>
					<FormInput
						label="Password"
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
						required
					/>

					<CustomButton type="submit">Sign in</CustomButton>
					<CustomButton onClick={signInWithGoogle}>Sign in with google</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;
