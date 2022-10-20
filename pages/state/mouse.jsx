import { useState } from "react";

export default function mouse(props) {

    //FORMA SIMPLIFICADA 
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    /*
    const arrayX = useState(0);
    let x = arrayX[0];
    const setX = arrayX[1];

    const arrayY = useState(0);
    let y = arrayY[0];
    const setY = arrayY[1];
    */

    const style = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh"
    };

    function whenMove(ev) {
        console.log(ev.clientX, ev.clientY);
        setX(ev.clientX);
        setY(ev.clientY);
    }

    return (
        <div style={style} onMouseMove={whenMove}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    );
}