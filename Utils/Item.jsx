import { View, TextInput, Text, Pressable, Animated, useAnimatedValue } from 'react-native';

import styles from '../components/styles';
import UnderLine from './UnderLine';

function Item({ value, AnimatedValue, isActive, onChangeText, onFocus, onBlur}) {
  return (
    <View style={{flex: 0.8,}}>
      <TextInput
        style={{paddingLeft:10, marginTop: 10, marginBottom: 5, fontSize: 18, backgroundColor: '#f8f9fa' }}
        keyboardType="default"
        placeholder="질문"
        value={value}
        onChangeText={onChangeText}
        textAlign="left"
        onFocus={onFocus}  
        onBlur={onBlur}
      />
      <UnderLine isActive={isActive} AnimatedValue={AnimatedValue} />
    </View>
  );
}

export default Item;
