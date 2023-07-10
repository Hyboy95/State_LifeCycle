import { useState } from "react";

export default function AutoChangeColor() {
  let [color, setColor] = useState('black');
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  setTimeout(() => {
    setColor('#' + randomColor)
  }, 3000)

  return (
    <div>
      <div
        style={{
          backgroundColor: color,
          paddingTop: 20,
          width: 400,
          height: 80,
          margin: 'auto'
        }}
      />
    </div>
  );
}