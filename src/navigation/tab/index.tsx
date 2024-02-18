import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainStack from '../stack/MainStack';
import BasketScreen from '../screens/BasketScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeStackNavigator from '../stack/HomeStack';
import HomeSvg from '../../assets/svg/HomeSvg';
import BasketSvg from '../../assets/svg/BasketSvg';
import LoveSvg from '../../assets/svg/LoveSvg';
import ProfileSvg from '../../assets/svg/ProfileSvg';
import RowComponent from '../../components/RowComponent';

const Tab = createBottomTabNavigator();

const TabMain = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          position: 'absolute',
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return (
              <RowComponent
                localStyles={{
                  backgroundColor: focused ? '#e0e0e0' : '#fff',
                }}>
                <HomeSvg
                  size={size}
                  stroke={focused ? '#000' : '#676767'}
                />
                {focused && <Text style={styles.tabTitle}>Home</Text>}
              </RowComponent>
            );
          } else if (route.name === 'Basket') {
            return (
              <RowComponent
                localStyles={{
                  backgroundColor: focused ? '#e0e0e0' : '#fff',
                }}>
                <BasketSvg
                  size={size}
                  stroke={focused ? '#000' : '#676767'}
                />
                {focused && <Text style={styles.tabTitle}>Basket</Text>}
              </RowComponent>
            );
          } else if (route.name === 'Favorite') {
            return (
              <RowComponent
                localStyles={{
                  backgroundColor: focused ? '#e0e0e0' : '#fff',
                }}>
                <LoveSvg
                  stroke={focused ? '#000' : '#676767'}
                />
                {focused && <Text style={styles.tabTitle}>Favorite</Text>}
              </RowComponent>
            );
          } else if (route.name === 'Profile') {
            return (
              <RowComponent
                localStyles={{
                  backgroundColor: focused ? '#e0e0e0' : '#fff',
                }}>
                <ProfileSvg
                  stroke={focused ? '#000' : '#676767'}
                />
                {focused && <Text style={styles.tabTitle}>Profile</Text>}
              </RowComponent>
            );
          }
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          headerTitle: 'Home',
        }}
      />
      <Tab.Screen
        name="Basket"
        component={BasketScreen}
        options={{
          headerTitle: 'Basket',
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          headerTitle: 'Favorite',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabMain;

const styles = StyleSheet.create({
  tabTitle: {
    paddingHorizontal: 8,
    color: '#000',
    fontWeight: 'bold',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  }
});
