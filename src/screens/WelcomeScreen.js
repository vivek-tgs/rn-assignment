///@flow

import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
// import DeviceInfo from 'react-native-device-info';

import AppButton from '../components/Button';
import ScreenLayoutHoc from '../components/ScreenLayoutHoc';
import { COLOR_CONSTANT, SCREEN_ROUTES } from '../constants';
import AppTextInput from '../components/TextInput';
import { changeUserName } from '../store/actions/userName';
import AppModal from '../components/Modal';

const WelcomeScreen = ({ navigation }): React.Node => {
  const userName = useSelector((state) => state.state.userName);
  const [name, setName] = useState(userName);
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

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
          buttonColor={COLOR_CONSTANT.primaryBlue}
          title="Save"
          buttonStyle={styles.saveBtnStyle}
          textStyle={styles.saveBtnTextStyle}
          onPress={onSave}
        />

        <AppModal
          visible={modalOpen}
          onClose={onModalClose}
          transparent={false}
          animationType="slide"
        >
          <Text style={styles.ModalBodyText}>App is Runing on Emulator</Text>
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
    borderColor: COLOR_CONSTANT.primaryBlue,
    borderWidth: 2,
  },
  ModalBodyText: {
    fontSize: 16,
    marginVertical: 21,
    textAlign: 'center',
  },
  saveBtnStyle: {
    width: '100%',
    alignSelf: 'center',
  },
  saveBtnTextStyle: {
    fontSize: 20,
  },
});

export default WelcomeScreen;
