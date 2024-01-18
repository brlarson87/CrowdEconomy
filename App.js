import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux'
import store from './Store';
import { NavigationContainer } from "@react-navigation/native";
import * as Font from 'expo-font';


const fetchFonts = () => {
  return Font.loadAsync({
    'Lexend-Deca-Regular': require('./assets/fonts/LexendDeca-Regular.ttf'),
    'Lexend-Deca-semibold': require('./assets/fonts/LexendDeca-SemiBold.ttf'),
    'Lexend-Deca-bold': require('./assets/fonts/LexendDeca-ExtraBold.ttf'),
    'Lexend-Deca-thin': require('./assets/fonts/LexendDeca-Thin.ttf'),
    'Inria-Sans-bold' : require('./assets/fonts/InriaSans-Bold.ttf'),
    'Inria-Sans' : require('./assets/fonts/InriaSans-Regular.ttf')
  });
}
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import TabNavigator from "./navigators/TabNavigator";
import PrizeDetails from './screens/PrizeDetails';
import ProductDetails from './screens/ProductDetails';


const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false}}
      />
      <Stack.Screen 
        name="Prize Details" 
        component={PrizeDetails}
        options={( { route } ) => ({ 
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
            shadowOpacity: 0
          }
        })} 
      />  
      <Stack.Screen name="Product Details" component={ProductDetails} />  
    </Stack.Navigator>
  )
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await fetchFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }
  
  return (
    <Provider store={store}>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
    </Provider>
  );
}
