import background from "./principal.jpeg";

export default function Home() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${background})`,
          height: "600px",
          width: "2000px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
      ></div>
    </div>
  );
}
