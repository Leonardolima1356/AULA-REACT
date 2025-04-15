import { use, useState } from 'react'
import style from './Req.module.css'
import { useEffect } from 'react'
import { api } from './api/api'
import { Card } from './components/card'

export default function Req(){
    const [data, setData] = useState([])
    const [page, setPage] = useState("")
    const [erro, setErro] = useState(false)
    const [searchName, setSearchName] = useState("")

    useEffect(() => {
        api.get(`/character/?page=${page}&name=${searchName}`).then((response) => {
            setData(response.data.results)
        }).catch((error) => {
            if(error.response.status === 404){
                setErro(true)
            }
            console.error(error)
        })
    }, [page, searchName])

    console.log(data)

    return(
        <section className={style.wrapPage}>
            <h1 className={style.titlename}>Rick and Morty API</h1>
            <input
            style={{padding: "10px", marginRight: "10px"}}
            type="text" placeholder='Digite uma página (1/42)' 
            value={page} 
            onChange={(e) => setPage(e.target.value)}/>
            {erro && <p>Página não Encontrada</p>}

            <input
            style={{padding: "10px", marginRight: "10px"}}
            type="text" 
            placeholder='Digite o nome do personagem'
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}/>
            {erro && <p>Página não Encontrada</p>}

            <div className={style.wrapCard}>
            {data.map((item, index) => {
                return(
                    <div key={index}>
                        <Card name={item.name} image={item.image}/>
                    </div>
                )
            })}
            </div>
        </section>
    )
}