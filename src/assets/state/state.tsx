import { useState } from "react";

export function State(){
    // memodifikasi nilai state
    const [isValue,setValue]=useState(0);
    // value menyimpan
    // setValue mengatur nilai

    const addValue =() =>{
        setValue(isValue + 1);
    };

    return(
        <div>
            <h1>{isValue}</h1>
            <button onClick={addValue}>Tambah nilai</button>
        </div>
    );
}