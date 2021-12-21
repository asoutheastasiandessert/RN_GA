import * as React from 'react';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './Login';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MovieDetails from './MovieDetails';
import Search from './Search';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {useEffect} from 'react';
import {Text} from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function DashboardStack({navigation, route}) {
  useEffect(() => {
    let a = getFocusedRouteNameFromRoute(route);
    if (a === 'See all details') {
      navigation.setOptions({tabBarVisible: false});
    } else {
      navigation.setOptions({tabBarVisible: true});
    }
  }, [route]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Details" component={MovieDetails} />
    </Stack.Navigator>
  );
}

function DashboardMenu() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={DashboardStack}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon name="movie" size={24} color={focused ? 'blue' : 'gray'} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="movie-search"
              size={24}
              color={focused ? 'blue' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="account" size={24} color={focused ? 'blue' : 'gray'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer
        linking={{
          prefixes: ['https://rangga.com/'],
          enabled: true,
          config: {
            screens: {
              Home: {path: 'home'},
              Search: {path: 'search'},
              Profile: {path: 'profile'},
            },
          },
          // getStateFromPath: e => {
          //   // const token = e.split('=')[1];
          //   console.log('token ', e);
          // },
        }}
        fallback={<Text>Loading...</Text>}>
        {/* <Stack.Navigator> */}
        {/* <Stack.Screen name="Login" component={Login} /> */}
        {/* <Stack.Screen
            options={{headerShown: false}}
            name="Dashboard"
            component={DashboardMenu}
          />
        </Stack.Navigator> */}
        <DashboardMenu />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
