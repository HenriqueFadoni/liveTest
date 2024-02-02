import { StyleSheet } from 'react-native';
import variables from '../../styles/variables';

const styles = StyleSheet.create({
	banner: {
		width: '100%',
		height: 100,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
		backgroundColor: variables.blueLightColor,
	},
	imgContainer: {
		marginRight: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		resizeMode: 'cover',
		height: 75,
		width: 75,
		borderRadius: 10,
	},
	textContainer: {
		width: 250,
	},
	title: {
		fontWeight: '600',
		color: variables.blueDarkColor,
		paddingBottom: 6
	}
});

export default styles;
