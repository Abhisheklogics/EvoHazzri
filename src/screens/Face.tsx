
import { Button, View, Text ,StyleSheet, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../App'

type HomeProps = NativeStackScreenProps<RootStackParamList,'Home'>

const Home=({navigation}:HomeProps)=>
 {
 
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
   
   
<TouchableOpacity 
      style={styles.button}
       onPress={()=>navigation.push('App')}
   
      >
      
        <Text style={styles.text}>Haazri</Text>
         </TouchableOpacity>
    
         <TouchableOpacity 
      style={styles.button}
       onPress={()=>navigation.push('Multiple')}
   
      >
      
        <Text style={styles.text}>Group Haazri</Text>
         </TouchableOpacity>
    
      
      </View>
  );
}


let styles=StyleSheet.create(
  {
    button:{
      alignItems: 'center',
    
      margin: 10,
     height:50,
     backgroundColor:'#61b0f2',
     borderRadius:10,
     width:250,
     padding:2
    },
    button2:{
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 0,
      position:'relative',
      top:510,
      height:80,
      borderRadius:30,
      shadowColor:'gray'
    },
    text:{
      fontWeight:'bold',
      marginTop:8,
      fontSize:22,
      color:'whitesmoke'
    }
  }
)
export default Home 
