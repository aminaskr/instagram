import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasHeartS } from "@fortawesome/free-solid-svg-icons";
import { faHeart as fasHeartR } from "@fortawesome/free-regular-svg-icons";

type LikeViewProps = {
  isLiked: boolean;
  handleLike: () => void;
};
const LikeView = ({ isLiked, handleLike }: LikeViewProps) => {
  return (
    <div>
      <FontAwesomeIcon
        onClick={handleLike}
        icon={isLiked ? fasHeartS : fasHeartR}
        size="xl"
        className={`${!isLiked ? "text-white" : "text-red-500"} ${
          !isLiked ? "hover:text-gray-400 hover:scale-95" : null
        } cursor-pointer`}
      />
    </div>
  );
};

export default LikeView;
