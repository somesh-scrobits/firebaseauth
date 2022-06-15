import { StyleSheet} from 'react-native';

import React, { useState } from 'react';
import { Button, TextInput,View, KeyboardAvoidingView } from 'react-native';

import auth from '@react-native-firebase/auth';


export default function PhoneSignIn() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
      alert("confirm")
    } catch (error) {
      console.log('Invalid code.');
      alert("Invalid code")
    }
  }

  if (!confirm) {
    return (
      <View style={styles.container}>
      <Button
      style={styles.Button}
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber('+91 814-973-1406')}
      />
      </View>
      
    );
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
<View >
      <TextInput style={styles.TextInput} value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </View>
    </KeyboardAvoidingView>
    
  );
}

// const Stack = createNativeStackNavigator();


// export default function App() {
//   return (
//     <NavigationContainer >
//       <Stack.Navigator>
//       <Stack.Screen name="LoginScreen" component={LoginScreen} />
//         <Stack.Screen name="HomeScreen" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,marginTop:10
  },
  TextInput:{
        backgroundColor : '#f7f7f7',
        width: 300,
        alignItems: "center",
        alignSelf:"center",
        margin: 5,
        height: 50,
        borderRadius: 10,
        padding: 10
        },
        Button:{
                  padding:10,
                  marginTop: 10,
                  alignSelf:'center',
                  backgroundColor:'black',
                  justifyContent:'center',
                  borderRadius:10,
                  
              },
});
