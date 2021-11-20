import { 
  Col,
  Container,
  Form,
  FormGroup,
  FormLabel,
  FormSelect,
  Row,
  Stack,  
} from "react-bootstrap";
import { useState } from "react";
import { Palettes } from "../pages/ColorBook/Palettes";

function ColorPalette({ onSelectColor }) {
    let [ currentPalette, setCurrentPalette ] = useState("amethyst");

    function onSelectPalette(event) {
        setCurrentPalette(event.target.value);
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
                    { 
                    Palettes[currentPalette].map(( color ) => {
                        return (
                            <li 
                                key={color}
                                className="p-3 m-1 rounded-2 shadow-sm palette__swatch" 
                                style={{background: `#${color}`}}
                                onClick={onSelectColor}
                            />
                        )
                    })
                    }
                </ul>
            </Container>
        </>
    )
}

export default ColorPalette;
