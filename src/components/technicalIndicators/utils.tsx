import { BsGraphDownArrow, BsGraphUpArrow, BsGraphUp, BsGraphDown } from 'react-icons/bs';

export const getIcon = (ind: number) => {
  const size = 26;
  switch (ind) {
    case 0:
      return <BsGraphUpArrow color="#55db43" size={size} />;
    case 1:
      return <BsGraphDownArrow color="#d65555" size={size} />;
    case 2:
      return <BsGraphUp color="#ffffff" size={size} />;
    case 3:
      return <BsGraphDown color="#ffffff" size={size} />;
    default:
      return null;
  }
};
