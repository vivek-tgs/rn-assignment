// @flow
import * as React from 'react';
import { View, Text, Alert, Image, StyleSheet } from 'react-native';

import AppButton from '../components/Button';
import AppSliderButton from '../components/SliderButton';
import ScreenLayoutHoc from '../components/ScreenLayoutHoc';
import { COLOR_CONSTANT, SCREEN_ROUTES } from '../constants';

const HomeScreen = ({ navigation }): React.Node => {
  return (
    <ScreenLayoutHoc>
      <View style={styles.container}>
        <Text> 5 variations of a buttons </Text>
        <AppButton
          buttonColor="transparent"
          title="About"
          buttonStyle={styles.btnStyleOne}
          textStyle={styles.btnStyleTextOne}
          onPress={() => navigation.navigate(SCREEN_ROUTES.about)}
        />
        <AppButton
          buttonColor={COLOR_CONSTANT.secondaryBlue}
          title="About"
          buttonStyle={styles.btnStyle}
          textStyle={styles.btnStyleText}
          onPress={() => navigation.navigate(SCREEN_ROUTES.about)}
        />
        <AppButton
          buttonColor={COLOR_CONSTANT.primaryGreen}
          title="Welcome"
          buttonStyle={styles.btnStyle}
          textStyle={styles.btnStyleText}
          onPress={() => navigation.navigate(SCREEN_ROUTES.welcome)}
        />
        <AppButton
          buttonColor={COLOR_CONSTANT.primaryGray}
          title="Disabled Button"
          buttonStyle={styles.btnStyle}
          textStyle={styles.btnStyleText}
          disabled
        />
        <AppSliderButton
          title="SLIDE TO UNLOCK"
          onSlideSuccess={() => Alert.alert('Slide Success')}
          sliderElement={
            <Image
              style={styles.btnImage}
              source={{
                uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
              }}
            />
          }
        />
      </View>
    </ScreenLayoutHoc>
  );
};

const styles = StyleSheet.create({
  innerText: {
    color: COLOR_CONSTANT.primaryRed,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  btnImage: {
    width: 50,
    margin: 4,
    borderRadius: 5,
    height: 50,
    backgroundColor: 'red',
  },
  btnStyleOne: {
    width: '100%',
    borderWidth: 2,
    borderColor: COLOR_CONSTANT.secondaryBlue,
    alignSelf: 'center',
  },
  btnStyleTextOne: { fontSize: 20, color: COLOR_CONSTANT.secondaryBlue },
  btnStyleText: { fontSize: 20 },
  btnStyle: { width: '100%', alignSelf: 'center' },
});

export default HomeScreen;
