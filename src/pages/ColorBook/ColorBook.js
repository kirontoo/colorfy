import { 
  Image,
  Stack,  
  Container,
  FormGroup,
  FormLabel,
  FormSelect,
  Col,
  Row,
  Dropdown,
  Button,
} from "react-bootstrap";

import { useState } from "react";
import { renderToStaticMarkup } from 'react-dom/server';
import ColorPages from "../../ColorPages";

function LoadSvg({svg}) {
  console.log("svg", svg);
  const SVG = ColorPages.SvgFiles[svg];
  return <SVG/>;
}

function ColorBook() {
  let [ coloringPage, setColoringPage ] = useState(ColorPages.Pages[0]);

  function onSelectColoringPage(event) {
    setColoringPage(ColorPages.Pages[ event.target.value ]);
  }

  return (
    <Stack direction="vertical" gap={3} >
      <h3>Colorbook</h3>
      <Stack 
        direction="horizontal" 
        gap={2}
        className="align-items-start"
      >
        <Col 
          lg={3} 
          className="bg-light p-4 rounded-3 d-flex flex-column"
          style={{ rowGap: "1rem" }}
        >
          <FormGroup controlId="formColorPage">
            <FormLabel>Select coloring page</FormLabel>
            <FormSelect 
              ariaLabel="Select coloring page" 
              onChange={onSelectColoringPage}
            >
              { ColorPages.Pages.map((name, index) => {
                  return (
                    <option key={`${name}-${index}`} value={index}>{name}</option>
                  )
                })
              }
            </FormSelect>
          </FormGroup>

          <FormGroup controlId="formColorPalette">
            <FormLabel>Select Color Palette</FormLabel>
            <FormSelect 
              ariaLabel="Select coloring page" 
            >
              { ColorPages.Pages.map((name, index) => {
                  return (
                    <option key={`${name}-${index}`} value={index}>{name}</option>
                  )
                })
              }
            </FormSelect>
          </FormGroup>

          {/** TODO: color palets here? **/}
        </Col>
        <Col>
          {coloringPage}
        </Col>
      </Stack>
    </Stack>
  );
};

export default ColorBook;
