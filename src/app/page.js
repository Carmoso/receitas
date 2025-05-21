import Link from "next/link";
import Dificil from "./dificil/page";
import { Avalia } from './components/avalia'

export default function Page() {
  return (
    <section>
      <h1>Receitas</h1>
      <h2>Escolha um tipo:</h2>
      <article className="opcoes">
        <article>
          <h2 id="facil">Fácil</h2>
          <Link href='/facil'>
            <img src='/images/brigadeiro.jpg' alt="Brigadeiro" className="brigadeiro" />
          </Link>
        </article>
        <article>
          <h2 id="medio">Médio</h2>
          <Link href="/medio">
            <img src='/images/pao-de-queijo.jpg' alt="Pão de Queijo" className="queijo" />
          </Link>
        </article>
        <article>
          <h2 id="dificil">Difícil</h2>
          <Link href="/dificil">
            <img src='/images/carbonara.jpg' alt="Carbonara" className="carbonara" />
          </Link>
        </article>
        <Avalia />

      </article>
    </section>
  );
}