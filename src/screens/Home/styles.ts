import { StyleSheet } from "react-native";
export { styles } 
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#131016',
        padding: 48,
    },
    eventName:{
            color: '#FFF',
            fontSize: 24,
            fontWeight: 'bold',
            marginTop: 48,
    },
    eventDate:{
        color: '#6B6B6B',
    },
    input: {
        flex: 1 , 
        height:56,
        backgroundColor:'#1F1E25',
        fontSize: 16,
        borderRadius:5,
        color:'#FFF',
        padding:16,
        marginRight:12,
    },
    buttonText : {
        color: '#FFF',
        fontSize: 24,
    },
    
    button:{
    height:56,
    width:56,
    borderRadius:5,
    backgroundColor:'#31CF67',
    alignItems:"center",// Para centralizar na horizontal
    justifyContent:"center",// Para centralizar na vertical
    },

    form:{
        width:'100%',
        flexDirection:'row',
        marginTop:36,
        marginBottom:42,
    },

    listEmptyText:{
        color:'#FFF',
        fontSize:14,
        textAlign:"center",
    }

})