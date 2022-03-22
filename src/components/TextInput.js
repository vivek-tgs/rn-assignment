//@flow

import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type Props = {
  value: string,
  style: StyleObj,
  placeholder: String,
  onchange: void,
};

const AppTextInput = ({ value, style, placeholder, onchange }: Props): React.Node => {
  return (
    <TextInput
      style={{ ...styles.input, ...style }}
      onChangeText={onchange}
      value={value}
      autoCapitalize="none"
      placeholder={placeholder}
      autoCorrect={false}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 0,
    borderWidth: 1,
    padding: 10,
    borderRadius: 3,
  },
});
export default AppTextInput;
