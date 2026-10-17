import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../screens/Home';
import About from '../screens/About';
import Ios from "../screens/Ios";
import Android from "../screens/Android";

const HomeStack = createNativeStackNavigator();
const AboutStack = createNativeStackNavigator();
const IosStack = createNativeStackNavigator();
const AndroidStack = createNativeStackNavigator();


const screenOptions = {
    headerStyle: {
        backgroundColor: '#2563eb'
    },
    headerTintColor: 'white',
    headerTitleStyle: {
        fontWeight: 'bold'
    },
    headerTitleAlign: 'center'
};

export function HomeStackNavigator() {
    return(
        <HomeStack.Navigator screenOptions={screenOptions}>
            <HomeStack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Home'
                }}
            ></HomeStack.Screen>
        </HomeStack.Navigator>
    )
}

export function AboutStackNavigator() {
    return(
        <AboutStack.Navigator screenOptions={screenOptions}>
            <AboutStack.Screen
                name="About"
                component={About}
                options={{
                    title: 'About'
                }}
            ></AboutStack.Screen>
        </AboutStack.Navigator>
    )
}

export function IosStackNavigator() {
        return(
        <IosStack.Navigator screenOptions={screenOptions}>
            <IosStack.Screen
                name="IosProducts"
                component={Ios}
                options={{
                    title: 'iOS'
                }}
            ></IosStack.Screen>
        </IosStack.Navigator>
    )
}

export function AndroidStackNavigator() {
        return(
        <AndroidStack.Navigator screenOptions={screenOptions}>
            <AndroidStack.Screen
                name="AndroidProducts"
                component={Android}
                options={{
                    title: 'Android'
                }}
            ></AndroidStack.Screen>
        </AndroidStack.Navigator>
    )
}