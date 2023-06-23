import React, {useState} from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions} from "react-native";
import colors from "../styles/colors";
import car from "../assets/splash.png";
import {Header} from "../components/header";
import { useNavigation, useRoute } from "@react-navigation/core";

export function Home(){

    const [visible, setVisible] = useState(false);
    const navigation = useNavigation();

    function handleVisible(){
        navigation.navigate('Estacionamento')
        setVisible(true);
    }

    return(
            <SafeAreaView style={styles.container}>
                
                
                <ScrollView showsVerticalScrollIndicator={true}>
                    <View style={styles.backGroungGray}>
                        <View style={styles.containerOne}>
                            <View style={styles.blueArea}>
                                <Image source={car} style={styles.image}/>
                            </View>
                            <View>
                                <Text style={styles.textTitle}> Situação Atual</Text>
                                <View style={styles.textPage}>
                                    <Text>Estacionamento ativo para placa {'\n'} BRA2100 no dia 22/06/2023</Text>
                                </View>
                                {
                                    visible &&
                                    <View><Text>Restam 58 Minutos</Text></View>
                                }
                                <TouchableOpacity activeOpacity={0.8} onPress={handleVisible}>
                                    <View style={styles.buttonBlue}>
                                        <Text style={styles.textButton}>Ative Por mais Tempo</Text>
                                    </View>
                                </TouchableOpacity>
                                
                            </View>
                        </View>

                        <View style={styles.containerTwo}>
                            <View style={styles.blueArea}>
                                <Image source={car} style={styles.image}/>
                            </View>
                            <View>
                                <Text style={styles.textTitle}> Seu Saldo  R$ 50,00</Text>
                                <View style={styles.textPage}>
                                    <Text> Utilize o saldo para {'\n'}estacionamento rotativo </Text>
                                </View>
                                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('CreditCard')}> 
                                    <View style={styles.buttonBlue}>
                                        <Text style={styles.textButton}>Compre Crédito Aqui</Text>
                                    </View>
                                </TouchableOpacity>
                                
                            </View>
                        </View>

                        <View style={styles.containerTree}>
                            <View style={styles.blueAreaTop}>
                                <Image source={car} style={styles.imageToo}/>
                            </View>
                            <View>
                                <Text style={styles.textTitle}>Informações Gerais </Text>
                                <Text style={styles.textPageSmall}>Periodos </Text>
                                <Text style={styles.textPageContainer}>1 hora - equivalente 1 cartão</Text>
                            </View>
                        </View>

                        <View style={styles.containerTree}>
                            <View style={styles.blueAreaMiddle}>
                                <Image source={car} style={styles.imageToo}/>
                            </View>
                            <View>
                                <Text style={styles.textPageSmall}>Preços Aplicados</Text>
                                <Text style={styles.textPageContainer}>Utilize o saldo para {'\n'}estacionamento rotativo</Text>
                            </View>
                        </View>
                        <View style={styles.containerTree}>
                            <View style={styles.blueAreaMiddle}>
                                <Image source={car} style={styles.imageToo}/>
                            </View>
                            <View>
                                <Text style={styles.textPageSmall}>Forma de Pagamento</Text>
                                <Text style={styles.textPageContainer}>Débito / crédito / Pix</Text>
                            </View>
                        </View>
                        <View style={styles.containerTree}>
                            <View style={styles.blueAreaBotton}>
                                <Image source={car} style={styles.imageToo}/>
                            </View>
                            <View>
                                <Text style={styles.textPageSmall}>Placa Mercosul</Text>
                                <Text style={styles.textPageContainer}>Cadastre seu Veículo</Text>
                            </View>
                        </View>
                </View>
               </ScrollView>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
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
    alignRow: {
        flexDirection: "row",
        marginTop: 10,
    },
    backGroungGray: {
        width: "80%",
        height: "80%",
        marginLeft: "10%",
        textAlign: "center",
        fontSize: 15,
        borderBottomRightRadius: 20,
        marginBottom: 10,
        marginTop: 20,
    },
    containerOne: {
        width: "100%",
        height: 140,
        backgroundColor: colors.white,
        flexDirection: "row",
        padding: 2,
        borderBottomStartRadius: 20,
        borderTopLeftRadius: 20,
    },
    blueArea: {
        width: "20%",
        height: "100%",
        backgroundColor: colors.dark_blue,
        borderBottomStartRadius: 20,
        borderTopLeftRadius: 20,
    },
    blueAreaTop: {
        width: "20%",
        height: "100%",
        backgroundColor: colors.dark_blue,
        borderTopLeftRadius: 20,
    },
    blueAreaMiddle: {
        width: "20%",
        height: "100%",
        backgroundColor: colors.dark_blue,
    },
    blueAreaBotton: {
        width: "20%",
        height: "100%",
        backgroundColor: colors.dark_blue,
        borderBottomStartRadius: 20,
    },
    image: {
        height: 45,
        width: 50,
        flexDirection: "row",
        marginEnd: 15,
        marginLeft: 5,
        marginTop: 40,        
    },
    textTitle: {
        width: "100%",
        height: 30,
        borderBottomWidth: 1,
        borderColor: colors.dark_blue,
        fontSize: 20,
        color: colors.dark_blue,
        fontWeight: "600",
        marginStart: 10,
    },
    textPageSmall: {
        width: "100%",
        borderColor: colors.dark_blue,
        fontSize: 15,
        color: colors.dark_blue,
        fontWeight: "600",
        marginLeft: 20
    },
    textPageContainer: {
        width: "100%",
        marginLeft: 20
    },
    buttonBlue: {
        height: 30,
        width: 150,
        backgroundColor: colors.dark_blue,
        marginTop: 10,
        marginLeft: "20%",
        borderRadius: 10,
        paddingTop: 5,
    },
    textButton:{
        color: colors.white
    },
    textPage:{
        width: "100%",
        marginLeft: 10,
        marginTop: 5
    },
    containerTwo:{
        width: "100%",
        height: 120,
        backgroundColor: colors.white,
        flexDirection: "row",
        padding: 2,
        marginTop: 10,
        marginBottom: 10,
        borderBottomStartRadius: 20,
        borderTopLeftRadius: 20,
    },
    containerTree: {
        width: "100%",
        height: 80,
        backgroundColor: colors.white,
        flexDirection: "row",
        textAlign: "left",
        borderTopLeftRadius: 20,
        borderBottomStartRadius: 20,
    },
    imageToo: {
        height: 45,
        width: 50,
        flexDirection: "row",
        marginEnd: 15,
        marginLeft: 5,
        marginTop: 20,
    },
    
})