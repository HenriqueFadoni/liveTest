import React from 'react';
import { Text, View } from 'react-native';

import styles from './Summary.styles';
import ListItem from './ListItem/ListItem';

interface SummaryProps {
	list: {
		title: string;
		field: string;
	}[];
}

const Summary = ({
	list
}: SummaryProps) => {
	let renderList: JSX.Element[] = [];

	if (list.length > 0) {
		renderList = list.map((item, index) => (
			<ListItem
				key={index}
				title={item.title}
				field={item.field}
			/>
		));
	}

	return (
		<View style={styles.summary}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>
					Case Summary
				</Text>
			</View>
			<View style={styles.infoContainer}>
				<View style={styles.uploadImage}>
					<View>
						<Text style={styles.uploadImageText}>
							Upload ticket photo
						</Text>
					</View>
				</View>
				<View>
					{renderList}
				</View>
			</View>
		</View>
	)
};

export default Summary;
