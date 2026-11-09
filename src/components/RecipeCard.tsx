type RecipeCardProps = {
    name: string
    description: string
    time: number
}

function RecipeCard({name, description, time}: RecipeCardProps){
    return(
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Cooking Time: {time} minutes</p>
        </div>
    )
}

export default RecipeCard