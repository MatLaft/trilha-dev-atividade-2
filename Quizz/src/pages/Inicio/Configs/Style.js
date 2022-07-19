import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        width: '100%',
        height:'100%',
    },
    titulo:{
        fontWeight:'500',
        fontSize:24,
        top:10,
        color:'#3C3A36',
        alignSelf:'center',
    },
    subtitulo:{
        fontWeight:'500',
        fontSize:20,
        marginTop:28,
        color:'#3C3A36',
        left:16
    },
    containerOpcao:{
        borderWidth:1,
        borderColor:'#BEBAB3',
        marginTop:16,
        borderRadius: 16,
        width: 343,
        height:82,
        alignSelf:'center',
        justifyContent:'center',
    },
    circulo:{
        backgroundColor:'#65AAEA',
        height:32,
        width:32,
        borderRadius:100,
        left:16,
        top:25,
        position: 'absolute',
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center'
        

    },
    texto:{
        position:'absolute',
        top:17.16,
        left:60,
        fontSize:20,
        color:'#3C3A36',
        fontWeight:'500',
    },
    subtexto:{
        position:'absolute',
        top:43.16,
        left:60,
        fontSize:14,
        color:'#78746D',
        fontWeight:'500', 
    },
    textofoto:{
        position:'absolute',
        top:28,
        left:60,
        fontSize:20,
        color:'#3C3A36',
        fontWeight:'500',
    },
    voltar:{
        borderWidth:1,
        borderColor:'#BEBAB3',
        width: 40,
        height:40,
        justifyContent:'center',
        alignContent:'center',
        position: 'absolute',
        alignItems:'center',
        top:44,
        left:16,
        borderRadius:100
    }
})
export default styles