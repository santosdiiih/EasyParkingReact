import React from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, TextInput} from "react-native";
import colors from "../styles/colors";
import car from "../assets/splash.png";
import placa from "../assets/placa.png";
import add from "../assets/add.png"
import menu from "../assets/menu.png";
import { Button } from "../components/ButtonWhite";
import {Header} from "../components/header";

export function Estacionamento(){
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Header />
            </View>
            <View>
                <View style={styles.backgroundBlue}>
                    <View style={styles.alignRow}>
                        <Image source={car} style={styles.image}/>
                        <Text style={styles.textImage}>Estacionamento em Vaga</Text>
                    </View>
                </View>
                <View style={styles.backGroungGray}>
                    <Image source={placa} style={styles.imagePlaca} />
                    <Text>Placa do Veículo</Text>

                    <View style={styles.alignRow}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View>
                                <Image source={placa} style={styles.imagePlaca}/>
                                <Text style={styles.textScren}>BRA2100</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View>
                                <Image source={placa} style={styles.imagePlaca}/>
                                <Text style={styles.textScren}>BRA2101</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity activeOpacity={0.8}>
                        <View>
                            <Image source={add} style={styles.imageAdd}/>
                            <Text>Adicionar Placa</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.AlignCenter}>
                    <Button title="CONTINUAR"/>
                </View>
                <View style={styles.AlignCenter}>
                    <Button title="CANCELAR" style={styles.buttonRed}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: colors.gray_light
    },
    cabecalho: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.dark_blue,
    },
    textScren: {
        textAlign: "center",
        fontSize: 15,
        marginLeft: 60,
        alignItems: "center"
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
        // backgroundColor: colors.blue_light,
        marginEnd: 15,
        marginLeft: 15,
        marginBottom: 100
    },
    imagePlaca: {
        height: 60,
        width: 110,
        marginStart: "30%",
        marginEnd: 15,
        marginLeft: 15,
        marginTop: 15,
    },
    imageAdd: {
        height: 50,
        width: 50,
        marginStart: "40%",
        marginEnd: 15,
        marginLeft: 15,
        marginTop: 15,
    },
    AlignCenter:{
        alignContent: "center",
        alignItems: "center",
        padding: 10
    },
    textImage: {
        height: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        marginTop: 15,
        marginLeft: 30,
        color: colors.white
    },
    alignRow: {
        flexDirection: "row",
        marginTop: 10,
    },
    backgroundBlue:{
        width: "80%",
        height: 60,
        marginLeft: "10%",
        backgroundColor: colors.dark_blue,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 50,
    },
    backGroungGray: {
        width: "80%",
        height: 330,
        marginLeft: "10%",
        textAlign: "center",
        fontSize: 15,
        backgroundColor: colors.gray,
        borderBottomRightRadius: 20,
        marginBottom: 10,
    },
    buttonRed: {
        backgroundColor: colors.red_light,
        width: "100%",
        textAlign: "center",
        borderRadius: 16,
        fontSize: 16,
        color: colors.white,
        paddingTop: 10,
        fontWeight: "bold",
        height: 46,
    }
})