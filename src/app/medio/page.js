"use client"

import { useEffect, useState } from "react";
import Estrelas from "../components/Estrelas"; // importa o componente

export default function Medio() {
  const [receita, setReceita] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api-receitas-pi.vercel.app/receitas/todas")
      .then((res) => res.json())
      .then((data) => {
        const receitaSelecionada = data.find(r => r.receita === "Torta de Limão");
        setReceita(receitaSelecionada);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando receita...</p>;
  if (!receita) return <p>Receita não encontrada.</p>;

  return (
    <>
      <section className="receita">
        <h1>{receita.receita}</h1>
        <img src={receita.link_imagem} alt={receita.receita} style={{ maxWidth: 300 }} />
        
        <article className="ingrediente">
          <h2 className="subtitulo">Ingredientes</h2>
          {receita.ingredientes
            .split(',')
            .map((item, index) => (
              <p key={index}>{item.trim()}</p>
            ))}
        </article>
        
        <article className="preparo">
          <h2 className="subtitulo">Modo de preparo</h2>
          {receita.modo_preparo
            .split(/\s*(?=\d+\.)/)
            .map((passo, index) => (
              <p key={index}>{passo.trim()}</p>
            ))}
        </article>
      </section>

      <Estrelas receitaId="medio" />
    </>
  );
}
