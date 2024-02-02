import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './Button.styles';

interface ButtonProps {
	text: string;
}

const Button = ({
	text,
}: ButtonProps) => (
	<TouchableOpacity style={styles.button}>
		<Text style={styles.text}>
			{text}
		</Text>
	</TouchableOpacity>
);

export default Button;

