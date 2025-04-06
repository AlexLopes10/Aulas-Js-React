
export default function Secao({link, mostrar, linkNome}) {
    return (
        mostrar&&
        <a href={link} alt="links"> {linkNome} </a>
    )
}