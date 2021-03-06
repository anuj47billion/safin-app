import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Dashboard from '../Dashboard';
import Summary from '../Summary';
import Profile from '../Profile';
import Notification from '../Notification';
import Settings from '../Settings';
import Weight from '../Weight';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import Orientation from 'react-native-orientation';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Tabs = params => {
  const [orientationType, setOrientationType] = useState('');

  useEffect(() => {
    Orientation.getOrientation((_err, orientation) => {
      console.log('------------------------', orientation);
      setOrientationType(orientation);
    });
  }, []);

  return (
    <Tab.Navigator
      initialRouteName={
        params.route.params ? params.route.params.screenName : 'Profile'
      }
      tabBarOptions={{
        activeTintColor: '#7894B0',
        inactiveTintColor: '#80D5DC',
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        initialParams={{
          screenName: 'Dashboard',
          gotoInsideScreen: params.route.params.gotoInsideScreen,
        }}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color, size, focused}) => (
            <AntDesign name="home" color={color} size={size} />
          ),
          tabBarVisible: orientationType === 'LANDSCAPE' ? false : true,
        }}
      />
      <Tab.Screen
        name="Summary"
        component={Summary}
        initialParams={{
          screenName: 'Summary',
          gotoInsideScreen: params.route.params.gotoInsideScreen,
        }}
        options={{
          tabBarLabel: 'Summary',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="calendar-blank-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        initialParams={{screenName: 'Settings'}}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <Feather name="settings" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{screenName: 'Profile'}}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <EvilIcons name="user" color={color} size={size + 18} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const CustomDrawerContent = props => {
  const {navigation, state, otherParams} = props;
  return (
    <>
      <View style={styles.titleView}>
        <Text style={{color: '#fff', fontSize: 15}}>Welcome</Text>
        <Text style={{color: '#fff', fontSize: 25}}>Tom</Text>
      </View>
      <DrawerContentScrollView {...props} style={{backgroundColor: '#F5FBFF'}}>
        {state.routes.length > 0 &&
          state.routes.map((route, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  props.navigation.push('App', {
                    screen: route.name,
                  });
                }}>
                <View
                  style={[
                    styles.drawerRoutesView,
                    // props.otherParams.route.params.screen === route.name
                    //   ? styles.activeTab
                    //   : '',
                  ]}>
                  <View>
                    {route.name === 'Dashboard' && (
                      <AntDesign name="home" size={30} />
                    )}
                    {route.name === 'Summary' && (
                      <MaterialCommunityIcons
                        name="calendar-blank-outline"
                        size={30}
                      />
                    )}
                    {route.name === 'Weight' && (
                      <View>
                        <Text style={{fontSize: 20}}>lbs</Text>
                      </View>
                    )}
                    {route.name === 'Settings' && (
                      <Feather name="settings" size={25} />
                    )}
                    {route.name === 'Profile' && (
                      <EvilIcons name="user" size={30} />
                    )}
                    {route.name === 'Notification' && (
                      <MaterialCommunityIcons name="bell-outline" size={30} />
                    )}
                  </View>
                  <View style={{marginLeft: 15}}>
                    <Text style={{fontSize: 18}}>{route.name}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
      </DrawerContentScrollView>
      <View style={{backgroundColor: '#F5FBFF', padding: 30}}>
        <Text style={{fontWeight: '700'}}>SAFIN</Text>
        <Text style={{fontWeight: '700'}}>Version 1.1.1</Text>
      </View>
    </>
  );
};

const App = params => {
  return (
    <Drawer.Navigator
      drawerContent={props => (
        <CustomDrawerContent {...props} otherParams={params} />
      )}>
      <Drawer.Screen
        name="Dashboard"
        component={Tabs}
        initialParams={{
          screenName: 'Dashboard',
          gotoInsideScreen: params.route.params
            ? params.route.params.goToInsideScreen
            : 'Dashboard',
        }}
      />
      <Drawer.Screen
        name="Summary"
        component={Tabs}
        initialParams={{
          screenName: 'Summary',
          gotoInsideScreen: params.route.params
            ? params.route.params.goToInsideScreen
            : 'Summary',
        }}
      />
      <Drawer.Screen
        name="Weight"
        component={Weight}
        initialParams={{screenName: 'Weight'}}
      />
      <Drawer.Screen
        name="Settings"
        component={Tabs}
        initialParams={{screenName: 'Settings'}}
      />
      <Drawer.Screen
        name="Profile"
        component={Tabs}
        initialParams={{screenName: 'Profile'}}
      />
      <Drawer.Screen
        name="Notification"
        component={Notification}
        initialParams={{screenName: 'Notification'}}
      />
    </Drawer.Navigator>
  );
};

export default App;

const styles = StyleSheet.create({
  titleView: {
    padding: 30,
    backgroundColor: '#1BA9B1',
  },
  drawerRoutesView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  activeTab: {
    backgroundColor: '#1BA9B1',
  },
});
