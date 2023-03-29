import { View,Text ,StyleSheet} from "react-native";
import {TextInput} from "react-native-paper"
import RoundedButton from "../../components/RoundedButton";
export default Focus=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>What would you like to focus on now </Text>
                <Text>hello</Text>
                <Text>second hello text</Text>
                <View style={styles.inputContainer}>
                <TextInput style={{flex:1, marginRight:10}}/>
                <RoundedButton/>
                </View>
            </View>
        </View>
    );
}
const styles= StyleSheet.create({
    container:{
        flex:2,
    },
    titleContainer:{
        flex:0.5,
        padding:16,
        justifyContent:'center',
    },
    title:{
        color:'white',
        fontWeight:'bold',
        fontSize:20
    },
    inputContainer:{
       paddingTop:20,
      // flex:1,
        flexDirection:'row',
        alignItems:'center'
    }
})