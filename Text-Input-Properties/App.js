import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';


const HandleInputExample = () => {
  const [fname, setFname] = useState(' ');
  const [lname, setLname] = useState(' ');
  const [phone, setPhone] = useState(' ');
  const [password, setPassword] = useState(' ');
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
      <TextInput style = {styles.input} placeholder = "First Name"
      onChangeText = {(value) => setFname(value)}/>
      <Text style ={styles.displayText}> {fname}</Text>


      <TextInput style = {styles.input} placeholder = "Last Name"
      onChangeText = {(value) => setLname(value)}/>
      <Text style ={styles.displayText}> {lname}</Text>

 
      <TextInput style = {styles.input} placeholder = "Phone Number"
      onChangeText = {(value) => setPhone(value)}/>
      <Text style ={styles.displayText}> {phone}</Text>

      <TextInput style = {styles.input} placeholder= "Password" maxLength = {10}
      onChangeText = {(value) => setPassword(value)}/>
      <Text style = {styles.displayTextPass}> Remaining {10 - password.length} characters</Text>
      
      <TextInput style = {styles.input} placeholder = "Enter Email"
      onChangeText = {validateEmail}/> 
      {error ? <Text> {error}</Text> : null}
       <Text style ={styles.displayText}> {email}</Text>

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
},

displayTextPass: {
  fontSize: 15
}



});


export default HandleInputExample;
