import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, TouchableOpacity} from "react-native";

import colors from "../styles/colors";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Estacionamento } from "../pages/Estacionamento";
import { CreditCard } from "../pages/CreditCard";

const stackRoutes = createNativeStackNavigator();

function handleMenuPress(){
    // navigation.navigate('Home');
}

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator>

        <stackRoutes.Group
            screenOptions={ {
                 headerStyle: { backgroundColor: colors.dark_blue },
                 headerTintColor: colors.white 
                }}>
    
            <stackRoutes.Screen name="Login" component={Login} options={{ title: "EasyParking" }}/>
            <stackRoutes.Screen name="Home" component={Home} options={{ title: "EasyParking" }}/>
            <stackRoutes.Screen name="Estacionamento" component={Estacionamento} options={{ title: "EasyParking" }}/>
            <stackRoutes.Screen name="CreditCard" component={CreditCard} options={{ title: "EasyParking" }}/>
        </stackRoutes.Group>    

    </stackRoutes.Navigator>
)

export default AppRoutes;