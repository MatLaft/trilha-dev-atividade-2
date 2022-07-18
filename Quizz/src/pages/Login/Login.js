import React,{useState} from "react";
import { View,Text, TextInput,TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios';

import styles from './Style'

async function getUser() {
        
    try {
      const response = (await axios.get('https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/quizzes')).data;
      return response
    } catch (error) {
      console.error(error);
    }
}

async function mudarTela({navigation}){
    const x = await getUser()
    navigation.navigate('Cadastro')
} 

export default function Login({navigation}){
    const [email,setEmail] = useState(null)
    const [senha,setSenha] = useState(null)
    const [hidePass, setHidePass] = useState(true)

    

    
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Entrar</Text>
            <TextInput onChangeText={setEmail} value={email} style={styles.input} placeholder='E-mail'/>
            <TextInput  secureTextEntry={hidePass? true:false} onChangeText={setSenha} value={senha} style={styles.input} placeholder='Senha'></TextInput><Icon
          name={hidePass ? 'eye-slash' : 'eye'}
          size={15}
          color="grey"
          onPress={() => setHidePass(!hidePass)}
          style={{position:'absolute',top:385.5,right:40}}
        />
            <TouchableOpacity onPress={()=>navigation.navigate('Recuperar')}><Text style={styles.botaomenor}>Esqueceu sua senha?</Text></TouchableOpacity>
            <TouchableOpacity style={styles.botao}  onPress={()=>mudarTela()}><Text style={styles.textoBotao}>Entrar</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Cadastro')}><Text style={styles.botaomenor}>Criar uma conta</Text></TouchableOpacity>
        </View>
    )
}