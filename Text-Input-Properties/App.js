import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text, Alert} from 'react-native';


const KeyboardType = () => {
  const [fname, setfname] = useState(' ');
  const [lname, setlname] = useState(' ');  
  const [phone, setPhone] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');


const SubmitExample = () => {
  const [fname, setfname] = useState(' ');
  const [lname, setlname] = useState(' ');  
  const [phone, setPhone] = useState(' ');
  const [password, setPassword] = useState(' ');


const HandleSubmit = () => {
  Alert.alert('First Name: ', setfname)
  Alert.alert('Last Name: ', setlname)
  Alert.alert('Phone No.: ', setPhone)
  Alert.alert('Password: ', setPassword)
  Alert.alert('Password: ', setEmail)
};


const ErrorStyleInput = () => {
  const [email, setEmail] = useState(' ');
  const [error, setError] = useState(' ');


const validateEmail = (text) => {
  setEmail(text)
  if(!text.includes('@')){
    setError('Invalid Email Address')
  }
  else {
    setError('');
  }
};

return (
    <View style = {styles.container}>
      
      <TextInput style = {styles.input} 
      placeholder = "Enter First Name"
      KeyboardType = "first-name"
      onChangeText = {(value) => setfname(value)}
      returnKeyType = "done"
      onSubmitEditing = {HandleSubmit}
      />

      <TextInput style = {styles.input} 
      placeholder = "Enter Last Name"
      KeyboardType = "last-name"
      onChangeText = {(value) => setlname(value)}
      returnKeyType = "done"
      onSubmitEditing = {HandleSubmit}
      />

      <TextInput style = {styles.input} 
      placeholder = "Enter Email"
      KeyboardType = "email-address"
      onChangeText = {(value) => setEmail(value)}
      returnKeyType = "done"
      onSubmitEditing = {HandleSubmit}
      />
      
      <TextInput style = {styles.input} 
      placeholder = "Enter Phone Number"
      KeyboardType = "phone-pad"
      onChangeText = {(value) => setPhone(value)}
      returnKeyType = "done"
      onSubmitEditing = {HandleSubmit}
      />

      <TextInput style = {styles.input} 
      placeholder = "Enter Password"
      secureTextEntry = {true}
      onChangeText = {(value) => setPassword(value)}
      returnKeyType = "done"
      onSubmitEditing = {HandleSubmit}
      />
      
      <Text style ={styles.displayText}> Password Length: {password.length}</Text>
    </View>
  );
};




const styles = StyleSheet.create({

container :{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
},

input :{
  height: 40,
  width: '80%',
  borderColor: 'gray',
  paddingHorizontal: 10,
  marginVertical: 10,
  borderWidth: 1,
  borderRadius: 5
},

displayText: {
  marginTop: 10,
  fontSize: 18
}



});


export default KeyboardType;
export default ErrorStyleInput;
export default SubmitExample;