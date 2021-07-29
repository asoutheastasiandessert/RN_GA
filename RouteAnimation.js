import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Animation from './Animation';
import Chapter1 from './src/animation/Chapter1';
import Chapter2 from './src/animation/Chapter2';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Animation" component={Animation} />
          <Stack.Screen name="Chapter1" component={Chapter1} />
          <Stack.Screen name="Chapter2" component={Chapter2} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
