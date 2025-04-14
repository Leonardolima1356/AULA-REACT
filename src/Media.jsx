import style from './Media.module.css'
import { useState } from 'react'

export default function Media(){
    const [n1, setN1] = useState()
    const [n2, setN2] = useState()
    const [n3, setN3] = useState()
    const [n4, setN4] = useState()
    const [n5, setN5] = useState()
    const [respMedia, setRespMedia] = useState()

    const somar = () => setRespMedia(parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4) + parseFloat(n5) / 5)

    return(
        <>
        <h5><a href={"/"} className={style.backBtn}>Voltar</a></h5>
        <h1>Média</h1>
        <br />
        <div>
            <h4>Digite as notas para Média</h4>
            <input type="number" value={n1} onChange={(e) => setN1(e.target.value)} placeholder='Primeira Nota'/>
            <input type="number" value={n2} onChange={(e) => setN2(e.target.value)} placeholder='Segunda Nota'/>
            <input type="number" value={n3} onChange={(e) => setN3(e.target.value)} placeholder='Terceira Nota'/>
            <input type="number" value={n4} onChange={(e) => setN4(e.target.value)} placeholder='Quarta Nota'/>
            <input type="number" value={n5} onChange={(e) => setN5(e.target.value)} placeholder='Quinta Nota'/>
        </div>
        <div>
            <h4>A Média</h4>
            <p>
                <button onClick={somar}>Somar</button>
                {respMedia <= 7 ? "Reprovado" : "Aprovado"}
                <br />
                {!isNaN(respMedia) ? respMedia : "Digite um número válido"}
            </p>
        </div>
        </>
    )
}

