import React from "react";
import {Text, View, StyleSheet} from "react-native";
import { Login } from "./src/pages/Login";
import { CreditCard } from "./src/pages/CreditCard";
import { Estacionamento } from "./src/pages/Estacionamento";
import { Home } from "./src/pages/Home";
import Routes from "./src/routes";



export default function App(){
  return(
    <Routes/>
    // <CreditCard />
    // <Estacionamento />
    // <Home />
  )
}

