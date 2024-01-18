import React from "react";
import { Text, View } from 'react-native'
import { createDrawerNavigator } from "@react-navigation/drawer";

// import MainShoes from "../screens/MainShoes";
// import MainStore from "../screens/MainStore";
import Goal from "../screens/Goal";

const Drawer = createDrawerNavigator();

function DrawerView() {
    return (
        <View>
            <Text>
                Drawer View
            </Text>
        </View>
    )
}

export default DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Goal" component={Goal}/>
            {/* <Drawer.Screen name="Home" component={MainShoes} />
            <Drawer.Screen name="Store" component={MainStore} /> */}
        </Drawer.Navigator>
        )
}
