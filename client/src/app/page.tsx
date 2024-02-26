'use client'

import React from 'react'
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter();

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      gap: '1.5rem',
      textAlign: 'justify',
      padding: '2.5rem',
      color: "var(--white)",
      }}>
      <h2>Conheça o Polotno: Uma Ferramenta Moderna de Edição de Imagens e Design</h2>
      <p>
        O Polotno é uma ferramenta de edição de imagens e design que oferece uma abordagem moderna e intuitiva para criar conteúdo visualmente impressionante. Desenvolvido com foco na facilidade de uso e na potência das funcionalidades, o Polotno é uma escolha popular entre designers, criadores de conteúdo e qualquer pessoa que deseje expressar sua criatividade de maneira eficaz.
      </p>
      <p>
        Uma das principais características do Polotno é sua interface de usuário limpa e simplificada, que permite aos usuários se concentrarem na criação sem distrações. Com uma variedade de ferramentas intuitivas e opções de personalização, os usuários podem facilmente manipular imagens, adicionar texto, criar layouts complexos e muito mais.
      </p>
      <p>
        Além disso, o Polotno oferece uma ampla gama de recursos avançados, como camadas, máscaras, efeitos de imagem e integração com bibliotecas de mídia, que permitem aos usuários elevar seus projetos para o próximo nível. Seja você um designer profissional procurando por uma ferramenta poderosa ou um novato em design explorando suas habilidades criativas, o Polotno oferece tudo o que você precisa para transformar suas ideias em realidade.
      </p>
      <p>
        Com atualizações regulares e uma comunidade ativa de usuários e desenvolvedores, o Polotno continua a evoluir e crescer para atender às necessidades em constante mudança dos criadores de conteúdo digital. Experimente o Polotno hoje e descubra o que você pode criar!
      </p>
      <p>
        Esse texto destaca os principais pontos sobre o Polotno, incluindo sua usabilidade, recursos e a quem ele se destina.
      </p>
      <button onClick={() => router.push('/auth/login')}>Começar com Login</button>
    </main>
  )
}
