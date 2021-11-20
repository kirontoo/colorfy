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
import "./ColorBook.css";

import { useState, useEffect } from "react";
import ColorPages from "../../ColorPages";
import { Palettes } from "./Palettes";

function ColorBook() {
  let [ coloringPage, setColoringPage ] = useState("city");
  let [ currentPalette, setCurrentPalette ] = useState("amethyst");
  let [ currentColor, setCurrentColor ] = useState(`#${Palettes.amethyst[0]}`);
  let SVG = ColorPages[coloringPage];

  useEffect( () => {
    SVG = ColorPages[coloringPage];
  }, [coloringPage])

  function onSelectColoringPage(event) {
    setColoringPage(event.target.value);
  }

  function onSelectPalette(event) {
    setCurrentPalette(event.target.value);
  }

  function onSelectColor(event) {
    let color = event.target.value || event.target.style.background;
    if ( color[0] == 'r') {
      let rgb = color.split("(")[1].split(")")[0].split(",");
      color = rgbToHex(parseInt(rgb[0]), parseInt(rgb[1]), parseInt(rgb[2]));
    }
    setCurrentColor(color);
  }

  function decToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
  }

  function rgbToHex(red, green, blue) {
    return "#" + decToHex(red) + decToHex(green) + decToHex(blue);
  }

  function onColor(event) {
    event.target.style.fill = currentColor;
  }

  return (
    <Stack direction="vertical" gap={3} >
      <h3>Colorbook</h3>
      <Row 
        className="align-items-start"
        style={{columnGap: "1rem", rowGap: "1rem"}}
      >
        <Col 
          sm={12}
          lg={3} 
          className="bg-light p-4 shadow-sm rounded-3 d-flex flex-column colorbook"
          style={{ rowGap: "1rem" }}
        >
          <Row className="flex-nowrap align-items-center">
            <Col
              sm="4"
              lg="8"
            >
              <span>Current Color</span>
            </Col>
            <Col className="w-100 p-3 rounded-2" style={{background: `${currentColor}`}}></Col>
          </Row>
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

          <FormGroup>
            <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
            <Form.Control
              type="color"
              id="exampleColorInput"
              value={currentColor}
              title="Choose your color"
              onChange={onSelectColor}
              />
          </FormGroup>

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
        </Col>
        <Col className="bg-light p-4 shadow-sm rounded-3 colorbook d-flex justify-content-center align-items-center">
          <SVG 
            onClick={onColor}
            />
        </Col>
      </Row>
    </Stack>
  );
};

export default ColorBook;
