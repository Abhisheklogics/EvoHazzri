import React from 'react';

import {
  
  Text,
StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';


 function App()
 {
    return (
        <SafeAreaView>
        <View style={styles.box}>
          <View style={styles.boxBorder}><Text style={styles.heading}>EvoHazzri</Text></View>
          <TouchableOpacity style={styles.button} >
            <View style={styles.img}>
            <Image style={{width: 50, height: 50, marginRight:310, marginTop:20}}
            source={{uri:'https://cdn-icons-png.flaticon.com/128/3064/3064573.png'}
              
            }/>
            <Text style={styles.heading1}>Mark Attendance</Text>
         
            </View>
         
          </TouchableOpacity>
        
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
      marginTop:590,
      height:60,
      position:'relative'
     
    },
    button:{
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 0,
      position:'relative',
      top:570,  
      height:80,
     borderRadius:30
    },
    
    heading1:{
      textAlign:'center',
      fontSize:30,
      marginTop:-50,
      fontWeight:'bold',
      color:'#3EBB3E',
      marginLeft:20
     
    },
    heading2:{
      textAlign:'center',
      fontSize:32 ,
    marginTop:-50,
      fontWeight:'bold',
      color:'#3EBB3E'
     
    },
    img:{
   height:100,
  
    }
    
  })
  
export default App  