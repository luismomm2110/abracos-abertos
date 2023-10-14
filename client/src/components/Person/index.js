import { PersonImage, PersonContent, PersonContainer } from "./styles";

export default function Person({ data }) {
  const { isReversed, altToPicture, picturePath, job, name, description } = data;

  return (
    <PersonContainer reverse={isReversed}>
      <PersonImage>
        <img
          alt={altToPicture}
          src={require('../../pages/About/assets/' + picturePath)}
        />
      </PersonImage>
      <PersonContent>
        <h3>{job}</h3>
        <h2>{name}</h2>
        {description.map(paragraph => (
          <p>{paragraph}</p>
        ))}
      </PersonContent>
    </PersonContainer>
  );
}
