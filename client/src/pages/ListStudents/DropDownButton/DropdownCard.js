import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const VolunteerCard = ({ data }) => {
  const handleSelect = (e) => {
    console.log(e);
  };

  return (
    <DropdownButton
      alignRight
      title="Dropdown right"
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
    >
      <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
      <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
      <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
    </DropdownButton>
  );
};

export default VolunteerCard;
