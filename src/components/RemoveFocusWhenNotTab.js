import { useEffect, memo } from 'react';

const handleFirstTab = event => {
  if (event.keyCode === 9) {
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
  }
};

const RemoveFocusWhenNotTab = () => {
  useEffect(() => {
    window.addEventListener('keydown', handleFirstTab);
    return () => {
      window.removeEventListener('keydown', handleFirstTab);
    };
  });

  return null;
};

export default memo(RemoveFocusWhenNotTab);
