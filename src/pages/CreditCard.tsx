import React from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, TextInput} from "react-native";
import colors from "../styles/colors";
import car from "../assets/splash.png";
import { Button } from "../components/ButtonBlue";
import { useNavigation, useRoute } from "@react-navigation/core";

export function CreditCard(){

    const navigation = useNavigation();


    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.backgroundBlue}>
                    <View style={styles.alignRow}>
                        <Image source={car} style={styles.image}/>
                        <Text style={styles.textImage}>Compra de Crédito</Text>
                    </View>
                </View>
                <View style={styles.backGroungGray}>
                    <Text style={styles.text}> Valor do Crédito de Compra</Text>
                    <View style={styles.alignRow}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Text style={styles.buttonText}> R$ 10 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Text style={styles.buttonText}> R$ 20 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Text style={styles.buttonText}> R$ 30 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Text style={styles.buttonText}> R$ 40 </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.alignRow}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Text style={styles.buttonText}> R$ 50 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Text style={styles.buttonText}> R$ 100 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Text style={styles.buttonText}> R$ 200 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}> 
                            <Text style={styles.buttonText}> R$ 500 </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textPrice}>R$ 50,00</Text>
                    <Text style={styles.text}> Informações do Cartão </Text>
                    <TextInput placeholder="Digite o seu CPF:" style={styles.inputText}/>
                    <TextInput placeholder="Digite o Nº Cartão:" style={styles.inputText}/>
                    <View style={styles.alignRow}> 
                        <TextInput placeholder="Digite o CVV:" style={styles.inputTextSmall}/>
                        <TextInput placeholder="MM/AA" style={styles.inputTextSmall}/>
                    </View>
                </View>
                <View style={styles.AlignCenter}>
                    <Button title="Finalizar" onPress={() => navigation.navigate('Home')}/>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        // justifyContent: 'space-between',
        backgroundColor: colors.gray_light
    },
    cabecalho: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.dark_blue,
    },
    textCabecalho: {
        width: 200,
        height: 30,
        fontSize: 20,
        color: colors.white
    },
    image: {
        height: 45,
        width: 45,
        flexDirection: "row",
        backgroundColor: colors.blue_light,
        marginEnd: 15,
        marginLeft: 15,
        marginBottom: 100
    },
    textImage: {
        // width: 100,
        height: 30,
        // fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 30,
        color: colors.white
    },
    titulo: {
        width: "100%",
        height: 30,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        marginTop: 20,
        color: colors.white
    },
    alignRow: {
        flexDirection: "row",
        marginTop: 10,
        // marginLeft: "10%",
    },
    backgroundBlue:{
        width: "80%",
        height: 60,
        marginLeft: "10%",
        backgroundColor: colors.dark_blue,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 20,
    },
    backGroungGray: {
        width: "80%",
        height: 430,
        marginLeft: "10%",
        textAlign: "center",
        fontSize: 15,
        backgroundColor: colors.gray,
        borderBottomRightRadius: 20,
        marginBottom: 10,
    },
    text: {
        width: "100%",
        textAlign: "center",
        marginTop: 10,
        fontSize: 15,
        marginBottom: 10,
    },
    buttonText: {
        width: 60,
        height: 40,
        backgroundColor: colors.blue_light,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 10,
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 10,
        color: colors.dark_blue
    },
    textPrice: {
        width: 80,
        height: 50,
        backgroundColor: colors.red_light,
        // textAlign: "center",
        // justifyContent: "center"
        marginLeft: "35%",
        marginTop: 20,
        paddingTop: 10,
        borderRadius: 10,
        color: colors.white,
        fontWeight: "bold",
    },
    inputText: {
        borderRadius: 10,
        padding: 10,
        width: "80%",
        marginBottom: 10,
        marginLeft: "10%",
        height: 40,
        backgroundColor: colors.white,
    },
    inputTextSmall: {
        borderRadius: 10,
        padding: 10,
        width: "35%",
        marginBottom: 10,
        marginLeft: 30,
        height: 40,
        backgroundColor: colors.white,
    },

    AlignCenter:{
        alignContent: "center",
        alignItems: "center"
    }
})