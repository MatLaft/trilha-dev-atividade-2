import React,{useState} from "react";
import { View,Text, TextInput,TouchableOpacity, ImageBackground,SafeAreaView ,FlatList,Pressable,Image} from "react-native";
import axios from 'axios';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import styles from "./Style";
import Icon from 'react-native-vector-icons/FontAwesome5'


export default function ({route,navigation}){
        return(
        <SafeAreaView style={{height:'100%',alignItems:'center',backgroundColor:'#fff'}}>
                <Pressable style={styles.voltar} onPress={()=>navigation.navigate('Quizzes')} ><Icon name='angle-left' size={19} style={{color:'#3C3A36'}}></Icon></Pressable>
                <Text style={styles.titulo}>Profile</Text>
                <View style={styles.containerImagem}>
                <Image source={{uri:route.params.perfil.profile_image}} style={{flex:1}}></Image>
                </View>
                <View style={styles.container}>
                        <Text style={styles.texto}>Seu histórico</Text>
                </View>
                <View style={styles.container}>
                        <Text style={styles.texto}>Sobre o app</Text>
                </View>
        </SafeAreaView>
)}
