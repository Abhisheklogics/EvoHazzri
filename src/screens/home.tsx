import React from 'react';

import {
  
  Text,
StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';

import CameraScreen from '../../CameraScreen.js';
 function App()
 {
    return (
        <SafeAreaView>
        <View style={styles.box}>
          <View style={styles.boxBorder}><Text style={styles.heading}>EvoHazzri</Text>
         
         <CameraScreen/>  
         </View>
         
                 
          <View style={styles.footer}></View>
        </View>
        </SafeAreaView>
          );
 }

 let styles =StyleSheet.create({
    heading:{
      textAlign:'center',
      fontSize:40 ,
      marginTop:0,
      fontWeight:'bold',
      color:'#3EBB3E'
    },
    box:{
      backgroundColor:'orange',
      height:60
    },
    boxBorder:{
      borderColor:'black',
      borderBottomColor:'red'
    },
    footer:{
       backgroundColor:'#FA8129', 
      
      height:60,
      position:'relative',
      top:590
     
    },
   
    
   
    heading2:{
      textAlign:'center',
      fontSize:32 ,
    marginTop:-50,
      fontWeight:'bold',
      color:'#3EBB3E'
     
    },
   
    
    
  })
  
export default App  

