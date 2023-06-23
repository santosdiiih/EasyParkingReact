import {
     TouchableOpacity, StyleSheet, Text, TouchableOpacityProps 
} from 'react-native';
import React from 'react';
import colors from '../styles/colors';
// import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest }: ButtonProps){
    return(
        <TouchableOpacity style={style.container} activeOpacity={0.8}>
            <Text style={style.text} {...rest}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.dark_blue,
        width: "70%",
        height: 46,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        color: colors.white
    },
    text: {
        fontSize: 16,
        color: colors.white,
        // fontFamily: fonts.heading
    }
});