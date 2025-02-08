import React, {useState} from "react";

function ColorPickerComponent() {
    const [color, setColor] = useState('#000000');

    function handleColorChange(e) {
        setColor(e.target.value);
    }

    return (
        <div backgroundColor>
            <h1 style={{ color: color }}>Color Picker</h1>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        <p>Color: {color}</p>
        </div>
    );
}

export default ColorPickerComponent;