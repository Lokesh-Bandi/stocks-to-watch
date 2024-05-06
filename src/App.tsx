import LOGO from '../assets/logo.png';
import LOGO_SVG from '../assets/logo1.svg';

import './styles.css';

export const App = () => {
  return (
    <>
      <h1>
        React basic template version - 1.0.0 {process.env.NODE_ENV}{' '}
        {process.env.developer}
        {'Husky Added -1'}
      </h1>
      <img src={LOGO} alt="logo" height={200} width={200} />
      <img src={LOGO_SVG} alt="logo" height={200} width={200} />
    </>
  );
};
