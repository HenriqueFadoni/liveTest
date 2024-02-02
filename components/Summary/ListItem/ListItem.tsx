import React from 'react';
import { Text, View } from 'react-native';

import styles from './ListItem.styles';

interface SummaryProps {
	title: string;
	field: string;
}

const Summary = ({
	title,
	field,
}: SummaryProps) => (
	<View>
		<Text style={styles.fieldTitle}>
			{title}
		</Text>
		<Text style={styles.fieldText}>
			{field}
		</Text>
	</View>
);

export default Summary;
