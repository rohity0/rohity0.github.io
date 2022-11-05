import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import Card from '../Card/Card';
import SideIcons from '../SideIcons/SideIcons';
import TechStacks from '../TechStacks/TechStacks';
import AOS from 'aos';
import 'aos/dist/aos.css';
import photo from "../../logo/rohit.png"
import { Button } from '../Button/Button';
import About from '../About/About';
import { projects } from '../../Utils/Projects';
import Contact from '../Contact/Contact';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import GitHubCalendar from 'react-github-calendar';

const Home = ({ scrollRef }) => {
	const [projectArray, setProjectArray] = useState(
		projects.slice(0, 4),
	);
	const { newTheme } = React.useContext(ThemeContext);
	const [offset, setOffset] = useState(0);
	const [location, setLocation] = useState(0);
	useEffect(() => {
		AOS.init();
	});

	const handleOffset = () => {
		setOffset(window.pageYOffset);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleOffset);
		return () => window.removeEventListener('scroll', handleOffset);
	}, []);

	useEffect(() => {
		document.body.style.backgroundColor = newTheme.background;
	}, [newTheme]);

	

	console.log(offset);
	const handleShowMoreBtn = () => {
		if (projects.length === projectArray.length) {
			setProjectArray(projects.slice(0, 4));
			window.scrollTo(0, location);
		} else {
			setProjectArray(projects);
			setLocation(offset)
		}
	};

	return (
		<div ref={scrollRef}>
			<SideIcons />
			<div
				id='home'
				className={styles.profile}
				style={{ backgroundColor: `${newTheme.imgBackground}` }}
			>
				<div
					data-aos='fade-zoom-out'
					className={styles.intro}
					style={{
						color: `${newTheme.para}`,
						transform: `translateX(-${offset * 2.5}px)`,
						opacity: `${
							offset > 300 ? '0' : offset > 160 ? '.5' : '1'
						}`,
					}}
				>
					<h1>
						<span>Hi, My name is</span>
						<div
							className={styles.name}
							style={{ color: `${newTheme.title}` }}
						>
							Rohit Yadav
						</div>
					</h1>
					<h1>
						I am a Full Stack Developer based in Gurgaon. I build
						things for web.
					</h1>
					<div className={styles.btn}>
						
						<a href='https://drive.google.com/file/d/1hsSEbOs5F62V4tQkpTIfwlpyf-UzUp_h/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
							<Button  
								text={
									<span className={styles.resumeBtn}>
										<span>Resume</span>
										<i className='fas fa-file-download'></i>
									</span>
								}
							
							/>
						</a>
					</div>
				</div>

				<div
					style={{
						transform: `translateX(${offset * 2.5}px)`,
						opacity: `${
							offset > 300 ? '0' : offset > 160 ? '.5' : '1'
						}`,
					}}
					className={styles.profileImage}
				>
					<img
					     src={photo}
					
						alt='Profile pic' style={{height: '100%',width: '85%'}}
					/>
				</div>
			</div>

			<div
				id='about'
				style={{
					background: `${newTheme.highlightBackground}`,
				}}
				className={styles.experience}
			>
				<About />

				
			</div>

			<div>

			</div>

			<div id='skills' className={styles.techStacks}>
				<TechStacks />
			</div>

			<div
				
				className={styles.experience}
				style={{
					background: `${newTheme.highlightBackground}`,
				}}
			>

			 	 <div>
				  <h1
					style={{ color: `${newTheme.title}` }}
					className={styles.heading}
				>
					 GitHub Calendar
				</h1>
				<div className={styles.borderBottom} />
				 </div>

                    <div
						data-aos='fade-right'
						data-aos-offset='200'
						data-aos-easing='ease-in-sine'
						data-aos-duration='800'
					>
					<GitHubCalendar 
					   	style={{ color: `${newTheme.title}` }}
				        username='rohity0'
			         	/>
						
					</div>

				
			</div>

			<div>
			<h1
					style={{ color: `${newTheme.title}`, marginTop: "55px", }}
					className={styles.heading}
				>
					 GitHub Stats
				</h1>
				<div className={styles.borderBottom} />

			<div className={styles.githubstat}>
				
				<div style={{paddingTop: "50px",  }}>
				  <img className={styles.gitimage} src="https://github-readme-streak-stats.herokuapp.com/?user=rohity0&layout=compact" alt="rohity0" />
			   </div>

			   <div  style={{paddingTop: "50px"}}>
				  <img className={styles.gitimage}  src="https://github-readme-stats.vercel.app/api?username=rohity0&show_icons=true&locale=en" alt="rohit" />
			   </div>
  </div>	  
			</div>
  


			{/* project section from here => */}
			<div id='projects' className={styles.projects}>
				<h1
					style={{ color: `${newTheme.title}` }}
					className={styles.heading}
				>
					Few Things I've Build
				</h1>
				<div className={styles.borderBottom} />
				<div>
					{projectArray.map((item, index) => (
						<Card key={index} {...item} />
					))}
				</div>
				<Button
					text={
						projects.length !== projectArray.length
							? 'Show More'
							: 'Go to Top'
					}
					handleButton={handleShowMoreBtn}
				/>
			</div>

			<div
				style={{
					background: `${newTheme.highlightBackground}`,
				}}
			>
				<Contact />
			</div>
		</div>
	);
};

export default Home;
