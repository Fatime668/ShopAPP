import { Button,TextInput,Image,TouchableOpacity, StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import CheckBox from '@react-native-community/checkbox';
import { Formik } from 'formik';
import * as yup from 'yup';



const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), ""], 'Passwords must match').required('Confirm Password is required'),
  agreeToTerms: yup.bool().oneOf([true], 'You must agree to terms and conditions'),
});

const SignUpScreen = ({ navigation }: any) => {
  

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <View>
          <Formik
            initialValues={{ username: '', email: '', password: '', confirmPassword: '', agreeToTerms: false }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              navigation.navigate('TabMain');
            }}
          >
            {(formikProps) => (
               <View>
                <View>
                      <Image source={require('../../assets/images/fashion.png')} style={styles.logo} />
                </View>
              <View style={{ padding: 30 }}>
                <View style={styles.head}>
                  <Text style={styles.title}>Sign Up</Text>
                  <TouchableOpacity><Text style={styles.newAccount}>Create an new account</Text></TouchableOpacity>
                </View>
                <View style={{ gap: 15 }}>
                  <View>
                    <Text style={styles.inputTitle}>User Name</Text>
                    <TextInput
                      style={styles.input}
                      placeholder='username'
                      onChangeText={formikProps.handleChange('username')}
                      onBlur={formikProps.handleBlur('username')}
                      value={formikProps.values.username}
                    />
                    <Text style={{ color: 'red' }}>{formikProps.touched.username && formikProps.errors.username}</Text>
                  </View>

                  <View>
                    <Text style={styles.inputTitle}>Email</Text>
                    <TextInput
                      style={styles.input}
                      placeholder='email'
                      onChangeText={formikProps.handleChange('email')}
                      onBlur={formikProps.handleBlur('email')}
                      value={formikProps.values.email}
                    />
                    <Text style={{ color: 'red' }}>{formikProps.touched.email && formikProps.errors.email}</Text>
                  </View>

                  <View>
                    <Text style={styles.inputTitle}>Password</Text>
                    <TextInput
                      style={styles.input}
                      placeholder='password'
                      secureTextEntry={true}
                      onChangeText={formikProps.handleChange('password')}
                      onBlur={formikProps.handleBlur('password')}
                      value={formikProps.values.password}
                    />
                    <Text style={{ color: 'red' }}>{formikProps.touched.password && formikProps.errors.password}</Text>
                  </View>

                  <View>
                    <Text style={styles.inputTitle}>Confirm Password</Text>
                    <TextInput
                      style={styles.input}
                      placeholder='confirm password'
                      secureTextEntry={true}
                      onChangeText={formikProps.handleChange('confirmPassword')}
                      onBlur={formikProps.handleBlur('confirmPassword')}
                      value={formikProps.values.confirmPassword}
                    />
                    <Text style={{ color: 'red' }}>{formikProps.touched.confirmPassword && formikProps.errors.confirmPassword}</Text>
                  </View>

                  <View style={styles.checkboxContainer}>
                    <CheckBox
                      style={styles.checkbox}
                      value={formikProps.values.agreeToTerms}
                      onValueChange={(value) => formikProps.setFieldValue('agreeToTerms', value)}
                      tintColors={{ true: '#000', false: '#000' }}
                    />
                    <TouchableOpacity onPress={() => formikProps.setFieldValue('agreeToTerms', !formikProps.values.agreeToTerms)}>
                      <Text style={styles.label}>By creating an account you have to agree with our terms & conditions.</Text>
                      <Text style={{ color: 'red' }}>{formikProps.touched.agreeToTerms && formikProps.errors.agreeToTerms}</Text>
                    </TouchableOpacity>
                   
                  </View>

                  <TouchableOpacity style={styles.login} onPress={() => formikProps.handleSubmit()}>
                    <Text style={{ color: "#fff", fontSize: 18, fontWeight: 'bold' }}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
               </View>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  logo:{
    display:'flex',
    justifyContent:'center',
  },
  head:{
    marginBottom:40,
    gap:5
  },
  title:{
    fontSize:25,
    fontWeight:'bold'
  },
  newAccount:{
    fontSize:17,
    color: '#777474',
    fontWeight:'500'
  },
  inputTitle:{
    fontWeight:'bold',
    fontSize:17,
    marginBottom:5
  },
  input:{
    borderBottomWidth:0.5,
    padding:5,
    borderColor:'#ccc'
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginTop:10,
    marginRight:30
  },
  checkbox:{
    transform: [{ scaleX: 0.75 }, { scaleY: 0.75 }]
  },
  label: {
    fontSize:15,
    color: '#666',
    fontWeight:'400'
  },
  login:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#000",
    padding:15,
    borderRadius:20
  }
})