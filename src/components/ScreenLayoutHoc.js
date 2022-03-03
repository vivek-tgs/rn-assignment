import * as React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  useColorScheme,
  Text,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

const ScreenLayoutHoc = ({children}) => {
  const userName = useSelector(state => state.state.userName);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={backgroundStyle}>
        <View style={styles.screenContainerView}>
          <Text>{userName.trim() && `Welcomre ${userName}`}</Text>
          {children}
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  screenContainerView: {
    flex: 1,
    padding: 8,
  },
});
ScreenLayoutHoc.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ScreenLayoutHoc;
