import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import PropTypes from 'prop-types';

const AppTextInput = ({value, style, placeholder, onchange}) => {
  return (
    <TextInput
      style={{...styles.input, ...style}}
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

AppTextInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onchange: PropTypes.func,
};
export default AppTextInput;
