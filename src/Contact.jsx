import style from "./Contact.module.css"
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { Menu } from "./components/menu";
import { Loading } from './components/spinner'
import { useEffect, useState } from "react";

function contact (){
    const [cep, setCep] = useState("80510-070")
    const [lat, setLat] = useState("-25.4248289")
    const [lon, setLon] = useState("-49.354861")
    const [loading, setLoading] = useState(false)
    const [bairro, setBairro] = useState("")
    const [rua, setRua] = useState("")
    const [estado, setEstado] = useState("")
    const [localidade, setLocalidade] = useState("")
    
    const position = [lat, lon]

    function handleCep(e){
      setCep(e.target.value)
    }

    function ChangeView({center}){
      const map = useMap()
      map.setView(center, 15)
      return null
    }

    useEffect(() => {
      const sanitizedCep = cep.replace(/\D/g, "")

      if(sanitizedCep.length !== 8) return

      setLoading(true)

      fetch(`https://viacep.com.br/ws/${sanitizedCep}/json/`)
        .then((res) => res.json())
        .then((data) => {

          if(data.error){
            console.warn("CEP não encontrado")
            setLoading(false)
            return
          }

          const { logradouro, localidade, uf, bairro, estado } = data
          setBairro(bairro)
          setRua(logradouro)
          setEstado(estado)
          setLocalidade(localidade)
          const address = `${logradouro ? logradouro + ', ' : ''}${localidade}, ${uf}`

          fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
            .then((response) => response.json())
            .then((locationData) =>{

              if(locationData.length > 0){
                const { lat, lon } = locationData[0]
                setLat(parseFloat(lat))
                setLon(parseFloat(lon))
              }else{
                console.warn("Coordenadas não encontradas")
              }

              setLoading(false)

            }).catch(error =>{
              console.error("Erro ao buscar coordenadas: ", error)
              setLoading(false)
            })
        }).catch(error =>{
          console.log("erro ao buscar o CEP:", error)
          setLoading(false)
        })
    }, [cep])
    
    
    return(
        <>
        <Menu option01="voltar a pagina inicial"/>
        <br />
        <br />
        <input type="text" placeholder="Insira o CEP" onChange={handleCep}/>
        {bairro} - {rua} = {estado} - {localidade}
        <br />
        {loading ? <Loading/> :
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width: "100%", height: "70vh"}}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          <Marker position={position}>
          <Popup>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.google.com/maps/searc/?api=1$query${lat},${lon}`}
              >
            </a>
            </Popup>
          </Marker>
            </MapContainer>
          }
      </>
    )
}

export default contact