import A from "./A";
import Head from "next/head";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={ "hi, hello, bonjour" + keywords }></meta>
        <title>Home Page</title>
      </Head>
      <div className="navbar">
        <A href="/" text="Home page"/>
        <A href="/users" text="Users page"/>
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
