import {Text, TextInput, TouchableOpacity, View} from 'react-native';

export function Login() {
  return (
    <>
      <View style={{top: 140, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#32cd32'}}>
          PetBuddy!
        </Text>
        <TextInput
          style={{
            height: 45,
            width: 300,
            borderWidth: 1,
            marginTop: 30,
            padding: 10,
            fontSize: 20,
            fontWeight: 'bold',
            borderRadius: 10,
          }}
          placeholder="Username"
        />
        <TextInput
          style={{
            height: 45,
            width: 300,
            borderWidth: 1,
            marginTop: 30,
            padding: 10,
            fontSize: 20,
            fontWeight: 'bold',
            borderRadius: 10,
          }}
          placeholder="Password"
        />
        <TouchableOpacity
          style={{
            height: 60,
            width: 250,
            marginTop: 50,
            padding: 10,
            borderRadius: 10,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#32cd32',
          }}>
          <Text style={{color:'white', fontSize:30, fontWeight:"bold"}}>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
