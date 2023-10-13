import React from 'react';
import {Avatar} from 'react-native-elements';
import { View,Button } from 'react-native';
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

export function Avatarr(){
  return(
  <View>
    
  <Avatar
    size={32}
    rounded
    title="Rd"
    containerStyle={{ backgroundColor: "blue" }}
  />
  <Avatar
    size={32}
    rounded
    title="AB"
    containerStyle={{ backgroundColor: "purple" }}
  />
  <MyBackButton />
</View>
  );
}