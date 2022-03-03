import * as React from 'react';
import {Text, Alert, Image, StyleSheet} from 'react-native';
import Slider from 'react-native-slide-to-unlock';
import PropTypes from 'prop-types';

const AppSliderButton = ({onSlideSuccess, sliderElement, title}) => {
  return (
    <Slider
      onEndReached={onSlideSuccess}
      containerStyle={styles.container}
      sliderElement={sliderElement}>
      <Text style={styles.btnText}>{title || 'SLIDE TO UNLOCK'}</Text>
    </Slider>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    backgroundColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: '400',
  },
});

AppSliderButton.propTypes = {
  title: PropTypes.string,
  sliderElement: PropTypes.node.isRequired,
};

export default AppSliderButton;
