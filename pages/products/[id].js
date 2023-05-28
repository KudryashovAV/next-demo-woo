import styles from "../../styles/product.module.scss"
import MainContainer from "../../components/MainContainer";
import WooCommerceApiClient from "../../services/woocommerceApiConfig";
import Image from "next/image";

import { useActions } from "../../hooks/useActions";
import {useCart} from "../../hooks/useCart";

export default function Product({ product }) {
  const { cart } = useCart()

  console.log("cart[id]", cart)

  const isExists = cart.some(item => item.id === product.id)

  const { toggleCart } = useActions()

  return (
    <MainContainer keywords={ product.name }>
      <div className={styles.product}>
        <div>
          <Image
            width={240}
            height={300}
            src={ product.images[0].src }
            alt={ product.images[0].alt }
          />
        </div>
        <div className="details">
          <span>
            { product.name }
          </span>
          <span>--</span>
          <span>
            <strong>£{ product.regular_price}</strong>
          </span>
        </div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => toggleCart(product)}
          >
            { isExists ? "Remove from" : "Add to"} cart
          </button>

        </div>
      </div>
    </MainContainer>
  );
};

export async function getServerSideProps({ params }) {
  const response = await WooCommerceApiClient.get("products/" + params.id);

  return {
    props: {
      product: response.data,
    }
  }
}