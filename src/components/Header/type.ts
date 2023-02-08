import { StyleSheet, TextProps, ViewProps } from 'react-native';

export interface HeadeType {
  title?: string;
  left?: boolean;
  center?: boolean;
  right?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  leftOnPress?: () => void;
  rightOnPress?: () => void;
  rightIconStyle?: StyleSheet<ViewProps>;
  leftIconStyle?: StyleSheet<ViewProps>;
  titleStyle?: StyleSheet<TextProps>;
  headerStyle?: StyleSheet<ViewProps>;
}