import Link from "next/link";
import MainContainer from "../components/MainContainer";
import WooCommerceApiClient from "../services/woocommerceApiConfig";

const Products = ({ products }) => {

  return (
    <MainContainer keywords="products page">
      <h1>Products</h1>
      <ul>
        { products.map((product) =>
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>
                { product.name }
              </Link>
            </li>
          )
        }
      </ul>
    </MainContainer>
  );
};

export default Products;

export async function getStaticProps(context) {
  const response = await WooCommerceApiClient.get("products");

  return {
    props: {
      products: response.data,
    }
  }
}