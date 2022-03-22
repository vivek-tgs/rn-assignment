//@flow
import * as React from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

import AppButton from './Button';

type Props = {
  onClose: void,
  children: React.Node,
  visible: boolean,
  animationType: string,
  transparent: true,
  containerStyle: StyleObj,
};

const AppModal = ({
  visible,
  children,
  onClose,
  animationType,
  transparent = true,
  containerStyle,
}: Props): React.Node => {
  return (
    <Modal animationType={animationType} transparent={transparent} visible={visible}>
      <View style={{ ...styles.modalContainerStyle, ...containerStyle }}>
        {children}
        <AppButton title="Close Popup" buttonStyle={styles.closeBtnStyle} onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainerStyle: {
    padding: 15,
  },
  closeBtnStyle: {
    alignSelf: 'center',
  },
});

export default AppModal;
