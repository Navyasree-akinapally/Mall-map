import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Categories from './component/categories'
import Contactinfo from './component/contactinfo'
import Login from './component/login'
import Reviews from './component/reviews'
import Signup from './component/signup'
import Mall from './component/malllocation'
import Malllist from './component/malllist'
import Search from './component/search'
import Timing from './component/timing'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <nav className="bg-white bg-opacity-20 backdrop-blur-lg shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center h-16">
              <ul className="flex space-x-4">
                {[
                  { to: "/signup", text: "Signup" },
                  { to: "/login", text: "Login" },
                  { to: "/search", text: "Search" },
                  { to: "/malllist", text: "Mall List" },
                  { to: "/mall", text: "Mall Location" },
                  { to: "/categories", text: "Categories" },
                  { to: "/contact", text: "Contact Info" },
                  { to: "/timing", text: "Timing" },
                  { to: "/reviews", text: "Reviews" },
                ].map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-white hover:text-gold-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-110 hover:bg-opacity-50 hover:bg-gold-500"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={<Search />} />
            <Route path="/malllist" element={<Malllist />} />
            <Route path="/mall" element={<Mall />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/contact" element={<Contactinfo />} />
            <Route path="/timing" element={<Timing />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App