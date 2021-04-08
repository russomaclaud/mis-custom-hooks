import React, { useEffect, useState } from 'react';

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const { x, y } = coords

    useEffect(() => {

        const mouseClick = (e) => {
            const coordenadas = { x: e.x, y: e.y };

            setCoords(coordenadas);
        }

        window.addEventListener('click', mouseClick);

        return () => {
            window.removeEventListener('click', mouseClick);
        }
    }, [])

    return (
        <div>
            <h3>Eres Genial!!!</h3>
            <p>
                x:{x} y:{y}
            </p>
        </div>
    )
}
