/* eslint-disable no-undef */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CheckBox} from 'react-native-elements';
import {Field} from 'formik';
import FormikInputField from '../../../../components/forms/formikFields/FormikInputField';

const width = Dimensions.get('window').width;

const SignUpForm = props => {
  const {navigation, handleChange, handleBlur, handleSubmit, values} = props;

  return (
    <>
      <View style={styles.centerView}>
        <View style={{padding: 20}}>
          <View style={{marginBottom: 30}}>
            <Field
              id="phoneNumber"
              name="phoneNumber"
              type="numeric"
              value={values.phoneNumber}
              component={FormikInputField}
              handleChange={handleChange('phoneNumber')}
              handleBlur={handleBlur('phoneNumber')}
              label="Phone Number"
              style={{
                borderBottomWidth: 1,
                fontSize: 18,
              }}
            />
          </View>
          <View style={{marginBottom: 20}}>
            <Field
              id="password"
              name="password"
              type="password"
              value={values.password}
              component={FormikInputField}
              handleChange={handleChange('password')}
              handleBlur={handleBlur('password')}
              label="Password"
              style={{
                borderBottomWidth: 1,
                fontSize: 18,
              }}
            />
          </View>
          <View style={{marginBottom: 20}}>
            <Field
              id="confirmpassword"
              name="confirmpassword"
              type="password"
              value={values.confirmpassword}
              component={FormikInputField}
              handleChange={handleChange('confirmpassword')}
              handleBlur={handleBlur('confirmpassword')}
              label="Confirm Password"
              style={{
                borderBottomWidth: 1,
                fontSize: 18,
                marginTop: -10,
              }}
            />
          </View>
          <View>
            <CheckBox
              title="Terms & Conditions"
              checkedIcon={
                <View style={{backgroundColor: '#1FC2CB'}}>
                  <AntDesign style={{color: '#fff'}} name="check" size={20} />
                </View>
              }
              uncheckedIcon={<View style={{padding: 9, borderWidth: 1}} />}
              containerStyle={{
                backgroundColor: 'transparent',
                borderWidth: 0,
                padding: 0,
              }}
              checked={true}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity onPress={handleSubmit}>
          <View style={styles.buttonContainer}>
            <Text style={styles.signText}>Sign Up</Text>
          </View>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text style={{fontSize: 18}}>You have an account? </Text>
          <TouchableOpacity onPress={() => navigation.push('Login')}>
            <Text style={{color: '#0081f2', fontSize: 18}}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  centerView: {
    flex: 0.5,
  },
  bottomView: {
    flex: 0.3,
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 15,
    width: width * 0.85,
    backgroundColor: '#1FC2CB',
    marginTop: 20,
    borderRadius: 25,
    alignItems: 'center',
  },
  signText: {
    color: '#fff',
    fontSize: 18,
  },
});
