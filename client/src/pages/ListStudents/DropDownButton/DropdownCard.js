import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";

const VolunteerCard = ({
  data: volunteers = [],
  volunteer = "",
  onNewVolunteer = (f) => f,
}) => {
  const [value, setValue] = useState(volunteer.name);

  const handleSelect = (e) => {
    console.log(volunteer);
    setValue(e);
  };

  return (
    <DropdownButton
      alignRight
      title={value}
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
    >
      <Dropdown.Item eventKey={"Nenhum Voluntário"}>
        Nenhum voluntário
      </Dropdown.Item>
      {volunteers.map((volunteer) => (
        <Dropdown.Item eventKey={volunteer.name}>
          {volunteer.name}
        </Dropdown.Item>
      ))}
      <Dropdown.Divider />
    </DropdownButton>
  );
};

export default VolunteerCard;
