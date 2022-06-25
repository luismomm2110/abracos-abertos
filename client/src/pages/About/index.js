import {
  AboutContainer,
  CollaboratorsContainer,
  PersonContainer,
  PersonContent,
  PersonImage
 } from "./styles";

 import regina from "./assets/regina.jpg";
 import patricia from "./assets/patricia.jpg";
 import luis from "./assets/luis.jpg";

export default function About({ isFooterFixed }) {
  isFooterFixed(false);

  return (
    <AboutContainer>
      <CollaboratorsContainer>
        <h1>Colaboradores/as</h1>
      </CollaboratorsContainer>

      <PersonContainer>
        <PersonImage>
          <img
            alt="jornalista regina"
            src={regina}
          />
        </PersonImage>
        <PersonContent>
          <h3>Jornalista</h3>
          <h2>Regina Belletato Fonseca Santini</h2>
          <p>
            Adoro gente de todas as idades, culturas, cores, formas e pensamentos.
            O meu programa favorito é ir à praia, tomar sol e nadar.
          </p>
          <p>
            Faço parte do projeto Abraços Abertos desde setembro de 2019.
            Na EEB Prof Maria Amin Ghanem.
          </p>
          <p>
            Seguimos firmes no propósito de ficar mais perto dos imigrantes, mesmo
            que virtualmente entendendo suas dores e seus anseios. E tentando
            ajudar seja ensinando algo, motivando ou simplesmente lembrando que
            amanhã tem aula.
          </p>
        </PersonContent>
      </PersonContainer>
      <PersonContainer reverse={true}>
        <PersonImage>
          <img
            alt="engenheiro Luis"
            src={luis}
          />
        </PersonImage>
        <PersonContent>
          <h3>Engenheiro de Software</h3>
          <h2>Luis Antonio Momm Duarte</h2>
          <p>
            Sempre gostei de ajudar meus amigos no colégio, principalmente em
            matemática, como uma forma de aprender, tanto tecnicamente quanto
            pessoalmente falando.
          </p>
          <p>
            O Projeto Abraços Abertos, portanto, me atraiu justamente por juntar
            essa ajuda com outro grande interesse meu: A imigração. Sempre me vi
            como ser humano antes de joinvillense, catarinense e brasileiro e,
            por isso, acredito que todos devem ter as mesmas oportunidades
            independentemente de onde nasceram.
          </p>
          <p>
            Nosso projeto, o qual entrei em 2020, é a melhor forma que encontrei
            de facilitar o acolhimento de pessoas de outras nacionalidades e com
            ele, acredito, aprendi muito mais que ensinei.
          </p>
        </PersonContent>
      </PersonContainer>
      <PersonContainer>
        <PersonImage>
          <img
            alt="jornalista Patricia"
            src={patricia}
          />
        </PersonImage>
        <PersonContent>
          <h3>Jornalista</h3>
          <h2>Patricia Stahl Gaglioti</h2>
          <p>
            Por formação, sou jornalista e cheguei até o projeto inspirada por
            outra jornalista, a Manu Torres.
          </p>
          <p>
            Faço parte do projeto Abraços Abertos desde setembro de 2019. Na EEB
            Prof Maria Amin Ghanem.
          </p>
          <p>
            Seguimos firmes no propósito de ficar mais perto dos imigrantes,
            mesmo que virtualmente entendendo suas dores e seus anseios. E
            tentando ajudar seja ensinando algo, motivando ou simplesmente
            lembrando que amanhã tem aula.
          </p>
        </PersonContent>
      </PersonContainer>
    </AboutContainer>
  );
}
