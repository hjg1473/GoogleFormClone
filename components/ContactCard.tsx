import { View, TextInput, Text, Pressable, Animated, useAnimatedValue } from 'react-native';
import styles from './styles';
import React, { useEffect, useRef, useState } from 'react';
import UnderLine from '../Utils/UnderLine';

function ContactCard({text, setText, content, setContent}) {
  
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
      <View style={[styles.topAccent]} />

      <View style={[
            styles.inActive,
            (titleBorder || contentBorder) && styles.leftAccent]} />

      <TextInput
        style={[styles.input, { marginTop: 10, marginLeft: 10 }]}
        keyboardType="default"
        value={text}
        onChangeText={setText}
        textAlign="left"
        onFocus={handleTitleFocus}  
        onBlur={() => resetAnimation()}
      />

      <UnderLine isActive={titleBorder} AnimatedValue={titlebortherAnim} />

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

      <UnderLine isActive={contentBorder} AnimatedValue={contentborderAnim} />
      
    </Animated.View>
  );
}

export default ContactCard;
