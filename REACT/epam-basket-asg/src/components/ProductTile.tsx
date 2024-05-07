import { IBrand, IProduct, IVariant } from "../models/Product";
import "../styles/product.css";

interface ProductTileProps {
  variant: IVariant;
  brand: IBrand;
}

const ProductTile: React.FC<ProductTileProps> = ({
  variant,
  brand,
}): React.JSX.Element => {
  const {brand:brandName, desc} =  brand
  return (
    <article id="productItem">
      <figure>
        <img src="pic_trulli.jpg" alt="Trulli"></img>
        <figcaption>Fig1. - Image TBD.</figcaption>
      </figure>
      <section>
        <div>{brandName}</div>
        <div>{desc}</div>
      </section>
      <section>
        <select>
          <option value="1" key="1">
            Test 1
          </option>
          <option value="2" key="2">
            Test 2
          </option>
          <option value="3" key="3">
            Test 3
          </option>
        </select>
      </section>
      <section>
        <div>Rs1000.00</div>
      </section>
      <section>
        <input type="number" id="quantity" name="quantity" min="1" max="100" />
      </section>
    </article>
  );
};

export default ProductTile;
