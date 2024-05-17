import { AppRoot } from '../appRoot/AppRoot';
import { ComponentA } from '../components/ComponentA';
import { ComponentB } from '../components/ComponentB';
import './styles.module.css';

export const App = () => {
  return (
    <AppRoot>
      <ComponentA />
      <ComponentB />
    </AppRoot>
  );
};
