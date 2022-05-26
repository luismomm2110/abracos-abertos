import background from "./principal.jpeg";

export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          height: "600px",
          width: "2000px",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain"
        }}
      >
      </div>

      <h2 style={{
        textAlign: "center",
        color: "#005298",
        fontSize: "60px",
        marginTop: "8rem",
        marginBottom: "3rem"
      }}>Quem Somos</h2>

      <div style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "5rem"
      }}>
        <p style={{
          display: "flex",
          width: "30vw",
          height: "30vh",
          fontSize: "23px",
          fontWeight: "300",
          color: "#171717",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "3rem",
        }}>
            Este projeto acontece com a atuação comprometida e brilhante de professoras/es e  voluntárias/os  que com ações pedagógicas humanitárias, acolhedoras e, com os  “aBRaços abertos”, proporcionam novas formas de ver e estar na nova terra.
            <br></br><br></br>
            O projeto acontece na E.E.B. Professora Maria Amin Ghanem e visa contribuir para a inclusão social de crianças e adolescentes imigrantes, promovendo a aprendizagem da língua portuguesa, orientação nas atividades escolares, na conversação e o acolhimento com afeto, diálogo e escuta.
        </p>
        <img src="https://projetoabracosabertos.com.br/wp-content/uploads/2021/12/Colaboradoras-do-Abracos-Abertos.jpg" alt="Pessoas" style={{
          width: "600px",
          height: "400px"
        }} />
      </div>
    </>
  );
}
