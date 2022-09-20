import { useLocation } from 'react-router-dom';

const IbelsaRoute = () => {
  const location = useLocation();
  const isIbelsa = location.pathname.includes('ibelsa');
  return isIbelsa;
};

const convertHex = (hex, opacity = 1) => {
  const newHex = hex.replace('#', '');
  const rgb = {
    r: parseInt(newHex.substring(0, 2), 16),
    g: parseInt(newHex.substring(2, 4), 16),
    b: parseInt(newHex.substring(4, 6), 16)
  };
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
};

export { convertHex, IbelsaRoute };
