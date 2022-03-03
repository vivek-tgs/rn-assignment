import React from 'react';
import {Modal, Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import AppButton from './AppButton';

const AppModal = ({
  visible,
  children,
  onClose,
  animationType,
  transparent = true,
  containerStyle,
}) => {
  return (
    <Modal
      animationType={animationType}
      transparent={transparent}
      visible={visible}>
      <View style={{...styles.modalContainerStyle, ...containerStyle}}>
        {children}
        <AppButton
          title="Close Popup"
          buttonStyle={styles.closeBtnStyle}
          onPress={onClose}
        />
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

AppModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
  visible: PropTypes.bool,
  animationType: PropTypes.string,
};
export default AppModal;
