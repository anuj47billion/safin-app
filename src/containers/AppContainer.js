/* eslint-disable no-undef */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import App from '../pages/App';
import OptionsPage from '../pages/OptionsPage';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import OtpVerify from '../pages/OtpVerify';
import ForgetPassword from '../pages/ForgetPassword';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="OptionsPage">
            <Stack.Screen
              options={{
                headerShown: false,
                headerTransparent: true,
              }}
              name="OptionsPage"
              component={OptionsPage}
            />
            <Stack.Screen
              options={{
                headerShown: false,
                headerTransparent: true,
              }}
              name="Login"
              component={Login}
            />
            <Stack.Screen
              options={{
                headerShown: false,
                headerTransparent: true,
              }}
              name="SignUp"
              component={SignUp}
            />
            <Stack.Screen
              options={{
                headerShown: false,
                headerTransparent: true,
              }}
              name="OtpVerify"
              component={OtpVerify}
            />
            <Stack.Screen
              options={{
                headerShown: false,
                headerTransparent: true,
              }}
              name="ForgetPassword"
              component={ForgetPassword}
            />
            <Stack.Screen
              options={{
                headerShown: false,
                headerTransparent: true,
              }}
              name="App"
              component={App}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
};

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
