import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../styles/colors";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Estacionamento } from "../pages/Estacionamento";
import { CreditCard } from "../pages/CreditCard";

const stackRoutes = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator headerMode='none' screenOptions={{
        cardStyle:{
            backgroundColor: colors.white
        },
    }}>

        <stackRoutes.Screen name="Login" component={Login}/>
        <stackRoutes.Screen name="Home" component={Home}/>
        <stackRoutes.Screen name="Estacionamento" component={Estacionamento}/>
        <stackRoutes.Screen name="CreditCard" component={CreditCard}/>
        

    </stackRoutes.Navigator>
)

export default AppRoutes;