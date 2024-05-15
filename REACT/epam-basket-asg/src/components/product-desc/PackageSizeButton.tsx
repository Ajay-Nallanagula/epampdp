import styled from "styled-components";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { IVariant } from "../../models/Product";

const ContainerDiv = styled.div`
  width: 500px;
  height: 62px;
  display: flex;
`;

const ChildDiv = styled.div`
  margin: 5px;
  width: 490px;
  height: 50px;
  display: flex;
  border: 1px solid gray;
  cursor: pointer;
`;

const GrandChildDiv = styled.div`
  margin: 5px;
  width: 480px;
  height: 40px;
  display: flex;
`;

const GrandChildDivItem = styled.div`
  flex: 1;
  margin: 5px;
  padding: 2px;
`;

interface PackageSizeButtonProps {
  variant: IVariant;
  isShowCheck?: boolean;
  onClick: (e: any, variantId: string) => void;
  variantId: string;
}

const PackageSizeButton: React.FC<PackageSizeButtonProps> = ({
  variant,
  isShowCheck,
  onClick,
  variantId,
}) => {
  return (
    <ContainerDiv>
      <ChildDiv onClick={(e) => onClick(e, variantId)}>
        <GrandChildDiv>
          <GrandChildDivItem>Rs. {variant.price}</GrandChildDivItem>
          <GrandChildDivItem>
            {`${variant.weight}${variant.weightedIn}`}
          </GrandChildDivItem>
          <GrandChildDivItem>
            {isShowCheck && <CheckOutlinedIcon />}
          </GrandChildDivItem>
        </GrandChildDiv>
      </ChildDiv>
    </ContainerDiv>
  );
};

export default PackageSizeButton;
