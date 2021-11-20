import { 
  Container,
  FormGroup,
  FormLabel,
  FormSelect,
} from "react-bootstrap";
import { useState } from "react";
import { Palettes } from "../pages/ColorBook/Palettes";

function ColorPalette({ defaultPalette, onSelectColor }) {
  let [ currentPalette, setCurrentPalette ] = useState(defaultPalette);

  function onSelectPalette(event) {
    setCurrentPalette(event.target.value);
  }

  function renderSwatches() {
    if (Palettes.hasOwnProperty(currentPalette)) {
      return (
        Palettes[currentPalette].map(( color ) => {
          return (
            <li 
              key={color}
              className="p-3 m-1 rounded-2 shadow-sm palette__swatch" 
              style={{background: `#${color}`}}
              onClick={onSelectColor}
              />
          );
        })
      );
    }  

    return null;
  }

  return (
    <>
      <FormGroup>
        <FormLabel>Color Palette</FormLabel>
        <FormSelect 
          onChange={onSelectPalette}
          value={currentPalette}
        >
          { Object.keys(Palettes).map((name, index) => {
            return (
              <option key={`${name}-${index}`} value={name}>{name}</option>
            )
          })
          }
        </FormSelect>
      </FormGroup>

      <Container className="p-0">
        <ul className="d-flex flex-wrap m-0 p-0 palette">
          { renderSwatches() }
        </ul>
      </Container>
      </>
  )
}

export default ColorPalette;
