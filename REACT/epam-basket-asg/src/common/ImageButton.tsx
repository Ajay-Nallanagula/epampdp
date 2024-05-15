import { Link } from "react-router-dom";

interface ImageButtonProps {
  imageUrl: string;
  onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const ImageButton: React.FC<ImageButtonProps> = (props) => {
  const { imageUrl, onClick } = props;

  return (
    <a onClick={onClick} target="_blank" rel="noopener noreferrer">
      <img
        src={imageUrl}
        style={{ height: "200px", width: "200px", cursor: "pointer" }}
      />
    </a>
  );
};

export default ImageButton;
