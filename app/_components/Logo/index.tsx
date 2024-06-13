import { faBaseballBall } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface LogoProps {
  color?: string;
}

export const Logo = ({ color }: LogoProps) => {
  return (
    <span>
      <FontAwesomeIcon icon={faBaseballBall} className="h-[36px]" color={color} />
    </span>
  );
};
