import React, { Profiler } from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from '../Screens/Profile';
import Settings from '../Screens/Settings';

const Drawer = createDrawerNavigator();
const DrawerNavigator = ()=>{
    return(
        <Drawer.Navigator screenOptions = {{headerShown:false}}>
            <Drawer.Screen name = "Home" component = {TabNavigator}/>
            <Drawer.Screen name = "Profile" component = {Profile}/>
            <Drawer.Screen name = "Settings" component = {Settings}/>
        </Drawer.Navigator>
    )
}