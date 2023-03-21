

const Card = ({ title, calories, img, ingredients }) => {
    return (
        <div className="recipe-item">
            <h2>{title}</h2>
            <ol>
                {ingredients.map((item, index) => {
                    return <li key={index}>{item.text}</li>
                })}
            </ol>
            <p>{calories}</p>
            <img src={img} alt={title} className="recipe-img" />
        </div>
    )
}

export default Card