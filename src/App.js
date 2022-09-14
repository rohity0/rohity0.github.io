import React, {  useRef } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { ThemeContext } from './ContextProvider/ThemeContext';

function App() {

	const { newTheme, open, handleMenu } =
		React.useContext(ThemeContext);
	const scrollRef = useRef();

	

	return (
		<>
		
				<div className='components'>
					<div
						style={{
							background: `${newTheme.menuBackground}`,
							color: `${newTheme.title}`,
							left: `${open ? '-100vw' : '0'}`,
						}}
						className='links'
					>
						<a onClick={handleMenu} href='#home'>
							Home
						</a>
						<a onClick={handleMenu} href='#about'>
							About
						</a>
						<a onClick={handleMenu} href='#skills'>
							Skills
						</a>

						<a onClick={handleMenu} href='#projects'>
							Projects
						</a>
						
						<a onClick={handleMenu} href='#contact'>
							Contact
						</a>
					</div>
					<Navbar />
					<Home scrollRef={scrollRef} />
				</div>
			
		</>
	);
}

export default App;
