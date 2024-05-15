import { useSelector } from "react-redux";
import { IVariant } from "../models/Product";
import { IReduxInitialState } from "../schema/schema";

interface TitleTileProps {
  brandName: string;
  desc: string;
  price?: number;
  name?: string;
}

const TitleTile: React.FC<TitleTileProps> = ({
  brandName,
  desc,
  price = 0,
  name = "",
}) => {
  return (
    <section>
      <div>{`${brandName} ${name}`}</div>
      <div>{desc}</div>
      <div>Rs.{price}</div>
    </section>
  );
};

export default TitleTile;
