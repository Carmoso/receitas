"use client";
import { useState, useEffect } from "react";

export default function Estrelas({ receitaId }) {
  const [avaliacao, setAvaliacao] = useState(0);

  useEffect(() => {
    const armazenado = localStorage.getItem("ultimaAvaliacao");
    if (armazenado) {
      const dados = JSON.parse(armazenado);
      if (dados[receitaId]) {
        setAvaliacao(dados[receitaId]);
      }
    }
  }, [receitaId]);

  const avaliar = (nota) => {
    setAvaliacao(nota);
    const armazenado = localStorage.getItem("ultimaAvaliacao");
    const dados = armazenado ? JSON.parse(armazenado) : {};
    dados[receitaId] = nota;
    localStorage.setItem("ultimaAvaliacao", JSON.stringify(dados));

    // (Opcional) também salva no array de avaliações gerais
    const avaliacoes = JSON.parse(localStorage.getItem("avaliacoes") || "{}");
    if (!avaliacoes[receitaId]) avaliacoes[receitaId] = [];
    avaliacoes[receitaId].push(nota);
    localStorage.setItem("avaliacoes", JSON.stringify(avaliacoes));
  };

  return (
    <div>
      <p>Avalie esta receita:</p>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          onClick={() => avaliar(n)}
          style={{
            fontSize: "2rem",
            color: n <= avaliacao ? "orange" : "gray",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          ★
        </button>
      ))}
      {avaliacao > 0 && <p>Você avaliou com {avaliacao} estrela(s).</p>}
    </div>
  );
}
