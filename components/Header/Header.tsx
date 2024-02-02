import React from 'react';
import { Text, View } from 'react-native';

import styles from './Header.styles';

const Header = ({
	title = 'We can fight your ticket!',
	description = 'Our SmartMatch Algorithm was able to match you with one of the top traffic attorneys in Seattle, Washington'
}) => (
	<View style={styles.header}>
		<Text style={styles.title}>
			{title}
		</Text>
		<Text style={styles.description}> 
			{description}
		</Text>
	</View>
);

export default Header;
