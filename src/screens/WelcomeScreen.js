///@ts-check

import * as React from 'react';
import {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import DeviceInfo from 'react-native-device-info';

import AppButton from '../components/Button';
import ScreenLayoutHoc from '../components/ScreenLayoutHoc';
import {SCREEN_ROUTES} from '../constants';
import AppTextInput from '../components/TextInput';
import {changeUserName} from '../store/actions/userName';
import AppModal from '../components/Modal';

const WelcomeScreen = ({navigation}) => {
  const userName = useSelector(state => state.state.userName);
  const [name, setName] = useState(userName);
  const [modalOpen, setModalOpen] = useState(false);

  console.log('name>>>>>>>>', userName);
  const dispatch = useDispatch();

  useEffect(() => {
    DeviceInfo.isEmulator().then((isEmulator) => {
      if (isEmulator) {
        setModalOpen(true);
      }
    });
  }, []);

  const onSave = () => {
    if (name.trim().length > 2) {
      dispatch(changeUserName(name));
      navigation.navigate(SCREEN_ROUTES.home);
    } else {
      Alert.alert('username must be at least 3 characters long');
    }
  };

  const onModalClose = () => {
    setModalOpen(false);
  };

  return (
    <ScreenLayoutHoc>
      <View style={styles.container}>
        <AppTextInput
          style={styles.Textinput}
          value={name}
          onchange={setName}
          placeholder="User Name"
        />
        <AppButton
          buttonColor="#536DFE"
          title="Save"
          buttonStyle={{width: '100%', alignSelf: 'center'}}
          textStyle={{fontSize: 20}}
          onPress={onSave}
        />

        <AppModal
          visible={modalOpen}
          onClose={onModalClose}
          transparent={false}
          animationType="slide">
          <Text style={styles.ModalBodyText}>
           App is Runing on Emulator
          </Text>
        </AppModal>
      </View>
    </ScreenLayoutHoc>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Textinput: {
    borderColor: 'blue',
    borderWidth: 2,
  },
  ModalBodyText: {
    fontSize: 16,
    marginVertical: 21,
    textAlign:'center'
  },
});

export default WelcomeScreen;
