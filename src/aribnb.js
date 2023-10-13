import React from "react";
import { Alert, View, StyleSheet,Button} from "react-native";
import { AirbnbRating, Rating } from "react-native-elements";
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

export  function RatingsExample() {
  function setRating(rating) {
    Alert.alert("Rating is: " + rating);
  }
  return (
    <View style={styles.container}>
      <AirbnbRating
        count={5}
        reviews={["Terrible", "Meh", "Good", "Very Good", "Amazing"]}
        defaultRating={5}
        size={20}
        onFinishRating={setRating}
      />
      <AirbnbRating
        selectedColor="green"
        reviewColor="green"
        count={5}
        reviews={["Terrible", "Meh", "Good", "Very Good", "Amazing"]}
        defaultRating={5}
        size={20}
        onFinishRating={setRating}
      />
      <Rating
        startingValue={1}
        ratingCount={5}
        imageSize={60}
        onFinishRating={setRating}
        fractions={1}
        showRating
      />
      <Rating
        type="rocket"
        startingValue={1}
        ratingCount={5}
        imageSize={60}
        onFinishRating={setRating}
        fractions={1}
        showRating
      />
       <MyBackButton />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
