import * as React from 'react';
import {View, Text, Button, Alert, Image, StyleSheet} from 'react-native';

import AppButton from '../components/AppButton';
import AppSliderButton from '../components/AppSliderButton';
import ScreenLayoutHoc from '../components/ScreenLayoutHoc';
import {SCREEN_ROUTES} from '../constants';

const HomeScreen = ({navigation}) => {
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
          buttonColor="#007bff"
          title="About"
          buttonStyle={styles.btnStyle}
          textStyle={styles.btnStyleText}
          onPress={() => navigation.navigate(SCREEN_ROUTES.about)}
        />
        <AppButton
          buttonColor="#28a745"
          title="Welcome"
          buttonStyle={styles.btnStyle}
          textStyle={styles.btnStyleText}
          onPress={() => navigation.navigate(SCREEN_ROUTES.welcome)}
        />
        <AppButton
          buttonColor="#607D8B"
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
    color: 'red',
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
    borderColor: '#007bff',
    alignSelf: 'center',
  },
  btnStyleTextOne: {fontSize: 20, color: '#007bff'},
  btnStyleText: {fontSize: 20},
  btnStyle: {width: '100%', alignSelf: 'center'},
});

export default HomeScreen;
