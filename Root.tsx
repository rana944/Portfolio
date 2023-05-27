import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "./Home";
import Login from "./Login";

const RootStack = createNativeStackNavigator();

export default function Root() {
    return (
        <RootStack.Navigator initialRouteName="Login" screenOptions={{ headerBackVisible: false, headerTransparent: true, header: undefined, }}>
            <RootStack.Screen name="Login" component={Login} />
            <RootStack.Screen name="Home" component={Home} />
        </RootStack.Navigator>
    )
}