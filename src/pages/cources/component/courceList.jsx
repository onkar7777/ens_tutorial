
const CourceList = ({ list, i, playThisVideo }) => {
    return (
        <li className={``}>
            <span href={`#homeSubmenu_${i}`} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> {list?.cname} </span>
            <ul className="collapse list-unstyled" id={`homeSubmenu_${i}`}>
                {
                    list?.list.map((item, i) => (
                        <li key={i} >
                            <span onClick={()=> playThisVideo(item) } > { item?.name } </span>
                        </li>
                    ))
                }
            </ul>
        </li>
    )
}
export default CourceList;