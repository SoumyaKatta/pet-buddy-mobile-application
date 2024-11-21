import {
    Button,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
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
            <Text style={{fontSize: 20,fontWeight:'bold', fontFamily:'Roboto'}}>Hey! Welcome</Text>
            <Text testID='pet-text' style={{fontSize:18,flexWrap:'wrap',fontWeight:500,color:"grey"}}>while you sit and stay - we'll go and play</Text>
            <TouchableOpacity style={{display:'flex', flexDirection:'row',borderColor:'grey', borderStyle:"solid", padding:8,width:300,justifyContent:"space-around",backgroundColor:"#32cd32", borderRadius:10,marginTop:20,alignItems:'center'}}>
                <Text style={{fontSize:20, fontWeight:"bold",color:"white"}}>Get Started</Text>
                <Text style={{fontSize:25, fontWeight:"bold",color:"white"}}>{'>'} </Text>
            </TouchableOpacity>
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40,
    gap:10
  },
});
