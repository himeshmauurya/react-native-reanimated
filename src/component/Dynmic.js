import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
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
const duration = 1500;

const Dynmic = () => {
  const defaultAnimY = useSharedValue(0);
  const moveUp = useSharedValue(hp('10%'));
  const rotation = useSharedValue('-20deg');
  useEffect(() => {
    handlePress();
  }, []);
  const animatedDefault = useAnimatedStyle(() => ({
    // transform: [{translateY: defaultAnim.value}],
    transform: [
      // {
      //   translateX: (fig1.value.x)
      // },
      {
        translateY: defaultAnimY.value,
      },
    ],
  }));
  const animatedDefault2 = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: moveUp.value,
      },
    ],
  }));

  function handlePress() {
    rotation.value = withRepeat(
      withTiming('20deg', {
        duration,
        easing: Easing.linear,
      }),
      -1,
      true,
    );
    defaultAnimY.value = withRepeat(
      withTiming(defaultAnimY.value + hp('1%'), {
        duration,
        easing: Easing.linear,
      }),
      -1,
      true,
    );
    moveUp.value = withRepeat(
      withTiming(moveUp.value - hp('10%'), {
        duration,
        easing: Easing.linear,
      }),
      -1,
      true,
    );
  }
  const animatedDefault3 = useAnimatedStyle(() => ({
    transform: [{rotateZ: rotation.value}],
  }));
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: hp('7%'),
          }}>
          <Animated.View style={[animatedDefault3]}>
            <Animated.Image
              source={require('../Assets/Image/twitter.png')}
              style={[styles.box, animatedDefault]}
            />
          </Animated.View>

          <Animated.View style={[animatedDefault2]}>
            <Animated.View style={[animatedDefault3]}>
              <Animated.Image
                source={require('../Assets/Image/reddit.png')}
                style={[styles.box, animatedDefault]}
              />
            </Animated.View>
          </Animated.View>

          <Animated.View style={[animatedDefault3]}>
            <Animated.Image
              source={require('../Assets/Image/linkedin.png')}
              style={[styles.box, animatedDefault]}
            />
          </Animated.View>
          <Animated.View style={[animatedDefault2]}>
            <Animated.View style={[animatedDefault3]}>
              <Animated.Image
                source={require('../Assets/Image/insta.png')}
                style={[styles.box, animatedDefault]}
              />
            </Animated.View>
          </Animated.View>
          <Animated.View style={[animatedDefault3]}>
            <Animated.Image
              source={require('../Assets/Image/gmail.png')}
              style={[styles.box, animatedDefault]}
            />
          </Animated.View>
        </View>
      </View>
      {/* <Button onPress={handlePress} title="Click me" /> */}
    </>
  );
};

export default Dynmic;
const styles = StyleSheet.create({
  container: {
    height: hp('30%'),
    borderWidth: 1,
    // borderColor: 'green',
  },
  box: {
    height: hp('6%'),
    width: wp('13%'),
  },
  text: {
    color: '#b58df1',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
