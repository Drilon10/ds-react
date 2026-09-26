import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../screens/Home';
import About from '../screens/About';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return(
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#6200ee'
                },
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <Stack.Screen name="Home" component={Home} options={{title: "Home"}}></Stack.Screen>
            <Stack.Screen name="About" component={About} options={{title: "About us"}}></Stack.Screen>
        </Stack.Navigator>
    )
}