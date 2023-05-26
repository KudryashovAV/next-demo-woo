import A from "./A";
import Head from "next/head";
import { useSelector } from "react-redux"

const MainContainer = ({ children, keywords }) => {
  const count = useSelector((state) => state.counter.value)

  return (
    <>
      <Head>
        <meta keywords={ "hi, hello, bonjour" + keywords }></meta>
        <title>Home Page</title>
      </Head>
      <div className="navbar">
        <A href="/" text="Home page"/>
        <A href="/products" text="Products page"/>
        <A href="/cart" text={ "Cart " + count }/>

      </div>
      <div>
        { children }
      </div>

      <style jsx>
        {
          `
            .navbar {
              background: orange;
              padding: 15px;
            };
          `
        }
      </style>
    </>
  )
}

export default MainContainer
