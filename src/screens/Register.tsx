import {
    Button,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  
  export function Register() {
    return (
      <>
        <View style={styles.container}>
          <Image style={{height:180, width:200}} testID="profile-image" source={require('../../assets/images/profile.jpg')}/>
          <TextInput style={styles.usernameText} placeholder="Username" />
          <TextInput style={styles.usernameText} placeholder="Password" />
          <TextInput style={styles.usernameText} placeholder="Confirm Password" />
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Register</Text>
          </TouchableOpacity>
          <View style={styles.innerContainer}>
            <Text style={styles.account}>Already have an account?</Text>
            <TouchableOpacity>
              <Text style={styles.registerText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
  const styles = StyleSheet.create({
    container: {
      top: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    petBuddyText: {fontSize: 30, fontWeight: 'bold', color: '#32cd32'},
    usernameText: {
      height: 45,
      width: 300,
      backgroundColor:"#d3d3d3",
      marginTop: 20,
      padding: 10,
      fontSize: 20,
      fontWeight: 'bold',
      borderRadius: 10,
    },
    loginButton: {
      height: 60,
      width: 250,
      marginTop: 30,
      padding: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#32cd32',
    },
    loginText: {color: 'white', fontSize: 30, fontWeight: 'bold'},
    innerContainer: {display: 'flex', flexDirection: 'row', marginTop: 20},
    account: {fontSize: 19, color: '#32cd32'},
    registerText: {fontSize: 19, color: '#32cd32'},
  });
  