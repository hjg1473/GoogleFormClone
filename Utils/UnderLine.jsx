import { View, TextInput, Text, Pressable, Animated, useAnimatedValue } from 'react-native';

import styles from '../components/styles';

function UnderLine({ AnimatedValue, isActive}) {
  return (
    <View>
        <View style={[styles.borderContainer, {bottom: 5}]} />
        <Animated.View
        style={[
            styles.borderContainer,
            {bottom: 5},
            {
            width: AnimatedValue.current.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
            }),
            backgroundColor: isActive ? 'green' : 'black',
            position: 'absolute',
            opacity: isActive ? 1 : 0,
            height: isActive ? 3 : 1,
            },
        ]}
        />
    </View>
  );
}

export default UnderLine;
