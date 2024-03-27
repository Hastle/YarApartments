import React from 'react';
import { Parallax } from 'react-parallax';
import Filter from '../Filter/Filter';
import top_bg from '../../img/top-bg.jpg';
import styles from './styles.module.sass'

function HeroOverlay() {
	return (
		<Parallax
			className={styles.hero_overlay}
			bgImage={top_bg}
			strength={500}
			bgImageStyle={{
				width: '100%',
				height: 'auto',
				minHeight: '100vh',
				objectFit: 'cover',
			}}
		>
			<Filter/>
		</Parallax>
	);
}

export default HeroOverlay;
