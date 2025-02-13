import React, { useState } from 'react';
import {View, TextInput, StyleSheet, Text, Alert} from 'react-native';
import {Ionicons } from '@expo/vector-icons';

const HandleInputExample = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (text) => {
    setEmail(text);
    if (!text.includes('@')) {
      setError('Invalid Email Address');
    } else {
      setError('');
    }
  };
  const HandleSubmit = () => {
  Alert.alert(
    'Information',
    `First Name: ${fname}\nLast Name: ${lname}\nPhone No.: ${phone}\nPassword: ${password}\nEmail Address: ${email}`
  );
};




  return (
    <View style={styles.container}>
      <View style = {styles.inputContainer}>
        <Ionicons name ="person" size={20} color = "gray" style = {styles.icon}/>
        <TextInput
          style = {styles.input}
          placeholder = "First Name"
          onChangeText = {(value) => setFname(value)}
          returnKeyType = "done"
          onSubmitEditing = {HandleSubmit}
        />
      </View>

      <View style = {styles.inputContainer}>
        <Ionicons name = "person" size = {20} color = "gray" style = {styles.icon}/>
        <TextInput
          style = {styles.input}
          placeholder = "Last Name"
          onChangeText = {(value) => setLname(value)}
          returnKeyType = "done"
          onSubmitEditing = {HandleSubmit}
        />
      </View>


      {/* Phone Number */}
      <View style = {styles.inputContainer}>
        <Ionicons name = "call" size = {20} color = "gray" style = {styles.icon}/>
        <TextInput
          style = {styles.input}
          placeholder = "Phone Number"
          onChangeText = {(value) => setPhone(value)}
          returnKeyType = "done"
          onSubmitEditing = {HandleSubmit}
        />
      </View>


      {/* Password */}
      <View style = {styles.inputContainer}>
        <Ionicons name = "lock-closed" size = {20} color = "gray" style = {styles.icon}/>
        <TextInput
          style = {styles.input}
          placeholder = "Password"
          secureTextEntry = {true}
          maxLength = {10}
          onChangeText = {(value) => setPassword(value)}
          returnKeyType = "done"
          onSubmitEditing = {HandleSubmit}
        />
      </View>
      <Text style = {styles.displayTextPass}> Remaining {10 - password.length} characters
        </Text>

      {/* Email */}
      <View style = {styles.inputContainer}>
        <Ionicons name = "mail" size = {20} color = "gray" style = {styles.icon}/>
        <TextInput
          style = {styles.input}
          placeholder = "Enter Email"
          onChangeText = {(value) => setEmail(value)}
          returnKeyType = "done"
          onSubmitEditing = {HandleSubmit}
        />
      </View>
      {error ? <Text style = {styles.errorText}>{error}</Text> : null}

    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    borderColor: 'gray',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
  },

  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },

  displayTextPass: {
    fontSize: 14,
    color: 'gray',
  },

  displayText: {
  marginTop: 10,
  fontSize: 18
},

  errorText: {
    color: 'red',
    fontSize: 14,
  },
});

export default HandleInputExample;
