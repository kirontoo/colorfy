import { 
  Col,
  Row,
  Stack,  
} from "react-bootstrap";
import "./ColorBook.css";

import { useState, useEffect } from "react";
import ColorPages from "../../lib/ColorPages";
import { Palettes } from "../../lib/Palettes";
import ColorPalette from "../../components/ColorPalette";
import ColorPicker from "../../components/ColorPicker";
import ColorPageSelector from "../../components/ColorPageSelector";

function ColorBook() {
  let [ coloringPage, setColoringPage ] = useState("city");
  let [ currentColor, setCurrentColor ] = useState(`#${Palettes.amethyst[0]}`);
  let [ SVG, setSVG ] = useState(ColorPages[coloringPage]);

  useEffect( () => {
    setSVG(ColorPages[coloringPage])
  }, [coloringPage]);

  function onSelectColoringPage(event) {
    setColoringPage(event.target.value);
  }

  function onSelectColor(event) {
    let color = event.target.value || event.target.style.background;
    
    // if the color is in rgb, convert to HEX befor saving to state
    if ( color[0] === 'r') {
      let rgb = color.split("(")[1].split(")")[0].split(",");
      color = rgbToHex(parseInt(rgb[0]), parseInt(rgb[1]), parseInt(rgb[2]));
    }
    setCurrentColor(color);
  }

  // Decimal number to hex
  function decToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal;
  }

  // convert from rgb value to hex
  function rgbToHex(red, green, blue) {
    return "#" + decToHex(red) + decToHex(green) + decToHex(blue);
  }

  function onColor(event) {
    event.target.style.fill = currentColor;
  }

  return (
    <Stack direction="vertical" gap={3} style={{paddingBottom: "2rem"}}>
      <h3 className="w-100 text-align-center p-0">Colorbook</h3>
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
          <Row className="align-items-center">
            <Col className="col-8">
              <span>Current Color</span>
            </Col>
            <Col className="w-100 p-3 rounded-2" style={{background: `${currentColor}`}}></Col>
          </Row>

          <ColorPageSelector 
            coloringPage={coloringPage}
            onSelectColoringPage={onSelectColoringPage}
          />

          <ColorPicker 
            currentColor={currentColor}
            onSelectColor={onSelectColor}
          />

          <ColorPalette 
              defaultPalette={"amethyst"}
              onSelectColor={onSelectColor}
          />

        </Col>
        <Col className="bg-light p-4 shadow-sm rounded-3 colorbook d-flex justify-content-center align-items-center">
          <SVG 
            style={{height: "auto", minWidth: "60%"}}
            className="colorpage"
            onClick={onColor}
            />
        </Col>
      </Row>
    </Stack>
  );
};

export default ColorBook;
