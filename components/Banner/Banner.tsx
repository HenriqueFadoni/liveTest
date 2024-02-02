import React from 'react';
import { Image, Text, View } from 'react-native';
import attorneyImage from '../../assets/attorney.jpg';

import styles from './Banner.styles';

const Banner = () => (
	<View style={styles.banner}>
		<View style={styles.imgContainer}>
			<Image
				style={styles.image}
				source={attorneyImage}
			/>
		</View>
		<View style={styles.textContainer}>
			<Text style={styles.title}>
				Book noew to have the attorney handle your case
			</Text>
			<Text>
				97% success rate
			</Text>
		</View>
	</View>
);

export default Banner;
