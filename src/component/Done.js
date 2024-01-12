
import React, {useState} from 'react';
import {StyleSheet, View, Text,Button} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withSequence,
  withSpring,
  withRepeat,
} from 'react-native-reanimated';
const duration = 1000;
const Done = () => {
   
//   const defaultAnimX = useSharedValue(0);
  const defaultAnimY = useSharedValue(0);
  const moveUp = useSharedValue(20);
  const rotation = useSharedValue('0deg' );
  const animatedDefault = useAnimatedStyle(() => ({
    // transform: [{translateY: defaultAnim.value}],
   // transform: [{ rotateZ: rotation.value }]
    transform: [
        // {
        //   translateX: (fig1.value.x)
        // },
        {
          translateY: (defaultAnimY.value)
        }
      ],
  }));
  const animatedDefault3 = useAnimatedStyle(() => ({
    transform: [{ rotateZ: rotation.value }]
   
  }));
  const animatedDefault2 = useAnimatedStyle(() => ({
    // transform: [{ rotateZ: rotation.value }]
    // transform: [{translateY: defaultAnim.value}],
    transform: [
        // {
        //   translateX: (fig1.value.x)
        // },
        {
          translateY: (moveUp.value)
        }
      ],
  }));
//   const animatedDefault = useAnimatedStyle(() => ({
//     // transform: [{translateY: defaultAnim.value}],
//     transform: [
//         {
//           translateX: (defaultAnimX.value)
//         },
//         {
//           translateY: (defaultAnimY.value)
//         }
//       ],
//   }));

function handlePress(){
  // rotation.value = withTiming('30deg', { duration: 500 });
  rotation.value=withRepeat(
        withTiming('30deg', {
          duration,
          easing: Easing.linear,
        }),
        -1,
        true
      );

      defaultAnimY.value=withRepeat(
        withTiming(defaultAnimY.value+10, {
          duration,
          easing: Easing.linear,
        }),
        -1,
        true
      );
      moveUp.value=withRepeat(
        withTiming(moveUp.value-50, {
          duration,
          easing: Easing.linear,
        }),
        -1,
        true
      );
}

  return (
    <>
    <View style={styles.container}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',marginTop:hp('9%')}}>
        <Animated.View style={[animatedDefault3]}>
        <Animated.View style={[animatedDefault2]}>
        <Animated.Image
        source={require('../Assets/Image/linkedin.png')}
        style={[styles.box, animatedDefault]}
      />
        </Animated.View>
        </Animated.View>
       <Animated.Image
        source={require('../Assets/Image/linkedin.png')}
        style={[styles.box, animatedDefault]}
      />
      <Animated.Image
        source={require('../Assets/Image/linkedin.png')}
        style={[styles.box, animatedDefault]}
      />
        </View>
        
        
       
        {/* <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',marginTop:hp('2%')}}>
        <Animated.View style={[animatedDefault2]}>
        <Animated.Image
        source={require('../Assets/Image/linkedin.png')}
        style={[styles.box, animatedDefault]}
      />
        </Animated.View>
       
        <Animated.View style={[animatedDefault2]}>
        <Animated.Image
        source={require('../Assets/Image/linkedin.png')}
        style={[styles.box, animatedDefault]}
      />
        </Animated.View>
     
        </View> */}
      {/* <Animated.View style={[styles.box, animatedChanged]}>
          <Text style={styles.text}>linear</Text>
        </Animated.View> */}
    </View>
    <Button onPress={handlePress} title="Click me" />
    </>
  );
};

export default Done;
const styles = StyleSheet.create({
  container: {
    height: hp('30%'),
    //   flex: 1,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   height: '100%',
    marginTop:60,
    borderWidth:1,
    borderColor:'red'
  },
  box: {
    height: 30,
    width: 30,
    marginLeft:40
    // margin: 20,
    //   borderWidth: 1,
    //   borderColor: '#b58df1',
    // //   borderRadius: 20,
    //   alignItems: 'center',
    //   justifyContent: 'center',
  },
  text: {
    color: '#b58df1',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
