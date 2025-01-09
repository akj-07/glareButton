import React, { ReactNode } from "react";
import { keyframes, styled } from "styled-components";

export interface GlareButtonProps {
  bgColor?: string;
  padding?: string;
  onClick?: () => void;
  children?: ReactNode;
  icon?: string;
  Text?: string;
}

// Keyframe for the moving border effect
const moveBorder = keyframes`
  0%{
    background-position:-100% -100%;
    top: 0px;
    left:-2px;
    right: 0px;
    bottom:-2px;
  }
    25%{
    background-position:0 0;
    top: 0px;
    left:-2px;
    right: 0px;
    bottom:0px;
  }
    50%{
      background-position:-50% -50%;
      top: -2px;
      left:-2px;
      right: 0px;
      bottom:0px;
    }

    100%{
      background-position:-100% -100%;
      top: 0px;
      left: -2px;
      right: 0px;
      bottom:2px;
  }
`;

// Keyframe for glowing effect on hover
const glowAnimation = keyframes`
  0%,100% {
    box-shadow: inset 0 0 4px 4px rgba(110, 74, 141, 0.5);
  }
  50% {
    box-shadow: inset 0 0 4px 8px rgba(185, 108, 232, 0.2);
  }
`;

const concentricCircle = keyframes`
  0%,100% {
    box-shadow: 0px 0px 3px 3px rgba(138, 138, 138, 0.1),
                0px 0px 36px 36px rgba(138, 138, 138, 0.5);
  }
`;

const ButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 180px;
  height: 60px;
  border-radius: 50px;
  border: 2px solid rgb(114, 119, 169);
  &:hover {
    animation: ${concentricCircle} 1s infinite;
    transform: scale(1.1);
  }
  transition: transform 0.2s ease-in-out;
  &:active {
    transform: scale(0.8);
  }
`;

const Button = styled.button<GlareButtonProps>`
  position: relative;
  width: 100%;
  height: 100%;
  padding: ${(props) => props.padding || "10px 20px"};
  background-color: ${(props) =>
    props.bgColor || "#6a1b9a"}; /* Default purplish background */
  color: white;
  border-radius: 50px;
  border: none;
  font-size: 20px;
  font-weight: bold;
  font-family: "sans-serif";
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.1s ease-in-out;
  &:hover {
    animation: ${glowAnimation} 2s infinite;
  }
`;

const MovingBorder = styled.div`
  position: absolute;
  border-radius: 50px;
  background: linear-gradient(
      90deg,
      white 15%,
      ${(props) => props.color || "#6a1b9a"} 5%
    )
    no-repeat;
  background-size: 200% 100%;
  animation: ${moveBorder} 3s linear infinite;
  pointer-events: none;
`;

const IconWrapper = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px; /* Space between icon and text */
`;

export const GlareButton: React.FC<GlareButtonProps> = ({
  children,
  bgColor,
  onClick,
  icon,
  padding,
}) => {
  return (
    <ButtonWrapper>
      <MovingBorder />
      <Button bgColor={bgColor} onClick={onClick} padding={padding}>
        {icon && <IconWrapper src={icon} alt="icon" />}
        {children || "Click me!"}
      </Button>
    </ButtonWrapper>
  );
};

export default GlareButton;
