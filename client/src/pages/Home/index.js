import background from "./principal.jpeg";

import {
  HomeContainer,
  MainTitle,
  ContentContainer,
  TextParagraph,
  MainSection,
  FriendsContainer,
  ProjectContainer,
  ProjectDiv,
  ProjectItem,
  ProjectWrapper
} from './styles';

export default function Home() {
  return (
    <HomeContainer>
      <div style={{ maxWidth: "100%", textAlign: "center" }}>
        <img
          src={background}
          alt="foto oficial"
          style={{
            maxWidth: "100%",
            height: "auto"
          }}
        />
      </div>


      <MainSection>
        <ContentContainer>
          <MainTitle>Quem Somos</MainTitle>
          <TextParagraph>
            Este projeto acontece com a atuação comprometida e brilhante de professoras/es e  voluntárias/os  que com ações pedagógicas humanitárias, acolhedoras e, com os  “aBRaços abertos”, proporcionam novas formas de ver e estar na nova terra.
          </TextParagraph>
          <TextParagraph>
            O projeto acontece na E.E.B. Professora Maria Amin Ghanem e visa contribuir para a inclusão social de crianças e adolescentes imigrantes, promovendo a aprendizagem da língua portuguesa, orientação nas atividades escolares, na conversação e o acolhimento com afeto, diálogo e escuta.
          </TextParagraph>
        </ContentContainer>

        <FriendsContainer>
          <img
            src="https://projetoabracosabertos.com.br/wp-content/uploads/2021/12/Colaboradoras-do-Abracos-Abertos-768x614.jpg"
            width="80%"
            height="auto"
            alt="cambada"
          />
        </FriendsContainer>

      </MainSection>

      <ProjectContainer>
        <ProjectWrapper>
          <ProjectDiv>
            <h2>O que é o projeto?</h2>
          </ProjectDiv>

          <ProjectItem>
            <p>
              O Projeto “aBRraços Abertos” foi idealizado por um grupo de professores e voluntários e visa contribuir para a inclusão social de crianças e adolescentes imigrantes, promovendo a aprendizagem da língua portuguesa (LP), orientação nas atividades escolares, a conversação em LP, etc.
            </p>
          </ProjectItem>

          <ProjectItem>
            <p>
              O trabalho começou no ano de 2018 em parceria com o projeto “O Haiti é Aqui: Aprendendo Juntos”. No ano de 2020, o projeto foi reconfigurado para atender os desafios impostos pela Pandemia do Coronavírus, consolidando assim, o projeto “aBRaços Abertos: Educação Sem Fronteiras”.
            </p>
          </ProjectItem>

          <ProjectItem>
            <p>
              Por meio da educação de qualidade social e do princípio da igualdade, pilares fundamentais de uma sociedade democrática, justa e humanitária, visamos promover a inclusão de TODOS os alunos imigrantes na comunidade e seu acesso ao saber. Principalment na lingua portuguesa.
            </p>
          </ProjectItem>
        </ProjectWrapper>

      </ProjectContainer>
    </HomeContainer>
  );
}
