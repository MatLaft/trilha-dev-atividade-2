import React,{useState} from "react";
import { View,Text, TextInput,TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios';

export default function ({route}){
    console.log(route[1])
    return(
    <View>
        {route[1]}
    </View>
    )
}