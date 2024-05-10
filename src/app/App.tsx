import { Provider } from 'react-redux';

import { ComponentA } from '../components/ComponentA';
import { ComponentB } from '../components/ComponentB';
import './styles.module.css';
import { AppStore } from '../store/AppStore';

export const App = () => {
  return (
    <Provider store={AppStore}>
      <ComponentA />
      <ComponentB />
    </Provider>
  );
};
