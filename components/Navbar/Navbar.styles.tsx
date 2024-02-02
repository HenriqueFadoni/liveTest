import { StyleSheet } from 'react-native';
import variables from '../../styles/variables';

const styles = StyleSheet.create({
	navbar: {
		width: '100%',
		height: 50,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingRight: 10,
		paddingLeft: 10,
		paddingBottom: 10,
		paddingTop: 10
	},
	backBtn: {
		color: variables.blackColor,
		fontSize: 10,
		flexDirection: 'row',
		alignContent: 'center',
	},
	image: {
		resizeMode: 'cover',
		height: 15,
		width: 15,
		marginRight: 2
	}
});

export default styles;
