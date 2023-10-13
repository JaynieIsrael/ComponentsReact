import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import {Badge } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

function MyBackButton() {
  const navigation = useNavigation();

  return (
    <Button
      title="Back"
      onPress={() => {
        navigation.goBack();
      }}
    />
  );
}

export function BadgeComponent(){
return (
    <View>
    <Text style={styles.subHeader}>Standard Badge</Text>
      <View style={{flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
          marginBottom: 40,
        }}
      >
        <Badge value="3" status="success" />
        <Badge value="99+" status="error" />
        <Badge value="500" status="primary" />
        <Badge value="10" status="warning" />
      </View>
      <MyBackButton />
      </View>
);
};

const styles = StyleSheet.create({
subHeader: {
  backgroundColor : "#2089dc",
  color : "white",
  textAlign : "center",
  paddingVertical : 5,
  marginBottom : 10
}
});