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
          resizeMode="stretch">
          <View style={styles.boxContainer}>
             <Text>Hey! Welcome</Text>
          </View>
        </ImageBackground>
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
  boxContainer: {
    height: screenHeight / 2,
    width: screenWidth,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'grey',
    backgroundColor: '#fff0f5',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    top: screenHeight / 1.4,
    justifyContent:'center',
    alignItems:'center'}
});
