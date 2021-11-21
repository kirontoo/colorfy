import { 
  Form,
  FormGroup,
  FormLabel,
} from "react-bootstrap";

function ColorPicker({currentColor, onSelectColor}) {
  return (
    <>
      <FormGroup>
        <FormLabel htmlFor="colorInput">Color picker</FormLabel>
        <Form.Control
          type="color"
          id="colorInput"
          value={currentColor}
          title="Choose your color"
          onChange={onSelectColor}
          />
      </FormGroup>
    </>
  )
}

export default ColorPicker;
