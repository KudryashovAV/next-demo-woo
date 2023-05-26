import styles from "../../styles/user.module.scss"
import MainContainer from "../../components/MainContainer";

export default function User({ user }) {
  return (
    <MainContainer keywords={ user.name }>
      <div className={styles.user}>
        <h1>
          User with id { user.id }
        </h1>
        <div>User's name - { user.name }</div>
      </div>
    </MainContainer>
  );
};

export async function getServerSideProps({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json()

  return {
    props: { user }
  }
}