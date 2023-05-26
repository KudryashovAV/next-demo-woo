import styles from "../../styles/product.module.scss"
import MainContainer from "../../components/MainContainer";
import WooCommerceApiClient from "../../services/woocommerceApiConfig";
import Image from "next/image";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { decrement, increment } from "../../services/counters/cartSlice"

export default function Product({ product }) {
  const [showRemoveButton, setShowRemoveButton] = useState(false)
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  useEffect(() => {
    if (count > 0) {
      setShowRemoveButton(true)
    } else {
      setShowRemoveButton(false)
    }
  }, [count])

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
            onClick={() => dispatch(increment())}
          >
            Add to cart
          </button>
          {showRemoveButton && (<button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Remove from cart
          </button>)}
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