import 'react-native-reanimated';

import { Provider } from 'react-redux';
import store from '@/store';
import Base from './base';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Base />
    </Provider>
  );
}
