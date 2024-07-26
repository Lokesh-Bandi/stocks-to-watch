import { AppRoot } from '../appRoot/AppRoot';
import { AppRouter } from '../appRouter/AppRouter';
import '../styles/main.css';

export const App = () => {
  return (
    <AppRoot>
      <AppRouter />
    </AppRoot>
  );
};
