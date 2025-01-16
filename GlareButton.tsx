import React, { ReactNode } from "react";
import { keyframes, styled } from "styled-components";

export interface GlareButtonProps {
  bgColor?: string;
  padding?: string;
  onClick?: () => void;
  children?: ReactNode;
  color?:string;
  icon?: string;
  iconAlt?: string;
}


const glowAnimation = keyframes`
  0%, 100% {
    box-shadow: inset 0 0 4px 1px rgba(110, 74, 141, 0.5);
  }
  50% {
    box-shadow: inset 0 0 4px 8px rgba(185, 108, 232, 0.2);
  }
`;

const concentricCircle = keyframes`
  0%, 100% {
    box-shadow: 0px 0px 2px 2px rgba(35, 32, 200, 0.1),
                0px 0px 40px 80px rgba(35, 32, 200, 0.1);
  }
`;

const Button = styled.button<GlareButtonProps>`
  position: relative;
  padding: ${(props) => props.padding || "24px 40px"};
  background-image: linear-gradient(to bottom,
    ${(props) => props.bgColor || "#613af3"},
    #c0affc 150%
  );
  color: ${(props)=>props.color||"white"};
  border-radius: 1000px;
  border: 4px solid rgb(98, 75, 173);
  font-size: 20px;
  font-weight: bold;
  font-family: "sans-serif";
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: box-shadow 1s ease-in-out;

  &:hover {
    animation: ${glowAnimation} 2s infinite, ${concentricCircle} 2s infinite;
    transform: scale(1.05);
    transition: box-shadow 0.1s ease-in-out;
  }

  &:active {
    transform: scale(1);
    transition: box-shadow 0.1s ease-in-out;
  }
`;

const IconWrapper = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px/* Space between icon and text */
`;

const GlareButton: React.FC<GlareButtonProps> = React.memo(
  ({ children, bgColor, onClick, icon, padding, iconAlt,color }) => (
    <Button bgColor={bgColor} onClick={onClick} padding={padding}>
      {icon && <IconWrapper src={icon} color={color} alt={iconAlt || "Icon"} />}
      {children || "Generate Site"}
    </Button>
  )
);

export default GlareButton;
