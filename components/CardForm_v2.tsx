import { View, TextInput, Text, Pressable, Animated, useAnimatedValue } from 'react-native';
import styles from './styles';
import React, { useEffect, useRef, useState } from 'react';
import UnderLine from '../Utils/UnderLine';
import Item from '../Utils/Item';
import Icon from 'react-native-vector-icons/Ionicons';
import DropdownComponent from './DropDown';

 function CardForm_v2({text, setText, content, setContent}) {
  
  const [titleBorder, setTitleBorder] = React.useState(false);
  const [contentBorder, setContentBorder] = React.useState(false);
  
  const fadeAnim = useAnimatedValue(0);
  const titlebortherAnim = useRef<Animated.Value>(new Animated.Value(0));
  const contentborderAnim = useRef<Animated.Value>(new Animated.Value(0));

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const titleBorderIncrease = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(titlebortherAnim.current, {
      toValue: 1,
      duration: 200,
      // true might not work with the all properties that you need to animate. true might improve animation performance
      useNativeDriver: false,
    }).start();
  };
  
  const contentBorderIncrease = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(contentborderAnim.current, {
      toValue: 1,
      duration: 200,
      // true might not work with the all properties that you need to animate. true might improve animation performance
      useNativeDriver: false,
    }).start();
  };

  const resetAnimation = () => {
    titlebortherAnim.current.setValue(0);
    contentborderAnim.current.setValue(0);
    setTitleBorder(false);
    setContentBorder(false);
    fadeOut();
  };

  const handleContentFocus = () => {
    contentBorderIncrease();
    setContentBorder(true);
    fadeIn();
  };

  const handleTitleFocus = () => {
    titleBorderIncrease();
    fadeIn();
    setTitleBorder(true)
  };

    return (
    <Animated.View
        style={[
        styles.titleContent,
        {shadowOpacity: fadeAnim},
        {elevation: fadeAnim},
        { flexDirection: 'column', padding: 10 },
        ]}
    >

      <View style={[
            styles.inActive,
            (titleBorder || contentBorder) && styles.leftAccent]} />
      <View style={{flex:1, flexDirection: 'row', marginLeft:10}}>
        <Item 
          value={text} 
          onChangeText={setText}
          onFocus={handleTitleFocus}
          onBlur={resetAnimation}
          isActive={titleBorder}
          AnimatedValue={titlebortherAnim}
        />
        <Icon name="image-outline" style={{marginLeft: 10, marginTop: 20}} size={20} color="#555" />
        <DropdownComponent />
      </View>

      <TextInput
        style={[
            styles.input,
            { fontSize: 14, marginLeft: 10},
        ]}
        onChangeText={setContent}
        value={content}
        placeholder="설문지 설명"
        keyboardType="default"
        textAlign="left"
        onFocus={handleContentFocus}
        onBlur={() => resetAnimation()}
      />
      <View style={{width:'95%', marginLeft:10}}> 
        <UnderLine isActive={contentBorder} AnimatedValue={contentborderAnim} />
      </View>

      
    </Animated.View>
  );
}

export default CardForm_v2;
