import React from 'react';
import { View, Button, Image, StyleSheet, PermissionsAndroid ,TouchableOpacity,Text} from 'react-native';
import { launchCamera } from 'react-native-image-picker';

const CameraScreen = () => {
  const [image, setImage] = React.useState(null);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app needs access to your camera.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission granted');
        return true;
      } else {
        console.log('Camera permission denied');
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const openCamera = async () => {
    const hasPermission = await requestCameraPermission();
    
    if (hasPermission) {
      const options = {
        mediaType: 'photo',
        quality: 1,
      };

      launchCamera(options, (response) => {
        if (response.didCancel) {
          console.log('User cancelled camera');
        } else if (response.errorCode) {
          console.log('Camera error: ', response.errorMessage);
        } else if (response.assets) {
          const uri = response.assets[0].uri; // Ensure assets is defined
          setImage(uri);
        } else {
          console.log('Unexpected response: ', response);
        }
      });
    }
  };

  return (
    <View style={styles.container}>
     
     
      <TouchableOpacity style={styles.button}  onPress={openCamera} >
            <View style={styles.img}>
          

            <Image style={{width: 50, height: 50, marginRight:310, marginTop:20}}
            source={{uri:'https://cdn-icons-png.flaticon.com/128/3064/3064573.png'}
              
            }/>
             {image && <Image source={{ uri: image }} style={styles.image} />}
             {image ?<Text style={styles.heading2}>Aman Raj and EvoHaazri Id = Evo1</Text>:<Text></Text>}
           {image ? <Text style={styles.heading1}>Haazri lag gayi</Text>:<Text style={styles.heading1}>Mark Attendances</Text>} 
            </View>
          
          </TouchableOpacity>
         
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
   
    
   width:400,
   position:'relative',
   left:5,
   top:420
  },
  image: {
    width: 350,
    height: 320,
   position:'absolute',
   top:-550,
    borderRadius: 10,
  
  },
  button:{
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 0,
    position:'static',
    top:160, 
    zIndex:10, 
    height:80,
   borderRadius:30
  },
  img:{
    height:100,
   
     },
     heading1:{
      textAlign:'center',
      position:'absolute',
      fontSize:30,
      top:20,
      fontWeight:'bold',
      color:'#3EBB3E',
      marginLeft:80
     
    },
    heading2:{
      position:'absolute',
      top:-190,
      left:50,
      fontSize:30
    }
});

export default CameraScreen;
