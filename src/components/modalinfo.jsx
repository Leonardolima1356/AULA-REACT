export const ModalInfo = ({data, close}) => {
    return(
        <div style={{position: "fixed", left: "50%", top: "35%", transform: "translate(-50%, -35%)", background: "black", color: "white", zIndex: "999"}}>
            <button onClick={close}>✖</button>
            <img src={data.image} alt={data.name}/>
            <h1><strong>Name: </strong>{data.name}</h1>
            <p><strong>Status: </strong>{data.status}</p>
            <p><strong>Origin: </strong>{data.origin.name}</p>
            <p><strong>Type: </strong>{data.type}</p>
            <p><strong>Species: </strong>{data.species}</p>
            <p><strong>Gender: </strong>{data.gender}</p>
            <p><strong>location: </strong>{data.location.name}</p>
            <p><strong>Created: </strong>{new Date(data.created).toLocaleString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit"
            })}</p>
        </div>
    )
}