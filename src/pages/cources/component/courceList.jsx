
const CourceList = ({ list, i, playThisVideo }) => {
    return (
        <li className={``}>
            <a href={`#homeSubmenu_${i}`} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> {list?.cname} </a>
            <ul className="collapse list-unstyled" id={`homeSubmenu_${i}`}>
                {
                    list?.list.map((item, i) => (
                        <li key={i} >
                            <a href="#" onClick={()=> playThisVideo(item) } > { item?.name } </a>
                        </li>
                    ))
                }
            </ul>
        </li>
    )
}
export default CourceList;