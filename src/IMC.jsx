import style from './IMC.module.css'
import { useState } from 'react'

export default function Calcs(){
    const [n1, setN1] = useState()
    const [n2, setN2] = useState()
    const [respImc, setRespImc] = useState()

    const somar = () => setRespImc(parseFloat(n1) / (parseFloat(n2)*parseFloat(n2)))

    return(
        <>
        <h5><a href={"/"} className={style.backBtn}>Voltar</a></h5>
        <h1>IMC</h1>
        <br />
        <div>
            <h4>Digite o peso e altura</h4>
            <input type="number" value={n1} onChange={(e) => setN1(e.target.value)} placeholder='Primeira Nota'/>
            <input type="number" value={n2} onChange={(e) => setN2(e.target.value)} placeholder='Segunda Nota'/>
        </div>
        <div>
            <h4>A Média</h4>
            <p>
                <button onClick={somar}>Somar</button>
                {respImc <= 7 ? "Reprovado" : "Aprovado"}
                <br />
                {!isNaN(respImc) ? respImc : "Digite um número válido"}
            </p>
        </div>
        </>
    )
}