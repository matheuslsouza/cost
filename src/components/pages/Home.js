import styles from "./Home.module.css";
import savings from "../../img/savings.svg";
import LinkButton from "../layout/LinkButton";

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-Vindo ao <span>Cost</span>
      </h1>
      <p>Comece a gerenciar ao seus projetos agora mesmo !</p>
      <LinkButton to="/NewProject" text="Criar Projeto" />
      <img src={savings} alt="Cost" />
    </section>
  );
}
export default Home;
