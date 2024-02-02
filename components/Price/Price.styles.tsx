import { StyleSheet } from 'react-native';
import variables from '../../styles/variables';
import boxShadow from '../../styles/boxShadow';

const styles = StyleSheet.create({
	container: {
		height: 110,
		width: '100%',
		position: 'relative',
		zIndex: 99,
		bottom: 110,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: variables.whiteColor,
		paddingLeft: 10,
		paddingRight: 20,
		...boxShadow.standard
	},
	total: {
		fontSize: 16,
		color: variables.blackColor,
		fontWeight: '600',
		paddingBottom: 10
	},
	price: {
		fontSize: 24,
		color: variables.blackColor,
		fontWeight: '800',
		paddingBottom: 5
	},
	quote: {
		fontSize: 13,
		color: variables.blackColor,
		fontWeight: '400',
	},
});

export default styles;