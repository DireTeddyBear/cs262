import React, { useState,useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Home({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  function fixData(list){
      for (var i = 0; i < list.length; i++){
        list[i].id = list[i].id + ''
        console.log(list[i])
      }
    return list
  }
  useEffect(() => {
    fetch('https://cs262-gamework-service-jmg64.herokuapp.com/players/')
        .then((response) => response.json())
        .then((json) => fixData(json))
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
  }, [])

    return (
        <View style={globalStyles.container}>
            <FlatList data={data} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                    <Card>
                        <Text style={globalStyles.titleText}>{ item.email }</Text>
                    </Card>
                </TouchableOpacity>
            )} />
        </View>
    );
}
