import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '@/pages/Home';

const Tab = createMaterialTopTabNavigator();

class HomeTabs extends React.Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarItemStyle: {
            width: 80,
            padding: 0,
          },
          tabBarIndicatorStyle: {
            height: 4,
            width: 20,
            marginLeft: 30,
            borderRadius: 2,
            backgroundColor: '#f86442',
          },
          tabBarActiveTintColor: '#f86442',
          tabBarInactiveTintColor: '#333',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '推荐',
          }}
        />
        <Tab.Screen name="Home1" component={Home} />
        <Tab.Screen name="Home2" component={Home} />
      </Tab.Navigator>
    );
  }
}

export default HomeTabs;
