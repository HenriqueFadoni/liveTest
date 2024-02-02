import { StyleSheet } from 'react-native';
import variables from '../../styles/variables';

const styles = StyleSheet.create({
	summary: {
		width: '100%',
		flex: 1,
		justifyContent: 'space-between',
		paddingRight: 10,
		paddingLeft: 10,
		paddingBottom: 30,
		paddingTop: 20,
		backgroundColor: variables.whiteDarkColor,
	},
	infoContainer: {
		flexDirection: 'row',
	},
	titleContainer: {
		paddingBottom: 20,
	},
	title: {
		color: variables.blackColor,
		fontSize: 20,
		fontWeight: '600',
	},
	uploadImage: {
		height: 80,
		width: 80,
		borderWidth: 1,
		borderColor: variables.greyColor,
		borderStyle: 'dotted',
		borderRadius: 10,
		marginRight: 20,
		padding: 10
	},
	uploadImageText: {
		color: variables.blackColor,
		fontSize: 15,
		fontWeight: '600',
	}
});

export default styles;