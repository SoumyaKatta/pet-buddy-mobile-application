import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
export function Welcome() {
  return (
    <>
      <View>
        <ImageBackground
          style={styles.backgroundImage}
          testID="background-image"
          source={require('../../assets/images/pet.jpg')}
          resizeMode="stretch"></ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
