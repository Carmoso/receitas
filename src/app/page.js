"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [medias, setMedias] = useState({});

  useEffect(() => {
    const dados = localStorage.getItem("avaliacoes");
    if (dados) {
      const json = JSON.parse(dados);
      const novaMedia = {};
      for (const key in json) {
        const notas = json[key];
        const media = notas.reduce((a, b) => a + b, 0) / notas.length;
        novaMedia[key] = {
          valor: media,
          estrelas: Math.round(media)
        };
      }
      setMedias(novaMedia);
    }
  }, []);

  // função para renderizar as estrelas visuais
  const renderEstrelas = (quantidade) => {
    return (
      <>
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} style={{ color: i <= quantidade ? "orange" : "gray", fontSize: "1.5rem" }}>★</span>
        ))}
      </>
    );
  };

  return (
    <section>
      <h1>Receitas</h1>
      <h2>Escolha um tipo:</h2>
      <article className="opcoes">
        <article>
          <h2 id="facil">Fácil</h2>
          <Link href='/facil'>
            <img src='/images/salada grega.jpg' alt="Salada" className="brigadeiro" />
          </Link>
          {medias.facil ? (
            <>
              <p>{renderEstrelas(medias.facil.estrelas)}</p>
              <p>Média: {medias.facil.valor.toFixed(1)} / 5</p>
            </>
          ) : (
            <p>Sem avaliação</p>
          )}
        </article>

        <article>
          <h2 id="medio">Médio</h2>
          <Link href="/medio">
            <img src='/images/torta de limão.jpg' alt="Torta" className="queijo" />
          </Link>
          {medias.medio ? (
            <>
              <p>{renderEstrelas(medias.medio.estrelas)}</p>
              <p>Média: {medias.medio.valor.toFixed(1)} / 5</p>
            </>
          ) : (
            <p>Sem avaliação</p>
          )}
        </article>

        <article>
          <h2 id="dificil">Difícil</h2>
          <Link href="/dificil">
            <img src='/images/cookies.jpg' alt="Cookies" className="carbonara" />
          </Link>
          {medias.dificil ? (
            <>
              <p>{renderEstrelas(medias.dificil.estrelas)}</p>
              <p>Média: {medias.dificil.valor.toFixed(1)} / 5</p>
            </>
          ) : (
            <p>Sem avaliação</p>
          )}
        </article>
      </article>
    </section>
  );
}
