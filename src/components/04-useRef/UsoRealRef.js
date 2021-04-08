import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

import '../02-useEffect/effects.css';

export const UsoRealRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Uso Real Ref</h1>
            <hr />

            { show && <MultipleCustomHooks />}

            <button
                className="btn btn-primary mt-5"
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show/Hide
            </button>
        </div>
    )
}
