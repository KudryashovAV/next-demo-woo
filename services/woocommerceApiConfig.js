import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const WooCommerceApiClient = new WooCommerceRestApi({
  url: "https://woo-noisily-chief-chopshop.wpcomstaging.com/",
  consumerKey: "ck_bfbaa9c6c666ede767d21118a3500a41fb37308b",
  consumerSecret: "cs_f71e8d62cc978c58dd5796e9b96441581b4db28f",
  version: "wc/v3",
});

export default WooCommerceApiClient

