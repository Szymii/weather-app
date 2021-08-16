import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../../store/index';
import IconBtn from '../../atoms/IconBtn/IconBtn';

const SwitchBtn = () => {
  const themeState = useSelector((state) => state.states.theme);
  const dispatch = useDispatch();
  const handleClick = () => {
    themeState === 'light'
      ? dispatch(toggleTheme({ theme: 'dark' }))
      : dispatch(toggleTheme({ theme: 'light' }));
  };
  const label =
    themeState === 'light' ? 'switch to dark theme' : 'switch to light theme';

  const circleStyle = {
    transition: 'transform .5s ease',
    transform: themeState === 'light' ? 'translateX(-15%)' : 'translateX(0)',
  };

  const sunStyle = {
    transformOrigin: 'center center',
    transition: 'transform 1s cubic-bezier(0.68, 0, 0.32, 1.3)',
    transform: themeState === 'light' ? 'rotate(180deg)' : 'rotate(0deg)',
  };

  return (
    <>
      <IconBtn onClick={handleClick} aria-label={label}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 472.39 472.39">
          <g style={sunStyle}>
            <path d="M403.21,167V69.18H305.38L236.2,0,167,69.18H69.18V167L0,236.2l69.18,69.18v97.83H167l69.18,69.18,69.18-69.18h97.83V305.38l69.18-69.18Zm-167,198.17a129,129,0,1,1,129-129A129,129,0,0,1,236.2,365.19Z" />
          </g>
          <g>
            <circle style={circleStyle} cx="236.2" cy="236.2" r="103.78" />
          </g>
        </svg>
      </IconBtn>
    </>
  );
};

export default SwitchBtn;
