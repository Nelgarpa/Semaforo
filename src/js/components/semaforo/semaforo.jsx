import { useEffect, useState } from 'react';
import "./semaforo.css";

export const Semaforo = () => {

    const [color, setColor] = useState("red");
    const [colores, setColores] = useState(["red", "yellow", "green"]);

    const cambiaColor = (color) => {
        setColor(color);
    };

    const cambiarColor = () => {
        const totalColores = colores.indexOf(color);
        const siguienteColor = (totalColores + 1) % colores.length;
        setColor(colores[siguienteColor]);
    };

    const colorMorado = () => {
        if (!colores.includes("purple")) {
            setColores([...colores, "purple"]);
        } else {
            if (color === "purple") setColor("red");
            setColores(colores.filter(c => c !== "purple"));
        }
    };

    useEffect(() => {
        console.log(`El color actual es: ${color}`);
    }, [color]);

    return (
        <div>
            <div className='rectangulo'></div>
            <div className='container'>
                <div className='semaforo'>
                    <div className='color1' style={{
                        background: color === "red" ? "red" : "#663024",
                        boxShadow: color === "red" ? "0 0 15px 5px white" : "none",
                        transition: "all 0.3s ease-in-out"
                    }} onClick={() => cambiaColor("red")} />

                    <div className='color2' style={{
                        background: color === "yellow" ? "yellow" : "#aba65b",
                        boxShadow: color === "yellow" ? "0 0 15px 5px white" : "none",
                        transition: "all 0.3s ease-in-out"
                    }} onClick={() => cambiaColor("yellow")} />

                    <div className='color3' style={{
                        background: color === "green" ? "green" : "#57724a",
                        boxShadow: color === "green" ? "0 0 15px 5px white" : "none",
                        transition: "all 0.3s ease-in-out"
                    }} onClick={() => cambiaColor("green")} />

                    {colores.includes("purple") && (
                        <div className='color4' style={{
                            background: color === "purple" ? "purple" : "#5c4766",
                            boxShadow: color === "purple" ? "0 0 15px 5px white" : "none",
                            transition: "all 0.3s ease-in-out"
                        }} onClick={() => cambiaColor("purple")} />
                    )}
                </div>
                <div className="botones d-flex justify-content-center gap-3 mt-4">
                    <button type="button" className="btn btn-secondary boton" onClick={cambiarColor}>
                        Siguiente Color
                    </button>
                    <button type="button" className="btn btn-secondary btn-morado" onClick={colorMorado}>
                        {colores.includes("purple") ? "Quitar color púrpura" : "Agregar color púrpura"}
                    </button>
                </div>
            </div>
        </div>
    );
};
