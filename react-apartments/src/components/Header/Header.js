import React from 'react';
import './styles.module.sass';
import Logotype from '../Logotype/Logotype';
import MainMenu from '../MainMenu/MainMenu';
import styles from './styles.module.sass'

function Header() {
	return (
		<div className={styles.top_navigation}>
			<div className="container">
				<div className={styles.main_menu}>
					<Logotype />
					<MainMenu />
				</div>
			</div>
		</div>
	)
}

export default Header
