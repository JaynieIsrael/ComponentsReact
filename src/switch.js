import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Switch } from '@rneui/themed';
import { View, StyleSheet,Button } from 'react-native';

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



export function SwitchComponentProps (){
const [checked, setChecked] = useState(false);

const toggleSwitch = () => {
  setChecked(!checked);
};

return (
  <View style={styles.view}>
   <Switch
      value={checked}
      onValueChange={(value) => setChecked(value)}
    />
    <MyBackButton />
  </View>
);
};

const styles = StyleSheet.create({
view: {
  margin: 10,
},
});
