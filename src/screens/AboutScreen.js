//@flow
import * as React from 'react';

import AppButton from '../components/Button';
import ScreenLayoutHoc from '../components/ScreenLayoutHoc';
import { SCREEN_ROUTES } from '../constants';

const AboutScreen = ({ navigation }): React.Node => {
  return (
    <ScreenLayoutHoc>
      <AppButton title="Back to Home" onPress={() => navigation.navigate(SCREEN_ROUTES.home)} />
    </ScreenLayoutHoc>
  );
};

export default AboutScreen;
