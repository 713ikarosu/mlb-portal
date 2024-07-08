import { faBaseballBall } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface LogoIconProps {
  color?: string;
}

export const LogoIcon = ({ color }: LogoIconProps) => {
  return <FontAwesomeIcon icon={faBaseballBall} className="h-[36px]" color={color} />;
};
