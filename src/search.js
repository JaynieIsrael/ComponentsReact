import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, StyleSheet,Button } from 'react-native';
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
  

export function SearchBarComponentProps() {
const [search, setSearch] = useState("");

const updateSearch = (search) => {
  setSearch(search);
};

return (
  <View style={styles.view}>
    <SearchBar
      placeholder="Type Here..."
      onChangeText={updateSearch}
      value={search}
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
