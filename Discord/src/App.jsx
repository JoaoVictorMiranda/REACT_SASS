import { useState } from 'react';
import './App.scss';
import Cards from './components/cards/Cards';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <header>
        <img src="/assets/images/cc59daa07820943e943c2fc283b9079d7003ff76.svg" />
        <ul>
          <li><a href="#">Feedback</a></li>
          <li><a href="#">Português (Brasil)</a></li>
          <li><a href="#">Enviar uma solicitação</a></li>
          <li><a href="#">Entrar</a></li>
        </ul>
      </header>

      <div className="ajuda">
        <h1>Central de ajuda</h1>
        <div className="busca">
          <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
          </svg>
          <input type="text" placeholder="Pesquisa " />
        </div>
      </div>

      <div className="head">
        <h1>Precisa de ajuda? Conte com a gente.</h1>
        <p>
          De configurações de conta a permissões, encontre ajuda sobre tudo para o Discord. <br />
          Se você é novo no Discord e está precisando de umas dicas, dê uma olhada no nosso <a href="#">Guia do
            Iniciante!</a>
        </p>
      </div>

      <div className="mae">
        <Cards 
          src="/assets/images/img_known_issues.svg" 
          titulo="Anúncios" 
          paragrafo="Estamos de olho no que está acontecendo. Aqui está o que precisa saber." 
        />
        <Cards 
          src="/assets/images/img_text_chat.svg" 
          titulo="Começando" 
          paragrafo="Comece com o pé direito! Não com o esquerdo!" 
        />
        <Cards 
          src="/assets/images/img_accoutn_settings.svg" 
          titulo="Configurações de conta" 
          paragrafo="Você é importante para sua conta também" 
        />
        <Cards 
          src="/assets/images/img_server_setuo.svg" 
          titulo="Configurações de servidor" 
          paragrafo="Quase tão emocionante quanto decoração de interiores" 
        />
        <Cards 
          src="/assets/images/img_store.svg" 
          titulo="Nitro, loja e impulsos de Servidor" 
          paragrafo="Por favor, não compre até cair. Deixe a gente te ajudar" 
        />
        <Cards 
          src="/assets/images/img_direct_messaging.svg" 
          titulo="Missões e promoções" 
          paragrafo="Bem-vindo, viajante cansado! Gostaria de ver nossas missões?" 
        />
        <Cards 
          src="/assets/images/img_billing.svg" 
          titulo="Formas de pagamento" 
          paragrafo="Aquela sensação quando você olha o seu saldo" 
        />
        <Cards 
          src="/assets/images/img_trust_safety.svg" 
          titulo="Segurança, Privacidade e política" 
          paragrafo="Mantenha as coisas em segurança para você e seus amigos" 
        />
        <Cards 
          src="/assets/images/img_faq.svg" 
          titulo="Problemas conhecidos, Bugs e Soluções de problemas" 
          paragrafo="Tudo o que você puder fazer num autoatendimento" 
        />
      </div>

      <div className="outra">
        <h2>Outras formas de conseguir ajuda</h2>
        <div className="mae">
          <Cards 
            src="/assets/images/img_helpcenter.svg" 
            titulo="Desenvolvedor de jogos" 
            paragrafo="Sua casa para o suporte com o desenvolvimento de bots, aplicativos e jogos usando nossa API e SDK!" 
          />
          <Cards 
            src="/assets/images/img_channel_setup.svg" 
            titulo="Central de apps" 
            paragrafo="Leia tudo sobre como você pode usar, descobrir e adicionar apps como usuário do Discord!" 
          />
          <Cards 
            src="/assets/images/img_twitter.svg" 
            titulo="Twitter" 
            paragrafo="Alguma pergunta rápida? Chame a gente no Twitter" 
          />
        </div>
      </div>

      <div className="outra">
        <h2>Outras formas de conseguir ajuda</h2>
        <div className="mae">
          <div className="card">
            <img src="/assets/images/img_helpcenter.svg" />
            <h3>Desenvolvedor de jogos</h3>
            <p>Sua casa para o suporte com o desenvolvimento de bots, aplicativos e jogos usando nossa API e SDK!</p>
          </div>
          <div className="card">
            <img src="/assets/images/img_channel_setup.svg" />
            <h3>Central de apps</h3>
            <p>Leia tudo sobre como você pode usar, descobrir e adicionar apps como usuário do Discord!</p>
          </div>
          <div className="card">
            <img src="/assets/images/img_twitter.svg" />
            <h3>Twitter</h3>
            <p>Alguma pergunta rápida? Chame a gente no Twitter</p>
          </div>
        </div>
      </div>
    <Footer />
      
    </>
  );
}

export default App;
