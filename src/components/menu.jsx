import style from "./menu.module.css"

export const Menu = (props) => {
    return(
        <>
        {/* <nav className={style.navbar}>
            <p><a href="#s1">{props.option01}</a></p>
            <p><a href="#s2">{props.option02}</a></p>
            <p><a href="/Contact">{props.option03}</a></p>
        </nav> */}

        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${style.navBar}`}>
        <div className={"container-fluid"}>
            
            <button className={"navbar-toggler"} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className={"navbar-toggler-icon"}></span>
            </button>
            <div className={"collapse navbar-collapse"} id="navbarNavAltMarkup">
            <div className={"navbar-nav"}>
                <a className={"nav-link"} href={"/"}>{props.option01}</a>
                <a className={"nav-link"} href={"#s2"}>{props.option02}</a>
                <a className={"nav-link"} href={"/contact"}>{props.option03}</a>
                <a className={"nav-link"} href={"/calcs"}>{props.option04}</a>
                <a className={"nav-link"} href={"/media"}>{props.option05}</a>
                <a className={"nav-link"} href={"/imc"}>{props.option06}</a>
                <a className={"nav-link"} href={"/requisicao"}>{props.option07}</a>
            </div>
            </div>
        </div>
        </nav>
        </>
    )
   
}