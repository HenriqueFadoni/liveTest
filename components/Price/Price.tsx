import React from 'react';
import { Text, View } from 'react-native';

import styles from './Price.styles';
import Button from '../Button/Button';

const Pricing = () => (
	<View style={styles.container}>
		<View>
			<View>
				<Text style={styles.total}>
					Total:
				</Text>
				<Text style={styles.price}>
					$10
				</Text>
			</View>
			<View>
				<Text style={styles.quote}>
					Quote exprires in 29 minutes
				</Text>
			</View>
		</View>
		<Button text='Continue'/>
	</View>
);

export default Pricing;

