import React from 'react';
import styled, { keyframes } from 'styled-components';

 const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(15, 23, 42, 0.2);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
`;

export const StyledButtons = styled.button`
padding: 8px 16px;
border-radius: 4px;
font-weight: bold;
cursor: pointer;
color: white;
background-color: ${({ variant }) => getButtonBackgroundColor(variant)};
box-shadow: 0 0 0 rgba(0, 0, 0, 0);
transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out,
box-shadow 0.3s ease-in-out;
width:100%;
&:hover {
  animation: ${({ variant }) => variant !== 'primary' && pulseAnimation} 1s infinite;
}
`;
 const getButtonBackgroundColor = (variant) => {
  switch (variant) {
    case 'success':
      return '#34D399'; // Green
    case 'danger':
      return '#EF4444'; // Red
    case 'primary':
    default:
      return '#3B82F6'; // Blue
      case 'add':
        return 'darkblue';
  }
};

export const StyledButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  color: white;
  background-color: ${({ variant }) => getButtonBackgroundColor(variant)};
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out,
  box-shadow 0.3s ease-in-out;

  &:hover {
    animation: ${({ variant }) => variant !== 'primary' && pulseAnimation} 1s infinite;
  }
`;

export const Button = ({ variant, onClick, children }) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
