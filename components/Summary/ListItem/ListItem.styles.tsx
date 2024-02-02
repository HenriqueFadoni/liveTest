import { StyleSheet } from 'react-native';
import variables from '../../../styles/variables';

const styles = StyleSheet.create({
	fieldTitle: {
		color: variables.blackColor,
		fontSize: 16,
		fontWeight: '600'
	},
	fieldText: {
		paddingTop: 5,
		paddingBottom: 15,
		fontSize: 20,
		fontWeight: '200'
	}
});

export default styles;