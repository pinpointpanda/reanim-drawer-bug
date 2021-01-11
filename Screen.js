/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, View } from 'react-native';
import Animated, {
  Easing, useAnimatedStyle, useSharedValue,
  withTiming
} from 'react-native-reanimated';

export function ScreenOne(props) {
  const randomWidth = useSharedValue(10);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    };
  });

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <Animated.View
        style={[
          {width: 100, height: 80, backgroundColor: 'black', margin: 30},
          style,
        ]}
      />
      <View style={{height: 200, justifyContent: 'space-around'}}>
        <Button
          title="animate"
          onPress={() => {
            randomWidth.value = Math.random() * 350;
          }}
        />
        <Button
          title="Open Drawer"
          onPress={() => props.navigation.openDrawer()}
        />
        <Button
          title="Close Drawer"
          onPress={() => props.navigation.closeDrawer()}
        />
      </View>
    </View>
  );
}

export function ScreenTwo(props) {
  const randomWidth = useSharedValue(10);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    };
  });

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <Animated.View
        style={[
          {width: 100, height: 80, backgroundColor: 'red', margin: 30},
          style,
        ]}
      />
      <View style={{height: 200, justifyContent: 'space-around'}}>
        <Button
          title="animate"
          onPress={() => {
            randomWidth.value = Math.random() * 350;
          }}
        />
        <Button
          title="Open Drawer"
          onPress={() => props.navigation.openDrawer()}
        />
        <Button
          title="Close Drawer"
          onPress={() => props.navigation.closeDrawer()}
        />
      </View>
    </View>
  );
}
