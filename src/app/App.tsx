import { AppRoot } from '../appRoot/AppRoot';
import { AppRouter } from '../appRouter/AppRouter';
import './styles.module.css';

export const App = () => {
  return (
    <AppRoot>
      <AppRouter />
    </AppRoot>
  );
};
