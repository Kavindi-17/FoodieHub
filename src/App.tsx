
import './App.css'
import heroImage from './assets/hero-cooking.jpg'
import aboutImage from './assets/foodiehub-about.jpg'

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
          <h1 className="welcome-title">Welcome to <span>FoodieHub!</span></h1>
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
            <img src={heroImage} alt="Food Preparation" />
          </div>
        </section>


        {/* Second Card - About FoodieHub */}
        <section className="hero-section about-section" id="about">

          <div className="hero-text">
            <h2>Get to Know FoodieHub</h2>
            <p>
              Discover what FoodieHub is all about.
              Learn more about our passion for food,
              cooking, and sharing delicious recipes.
            </p>

            <button
              className="explore-button"
              onClick={() =>
                document.getElementById('about')?.scrollIntoView({
                  behavior: 'smooth'
                })
              }
            >
              About Us
            </button>
          </div>

          <div className="hero-image">
            <img src={aboutImage} alt="About FoodieHub" />
          </div>

        </section>

      </main>


    </div>
  )
}

export default App
