//@flow
import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import { COLOR_CONSTANT } from '../constants';

type Props = {
  title: string,
  buttonStyle: StyleObj,
  buttonColor: string,
  onPress: void,
  titleColor: string,
  textStyle: StyleObj,
  disabled?: boolean,
};

const AppButton = ({
  title,
  onPress,
  buttonColor,
  titleColor,
  buttonStyle,
  textStyle,
  disabled = false,
}: Props): React.Node => (
  <TouchableOpacity
    style={{
      ...styles.container,
      ...buttonStyle,
      backgroundColor: buttonColor || COLOR_CONSTANT.secondaryBlue,
    }}
    disabled={disabled}
    onPress={onPress}
  >
    <Text
      style={{ ...styles.title, color: titleColor || COLOR_CONSTANT.primaryWhite, ...textStyle }}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    backgroundColor: COLOR_CONSTANT.secondaryBlue,
    height: 48,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: COLOR_CONSTANT.primaryWhite,
    fontSize: 16,
  },
});
export default AppButton;
