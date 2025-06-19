import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Profile } from "../Screens";
import navigationStrings from "../Constants/navigationStrings";

const Stack = createNativeStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen name={navigationStrings.HOME} component={Home} options={{ title: 'Rebuild Web Design' }} />
            <Stack.Screen name={navigationStrings.PROFILE} component={Profile} />
        </Stack.Navigator>
    );
}

export default function Routes() {
    return (
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    )
}