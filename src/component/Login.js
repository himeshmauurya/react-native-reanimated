import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Dynmic from './Dynmic';
const Login = () => {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.headContainer}>
        <View
          onPress={() => {
            // navigation.goBack();
          }}
          style={styles.headerbox}>
          <Image
            source={require('../Assets/Image/back.png')}
            style={styles.headerImg}
          />
        </View>
      </View>
      {/* title */}
      <View style={styles.titleCont}>
        <Text style={styles.title1}>Experience the speed with</Text>
        <Text style={styles.title2}>Quick and Easy Setup</Text>
      </View>
      {/* animation */}

      <View style={styles.animateCont}>
        <Dynmic />
      </View>
      {/* button */}
      <View style={styles.butCont}>
        {/* one */}
        <TouchableOpacity style={styles.whiteButCont}>
          <View style={styles.textCont}>
            <Text style={styles.blackText}>Sign up with Tria</Text>
          </View>
        </TouchableOpacity>
        {/* two */}
        <TouchableOpacity style={styles.blackButCont}>
          <Image
            source={require('../Assets/Image/google.png')}
            style={styles.butImg}
          />
          <View style={styles.textCont2}>
            <Text style={styles.whiteText}>Continue with Google</Text>
          </View>
        </TouchableOpacity>
        {/* three */}
        <TouchableOpacity style={styles.blackButCont}>
          <Image
            source={require('../Assets/Image/apple.png')}
            style={styles.butImg}
          />
          <View style={styles.textCont2}>
            <Text style={styles.whiteText}>Continue with Apple</Text>
          </View>
        </TouchableOpacity>
        {/* four */}
        <TouchableOpacity style={styles.blackButCont}>
          <Image
            source={require('../Assets/Image/mail.png')}
            style={styles.butImg}
          />
          <View style={styles.textCont2}>
            <Text style={styles.whiteText}>Continue with Email/Phone</Text>
          </View>
        </TouchableOpacity>
        {/* five */}
        <TouchableOpacity style={styles.blackButCont}>
          <Image
            source={require('../Assets/Image/facebook.png')}
            style={styles.butImg}
          />
          <View style={styles.textCont2}>
            <Text style={styles.whiteText}>Continue with Others</Text>
          </View>
        </TouchableOpacity>
        {/* six */}
        <TouchableOpacity style={[styles.blackButCont,{backgroundColor:'black'}]}>
          <View style={styles.textCont}>
            <Text style={styles.whiteText}>Log in</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  headContainer: {
    // borderColor: 'red',
    // borderWidth: 1,
    height: hp('6%'),
    width: wp('100%'),
    justifyContent: 'center',
  },
  headerbox: {
    backgroundColor: 'black',
    padding: hp('1%'),
    height: hp('5%'),
    width: wp('9%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImg: {
    height: hp('4%'),
    width: wp('9%'),
    objectFit: 'contain',
  },
  titleCont: {
    // borderColor: 'red',
    // borderWidth: 1,
    height: hp('11%'),
    width: wp('100%'),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title1: {
    color: 'white',
    fontSize: hp('2%'),
  },
  title2: {
    color: 'white',
    fontSize: hp('3.5%'),
  },
  animateCont: {
    // borderColor: 'red',
    // borderWidth: 1,
    height: hp('30%'),
    width: wp('100%'),
    justifyContent: 'center',
  },
  butCont: {
    // borderColor: 'red',
    // borderWidth: 1,
    height: hp('50%'),
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteButCont: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 20,
    alignItems: 'center',
    height: hp('4.5%'),
    marginBottom: hp('1%'),
  },
  textCont: {
    height: hp('3%'),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteText: {
    color: 'white',
    fontSize: 17,
  },
  blackText: {
    color: 'black',
    fontSize: 17,
  },
  blackButCont: {
    flexDirection: 'row',
    backgroundColor: 'rgb(35,38,35)',
    width: '80%',
    borderRadius: 20,
    alignItems: 'center',
    height: hp('4.5%'),
    marginBottom: hp('1%'),
  },
  butImg: {
    height: hp('3%'),
    width: '12%',
    borderRadius: 20,
    objectFit: 'contain',
  },
  textCont2: {
    height: hp('3%'),
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
