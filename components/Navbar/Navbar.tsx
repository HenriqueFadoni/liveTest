import React from 'react';
import { Image, Text, View } from 'react-native';
import chevLeftImg from '../../assets/chevLeft.png';
import exitImg from '../../assets/exit.png';

import styles from './Navbar.styles';

const Navbar = () => (
	<View style={styles.navbar}>
		<View style={styles.backBtn}>
			<Image
				style={styles.image}
				source={chevLeftImg}
			/>
			<Text>
				Back
			</Text>
		</View>
		<View>
			<Image
				style={styles.image}
				source={exitImg}
			/>
		</View>
	</View>
);

export default Navbar;
