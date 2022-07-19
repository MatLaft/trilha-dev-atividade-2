import React,{useState} from "react";
import { View,Text, TextInput,TouchableOpacity, ImageBackground,SafeAreaView ,FlatList,Pressable} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import styles from "./Style";



export default function ({route,navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>Configurações</Text>
            <Text style={styles.subtitulo}>Informações da conta</Text>
            <View style={styles.containerOpcao}>
                <View style={styles.circulo}>
                </View>
            <Text style={styles.texto}>Nome</Text>
            <Text style={styles.subtexto}>{route.params.perfil.name}</Text>
            </View>
            <View style={styles.containerOpcao}>
                <View style={styles.circulo}>
                </View>
            <Text style={styles.textofoto}>Foto de perfil</Text>
            </View>
            <View style={styles.containerOpcao}>
                <View style={styles.circulo}>
                </View>
            <Text style={styles.texto}>Email</Text>
            <Text style={styles.subtexto}>{route.params.perfil.email}</Text>
            </View>
            <View style={styles.containerOpcao}>
                <View style={styles.circulo}>
                </View>
            <Text style={styles.texto}>Senha</Text>
            <Text style={styles.subtexto}>Nunca foi alterada</Text>
            </View>
            
        </SafeAreaView>
)}
