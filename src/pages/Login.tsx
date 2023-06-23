import React, {useState} from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, CheckBox, TextInput} from "react-native";
import colors from "../styles/colors";
import face from "../assets/face.png";
import gmail from "../assets/gmail.png";
import { Button } from "../components/Button";
import { useNavigation, useRoute } from "@react-navigation/core";
import {Header} from "../components/header";
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export function Login(){
    
    const navigation = useNavigation();

    function handlerNextScren(){
        // navigation.navigate('Home');
    }

    const [isSelected, setSelection] = useState(false);

  return(
    <SafeAreaView style={styles.container}>
       <View>
            {/* <Header /> */}
       </View>
        
        <Text style={styles.titulo}> LOGIN</Text>

        <View>
            <Text style={styles.textInput}>Email:</Text>
            <TextInput placeholder="Digite seu Email:" style={styles.inputText}/>
        </View>

        <View>
            <Text style={styles.textInput}>Senha:</Text>
            <TextInput placeholder="Digite sua Senha:" style={styles.inputText}/>
        </View>

        <View style={styles.alignRow}>
            <CheckBox value={isSelected} onValueChange={setSelection}/>
            <Text>Lembre-me</Text>
            <Text style={styles.spaceLeft}>Esqueci a Senha</Text>
        </View>

        <View style={styles.background}>
            <Button title="Entrar" onPress={() => navigation.navigate('Home')} />
            <View style={styles.alignRow}>
                <Text>Não tem Conta?</Text> 
                <Text>Cadastre-se</Text>
            </View>
            <Text style={styles.space}>LOGAR COM: </Text>
        </View>

        <View style={styles.alignRow}>
            <Image source={face} style={styles.image} />
            <Image source={gmail} style={styles.image} />
        </View>
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      justifyContent: 'space-between',
      backgroundColor: colors.gray_light
    
    },
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
    background: {
        width: "100%",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 100,
        marginLeft: "10",
    },
    image: {
        height: 60,
        width: 60,
        flexDirection: "row",
        marginEnd: 15,
        marginLeft: "20%",
        marginBottom: 10
    },
    alignRow: {
        flexDirection: "row",
        marginTop: 10,
        marginLeft: "10%",
    },
    space: {
        margin: 20
    },
    spaceLeft: {
        marginStart: 100
    },
    inputText: {
        borderRadius: 10,
        padding: 10,
        width: "80%",
        marginLeft: "10%",
        height: 40,
        backgroundColor: colors.white,
    },
    textInput: {
        marginBottom: 10,
        marginLeft: 40,
        marginTop: 30
        
    }
    
})