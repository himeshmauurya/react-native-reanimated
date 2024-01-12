
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
const duration = 2000;
const Login2 = () => {
    const fig1=useSharedValue({x:0,y:0})
  const defaultAnimX = useSharedValue(0);
  const defaultAnimY = useSharedValue(0);
  const animatedDefault = useAnimatedStyle(() => ({
    // transform: [{translateY: defaultAnim.value}],
    transform: [
        {
          translateX: (fig1.value.x)
        },
        {
          translateY: (fig1.value.x)
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
const handlePress = () => {
    fig1.value = withRepeat(
      withTiming(
        { x: fig1.value.x + 100, y: fig1.value.y + 100 }, // Update both X and Y
        { duration, easing: Easing.linear }
      ),
      -1,
      true
    );
  };
function handlePress1(){
    // defaultAnimX.value=defaultAnimX.value+100
    // defaultAnimY.value= defaultAnimY.value+50
  
    defaultAnimX.value=withRepeat(
        withTiming(defaultAnimX.value+100, {
          duration,
          easing: Easing.linear,
        }),
        -1,
        true
      );

      defaultAnimY.value=withRepeat(
        withTiming(defaultAnimY.value+100, {
          duration,
          easing: Easing.linear,
        }),
        -1,
        true
      );
}
//   React.useEffect(() => {

//     defaultAnim.value = withRepeat(
//       withTiming(defaultAnim.value, {
//         duration,
//       }),
//       -1,
//       true
//     );
//   }, []);

  return (
    <>
    <View style={styles.container}>
      <Animated.Image
        source={require('../Assets/Image/linkedin.png')}
        style={[styles.box, animatedDefault]}
      />
      {/* <Animated.View style={[styles.box, animatedChanged]}>
          <Text style={styles.text}>linear</Text>
        </Animated.View> */}
    </View>
    <Button onPress={handlePress} title="Click me" />
    </>
  );
};

export default Login2;
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
