import { ButtonGroup } from 'react-native-elements';
import React, {useState} from 'react'
import { Text, StyleSheet,Button,View } from 'react-native';
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

export function buttonGroup() {
const [selectedIndex, setSelectedIndex] = useState(0);
const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);
return (
 <View>
    <Text style={styles.subHeader}>Using Strings</Text>
    <ButtonGroup
      buttons={['SIMPLE', 'BUTTON', 'GROUP']}
      selectedIndex={selectedIndex}
      onPress={(value) => {
        setSelectedIndex(value);
      }}
      containerStyle={{ marginBottom: 20 }}
    />
    <ButtonGroup
      buttons={['Multiple', 'Select', 'Button', 'Group']}
      selectMultiple
      selectedIndexes={selectedIndexes}
      onPress={(value) => {
        setSelectedIndexes(value);
      }}
      containerStyle={{ marginBottom: 20 }}
    />
    <Text style={styles.subHeader}>Using Components</Text>
    <MyBackButton />
    </View>
)
}

const styles = StyleSheet.create({
subHeader: {
  backgroundColor : "#2089dc",
  color : "white",
  textAlign : "center",
  paddingVertical : 5,
  marginBottom : 10
}
})