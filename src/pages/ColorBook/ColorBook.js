import { 
  Image,
  Stack,  
  Container,
  Form,
  FormGroup,
  FormLabel,
  FormSelect,
  Col,
  Row,
  Dropdown,
  Button,
} from "react-bootstrap";
import "./ColorBook.css";

import { useState } from "react";
import { renderToStaticMarkup } from 'react-dom/server';
import ColorPages from "../../ColorPages";
import { Palettes } from "./Palettes";

function LoadSvg({svg}) {
  console.log("svg", svg);
  const SVG = ColorPages.SvgFiles[svg];
  return <SVG/>;
}

function ColorBook() {
  let [ coloringPage, setColoringPage ] = useState(ColorPages.Pages[0]);
  let [ currentPalette, setCurrentPalette ] = useState("amethyst");
  let [ currentColor, setCurrentColor ] = useState(`#${Palettes.amethyst[0]}`);

  function onSelectColoringPage(event) {
    setColoringPage(ColorPages.Pages[ event.target.value ]);
  }

  function onSelectPalette(event) {
    setCurrentPalette(event.target.value);
  }

  function onSelectColor(event) {
    let color = event.target.value || event.target.style.background;
    setCurrentColor(color);
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
          className="bg-light p-4 shadow-sm rounded-3 d-flex flex-column"
          style={{ rowGap: "1rem" }}
        >
          <FormGroup>
            <FormLabel>Select coloring page</FormLabel>
            <FormSelect 
              ariaLabel="Select coloring page" 
              onChange={onSelectColoringPage}
              value={coloringPage}
            >
              { ColorPages.Pages.map((name, index) => {
                return (
                  <option key={`${name}-${index}`} value={index}>{name}</option>
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
              defaultValue="#563d7c"
              title="Choose your color"
              onChange={onSelectColor}
              />
          </FormGroup>

          <Container>
            <Row>
              <Col></Col>
            </Row>
          </Container>

          <FormGroup>
            <FormLabel>Select Color Palette</FormLabel>
            <FormSelect 
              ariaLabel="Select coloring page" 
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

          <Container>
            <ul className="d-flex flex-wrap m-0 p-0 palette">
              { 
                Palettes[currentPalette].map(( color ) => {
                  return (
                    <li 
                      className="p-3 m-1 rounded-2 shadow-sm palette__swatch" 
                      style={{background: `#${color}`}}
                      onClick={onSelectColor}
                    />
                  )
                })
              }
            </ul>
          </Container>
          {/** TODO: color palets here? **/}
        </Col>
        <Col className="bg-light p-4 shadow-sm rounded-3 min-vh-75">
          {`coloring page: ${coloringPage}\n`}
          {`selected color: ${currentColor}`}
        </Col>
      </Row>
    </Stack>
  );
};

export default ColorBook;
