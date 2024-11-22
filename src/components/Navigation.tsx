import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../screens/Login';
import {Register} from '../screens/Register';
import {Welcome} from '../screens/Welcom';

const Stack = createNativeStackNavigator();
const stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </>
  );
};

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <stack.Screen name="Home" component={MyStack} />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
