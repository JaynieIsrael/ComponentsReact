import * as React from 'react';
import { Button, View, Text, ScrollView,StyleSheet} from 'react-native';
import { withTheme } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RatingsExample } from './src/aribnb';
import { Avatarr } from './src/avatarr';
import { BadgeComponent } from './src/badge';
import { bottomSheet } from './src/bottomsheet';
import { buttonGroup } from './src/buttonGroup';
import { CardsComponentsProps } from './src/cards';
import { CheckboxComponentProps } from './src/checkbox';
import { chips } from './src/chips';
import { DialogComponentProps } from './src/diaglog';
import { DividerViewTypes } from './src/divider';
import { fab } from './src/FAB';
import { headerr } from './src/header';
import { inputt } from './src/input';
import { FunctionComponent } from './src/linearprog';
import { OverlayComponentProps} from './src/overlay';
import { PricingCardComponentProps } from './src/pricing';
import { SearchBarComponentProps } from './src/search';
import { SlidersComponentProps } from './src/slider';
import { SwitchComponentProps, speeddial } from './src/switch';
import { Tiles } from './src/tile';

function HomeScreen({ navigation: { navigate } }) {
  return (
    
    <View style={{ flex: 1,margin:20,fontWeight:'bold'}}>
      
      <Text >COMPONENTS</Text>
       <View style={styles.button}>
      <Button title="AirBNBRating Component" onPress={() => navigate('AirBnBRating')}/>
      </View>
      <View style={styles.button}>
      <Button  title="Avatar Component" onPress={() => navigate('Avatar')}/>
      </View>
      <View style={styles.button}>
      <Button  title="Badge Component" onPress={() => navigate('Badge')}/>
      </View>
      <View style={styles.button}>
      <Button  title="BottomSheet Component" onPress={() => navigate('bottomsheet')}/>
      </View>
      <View style={styles.button}>
      <Button  title="ButtonGroup Component" onPress={() => navigate('buttongroup')}/>
      </View>
      <View style={styles.button}>
      <Button  title="Cards Component" onPress={() => navigate('Cards')}/>
      </View>
      <View style={styles.button}>
      <Button  title="CheckBox Component" onPress={() => navigate('checkBox')}/>
      </View>
      <View style={styles.button}>
      <Button  title="Chips Component" onPress={() => navigate('Chips')}/>
      </View>
      <View style={styles.button}>
      <Button  title="Dialog Component" onPress={() => navigate('Dialog')}/>
      </View>
      <View style={styles.button}>
      <Button  title="Divider Component" onPress={() => navigate('Divider')}/>
      </View>
      <View style={styles.button}>
      <Button  title="FAB Component" onPress={() => navigate('FAB')}/>
      </View>
      <View style={styles.button}>
      <Button  title="Header Component" onPress={() => navigate('Header')}/>
      </View>
      <View style={styles.button}>
      <Button  title="Input Component" onPress={() => navigate('Input')}/>
      </View>
      <View style={styles.button}>
      <Button  title="Linear Progress Component" onPress={() => navigate('Linear')}/>
      </View>
      <View style={styles.button}>
      <Button  title="Overlay Component" onPress={() => navigate('overlay')}/>
      </View>
      <View style={styles.button}>
      <Button  title="Pricing Component" onPress={() => navigate('pricing')}/>
      </View>
      <View style={styles.button}>
      <Button  title="Search Component" onPress={() => navigate('search')}/>
      </View>
      <View style={styles.button}>
      <Button  title="Slider Component" onPress={() => navigate('slider')}/>
      </View>
      <View style={styles.button}>
      <Button  title="Switch Component" onPress={() => navigate('switch')}/>
      </View>
      <View style={styles.button}>
      <Button  title="Tile Component" onPress={() => navigate('tile')}/>
      </View>
      
    </View>
    
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
  
    <ScrollView style={{margin:'10'}}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AirBnBRating" component={RatingsExample} />
        <Stack.Screen name="Avatar" component={Avatarr} />
        <Stack.Screen name="Badge" component={BadgeComponent} />
        <Stack.Screen name="bottomsheet" component={bottomSheet} />
        <Stack.Screen name="buttongroup" component={buttonGroup} />
        <Stack.Screen name="Cards" component={CardsComponentsProps} />
        <Stack.Screen name="checkBox" component={CheckboxComponentProps} />
        <Stack.Screen name="Chips" component={withTheme(chips)} />
        <Stack.Screen name="Dialog" component={DialogComponentProps} />
        <Stack.Screen name="Divider" component={DividerViewTypes} />
        <Stack.Screen name="FAB" component={fab} />
        <Stack.Screen name="Header" component={headerr} />
        <Stack.Screen name="Input" component={inputt} />
        <Stack.Screen name="Linear" component={FunctionComponent} />
        <Stack.Screen name="overlay" component={OverlayComponentProps} />
        <Stack.Screen name="pricing" component={PricingCardComponentProps} />
        <Stack.Screen name="search" component={SearchBarComponentProps} />
        <Stack.Screen name="slider" component={SlidersComponentProps} />
        <Stack.Screen name="switch" component={SwitchComponentProps} />
        <Stack.Screen name="tile" component={Tiles} />
      </Stack.Navigator>
    </NavigationContainer>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  button: {
    margin: 10,
  
  },
  });



export default App;