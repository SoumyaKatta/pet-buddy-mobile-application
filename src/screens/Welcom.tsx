import {Dimensions, ImageBackground, Text, View} from 'react-native';

export function Welcome() {
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  return (
    <>
      <View>
        <ImageBackground
          style={{
            height: screenHeight,
            width: screenWidth,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          testID='background-image'
          source={require('../../assets/images/pet.jpg')}
          resizeMode="stretch"></ImageBackground>
      </View>
    </>
  );
}
