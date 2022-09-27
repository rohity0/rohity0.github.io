import React from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Contact.module.css';

const Contact = () => {
	const { newTheme } = React.useContext(ThemeContext);
	return (
		<footer
			className={styles.footer}
			id='contact'
		
		>
			<div className={styles.container}>
				<h1 style={{ color: `${newTheme.title}` }}>Get in Touch</h1>
				<p
					style={{ color: `${newTheme.para}` }}
					className={styles.paragraph}
				>
					I'm actively looking for any new opportunities, in
					full-stack web development.
				</p>
				<div
					style={{ color: `${newTheme.title}` }}
					className={styles.contactOptions}
				>
					<a
						href='tel:7015217808'
						aria-label='mobile'
						rel='noreferrer'
						target='_blank'
					>
						<i className='fas fa-phone-alt' />
						<p>+91-7015217808</p>
					</a>
					<a
						href='mailto:yadavry09@gmail.com'
						aria-label='email'
						target='_blank'
						rel='noreferrer'
					>
						<i className='far fa-envelope'></i>
						<p>yadavry09@gmail.com</p>
					</a>
					
					<a
						href='https://github.com/rohity0'
						aria-label='GitHub'
						rel='noreferrer'
						target='_blank'
					>
						<i className='fab fa-github' />
						<p>rohity0</p>
					</a>

					<a
						href='https://www.linkedin.com/in/rohity09yadav/'
						aria-label='Linkedin'
						target='_blank'
						rel='noreferrer'
					>
						<i className='fab fa-linkedin-in' />
						<p>rohity09yadav</p>
					</a>
				</div>
			</div>
			<div
				style={{ background: `${newTheme.line}` }}
				className={styles.line}
			/>
			<div
				style={{ color: `${newTheme.para}` }}
				className={styles.copyright}
			>
			</div>
		</footer>
	);
};

export default Contact;
