import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';

const AppButton = ({
  title,
  onPress,
  buttonColor,
  titleColor,
  buttonStyle,
  textStyle,
  disabled = false,
}) => (
  <TouchableOpacity
    style={{
      ...styles.container,
      ...buttonStyle,
      backgroundColor: buttonColor || '#007bff',
    }}
    disabled={disabled}
    onPress={onPress}>
    <Text style={{...styles.title, color: titleColor || '#fff', ...textStyle}}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    backgroundColor: '#007bff',
    height: 48,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
});
AppButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  buttonColor: PropTypes.string,
  titleColor: PropTypes.string,
};

export default AppButton;
