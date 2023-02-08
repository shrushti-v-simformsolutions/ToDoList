import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import styles from './HeadersStyles';
import { HeadeType } from './type';

const leftSection = (leftIcon, leftIconStyle, leftOnPress) => (
  <TouchableOpacity
    activeOpacity={0.7}
    hitSlop={styles.hitSlop}
    onPress={leftOnPress}
  >
    <Image source={leftIcon} style={[styles.iconStyle, leftIconStyle]} />
  </TouchableOpacity>
);

const centerSection = (title, titleStyle) => (
  <Text
    numberOfLines={1}
    ellipsizeMode={'tail'}
    style={[styles.title, titleStyle]}
  >
    {title}
  </Text>
);

const rightSection = (rightIcon, rightIconStyle, rightOnPress) => (
  <TouchableOpacity
    activeOpacity={0.7}
    hitSlop={styles.hitSlop}
    onPress={rightOnPress}
  >
    <Image source={rightIcon} style={[styles.iconStyle, rightIconStyle]} />
  </TouchableOpacity>
);

const Headers = ({
  title = 'Header',
  left = false,
  center = true,
  right = true,
  leftIcon,
  rightIcon,
  leftOnPress = () => {},
  rightOnPress = ()=> {},
  rightIconStyle,
  leftIconStyle,
  titleStyle,
  headerStyle
}: HeadeType) => (
  <SafeAreaView
    style={[styles.headerContainer, headerStyle]}
    edges={['right', 'top', 'left']}
  >
    <View style={styles.iconView}>
      {left && leftSection(leftIcon, leftIconStyle, leftOnPress)}
    </View>
    {center && centerSection(title, titleStyle)}
    <View style={styles.iconView}>
      {right && rightSection(rightIcon, rightIconStyle, rightOnPress)}
    </View>
  </SafeAreaView>
);

export default Headers;