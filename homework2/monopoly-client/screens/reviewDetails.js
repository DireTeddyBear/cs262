import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

import Card from '../shared/card';

export default function ReviewDetails({ route, navigation }) {
    return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>
          { navigation.getParam('id') }
        </Text>
        <Text>{ navigation.getParam('email') }</Text>
        <Text>{ navigation.getParam('name') }</Text>
      </Card>
    </View>
	);
}
