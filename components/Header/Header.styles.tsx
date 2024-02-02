import { StyleSheet } from 'react-native';
import variables from '../../styles/variables';

const styles = StyleSheet.create({
	header: {
		width: '100%',
		flex: 1,
		justifyContent: 'space-between',
		paddingRight: 10,
		paddingLeft: 10,
		paddingBottom: 30,
		paddingTop: 10
	},
	title: {
		color: variables.blackColor,
		fontSize: 20,
		fontWeight: '600',
		paddingBottom: 20,
	},
	description: {
		color: variables.greyColor,
		fontSize: 15,
		fontWeight: '600',
		paddingBottom: 10,
	}
});

export default styles;