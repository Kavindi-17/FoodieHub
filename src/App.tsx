
import './App.css'

function App() {
  return (
    <div className="app-container">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="logo">
          <h1>FoodieHub</h1>
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
        <h1>Welcome to FoodieHub!</h1>
        <p>Your favourite place for delicious recipes.</p>
      </main>

    </div>
  )
}

export default App
