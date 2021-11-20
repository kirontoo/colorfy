import {
  FormGroup,
  FormLabel,
  FormSelect
} from "react-bootstrap";
import ColorPages from "../ColorPages";

function ColorPageSelector({ coloringPage ,onSelectColoringPage }) {
  return (
    <FormGroup>
      <FormLabel>Coloring Page</FormLabel>
      <FormSelect 
        onChange={onSelectColoringPage}
        value={coloringPage}
      >
        { Object.keys(ColorPages).map((name) => {
          return (
            <option key={name} value={name}>{name}</option>
          )
        })
        }
      </FormSelect>
    </FormGroup>
  )
}

export default ColorPageSelector;
