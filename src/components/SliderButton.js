//@flow
import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import Slider from 'react-native-slide-to-unlock';
import { COLOR_CONSTANT } from '../constants';

type Props= {
  title: string,
  sliderElement: React.Node,
  onSlideSuccess: void,
}

const AppSliderButton = ({ onSlideSuccess, sliderElement, title }: Props): React.Node => {
  return (
    <Slider
      onEndReached={onSlideSuccess}
      containerStyle={styles.container}
      sliderElement={sliderElement}
    >
      <Text style={styles.btnText}>{title || 'SLIDE TO UNLOCK'}</Text>
    </Slider>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    backgroundColor: COLOR_CONSTANT.primaryGray,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: '400',
  },
});

export default AppSliderButton;
