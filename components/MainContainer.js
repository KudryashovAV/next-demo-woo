import A from "./A";
import Head from "next/head";
import {AiOutlineShoppingCart} from "react-icons/ai"
import {useCart} from "../hooks/useCart";
import styled from "../styles/MainContainer.module.scss"

const MainContainer = ({ children, keywords }) => {
  const { cart } = useCart()

  return (
    <>
      <Head>
        <meta keywords={ "hi, hello, bonjour" + keywords }></meta>
        <title>Home Page</title>
      </Head>
      <div className={styled.navbar}>
        <A href="/" text="Home page"/>
        <A href="/products" text="Products page"/>
        <div className={styled.cart}>
          <AiOutlineShoppingCart fontSize="30px"/>
          <span className={styled.cartValue}>{cart.length}</span>
        </div>


      </div>
      <div>
        { children }
      </div>
    </>
  )
}

export default MainContainer
