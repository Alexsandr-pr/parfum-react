

const Title = ({title, align}) => {
    return (
        <div className="user-content__title title-24">
            <h2 style={{"text-align": align ? align : "inherit"}} >{title}</h2>
        </div>
    )
}

export default Title;