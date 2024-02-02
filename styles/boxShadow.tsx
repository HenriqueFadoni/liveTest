import { StyleSheet } from 'react-native';
import variables from './variables';

const styles = StyleSheet.create({
	standard: {
		shadowColor: variables.blackColor,
		shadowOffset: {
			width: 0,
			height: -5,
		},
		shadowOpacity: 0.15,
		shadowRadius: 6,
		elevation: 5,
	},
});

export default styles;