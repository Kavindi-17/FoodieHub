
import './App.css'

function App() {
  return (
    <div className="app-container">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="logo">
          <img
                src="/src/assets/foodiehub-logo.png"
                alt="FoodieHub Logo"
            />
          <p>DISCOVER • COOK • ENJOY</p>
        </div>

        <nav className="sidebar-menu">
          <a href="#" className="active">Home</a>
          <a href="#">Recipes</a>
          <a href="#">Categories</a>
          <a href="#">About</a>
        </nav>

        <div className="sidebar-footer">
          <p>FoodieHub © 2026</p>
          <p>All Rights Reserved.</p>
        </div>

      </aside>

      
      {/* Main Content */}
      <main className="main-content">

        {/* Welcome Section */}
        <section className="welcome-section">
          <h1>Welcome to FoodieHub!</h1>
          <p>Your favourite place for delicious recipes.</p>
        </section>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-text">
            <h2>Discover the Joy of Cooking</h2>
            <p>
              Explore delicious recipes, discover new flavours,
              and find inspiration for your next meal.
            </p>
            <button className="explore-button">
              Explore Recipes
            </button>
          </div>

          <div className="hero-image">
            <img src="/src/assets/hero.png" alt="Delicious food" />
          </div>
        </section>

      </main>


    </div>
  )
}

export default App
