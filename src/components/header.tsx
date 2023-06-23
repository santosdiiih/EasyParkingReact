import { 
    StyleSheet, Text, Image, View
 } from "react-native";

 import React, {useEffect, useState} from "react"
import colors from "../styles/colors";

 export function Header(){

    return(
        
      <View style={styles.cabecalho}>
        <Text style={styles.textCabecalho}> EasyParking </Text>
      </View>
    )
}

const styles = StyleSheet.create({
  textCabecalho: {
    width: 200,
    height: 30,
    fontSize: 20,
    color: colors.white
},
titulo: {
    width: "100%",
    height: 30,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20
},
cabecalho: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.dark_blue,
},  
})
