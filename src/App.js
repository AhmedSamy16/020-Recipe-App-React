import { useState, useEffect } from "react"
import Card from "./Card"

function App() {
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("")
  const [recipes, setRecipes] = useState([])
  const APP_ID = "fa0d9027"
  const APP_KEY = "b4092d595d4a8d015d9f76d4a3c8d236"
  const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=alcohol-free`
  
  useEffect(() => {
    fetch(URL).then(data => data.json()).then(data => {
      setRecipes(data.hits)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])
  const handleSubmit = (e) => {
    e.preventDefault()
    setRecipes([])
    setQuery(search)
    setSearch("")
  }
  return (
    <div className="App">
      <form className="search-form" onSubmit={handleSubmit}>
        <input className="search-input" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button type="submit" className="search-btn">Search</button>
      </form>
      <div className="recipes">
        { recipes.length === 0 ? <h1>Loading...</h1> : (
          recipes.map((item, index) => {
            const { label, calories, image, ingredients } = item.recipe
            return <Card 
              key={index}
              title={label}
              calories={Math.round(calories)}
              img={image}
              ingredients={ingredients}
            />
          })
          )
        }
      </div>
    </div>
  );
}

export default App;
