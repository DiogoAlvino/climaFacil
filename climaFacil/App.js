import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './screens/Welcome';
import Search from './screens/Search';
import Weather from './screens/Weather';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
				<Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
				<Stack.Screen name="Weather" component={Weather} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}