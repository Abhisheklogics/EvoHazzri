import React from 'react';
import { View, Button, Image, StyleSheet, PermissionsAndroid } from 'react-native';
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
      <Button title="Open Camera" onPress={openCamera} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    alignItems: 'center',
   
   position:'relative',
   top:400
  },
  image: {
    width: 300,
    height: 300,
    
    borderRadius: 10,
  
  },
});

export default CameraScreen;
