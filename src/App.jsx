import Navbar from "./components/Navbar"
import Contact from "./components/Contact"
import Home from "./components/Home"
import About from "./components/About"
import Destination from "./components/Destination"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/destination" element={<Destination />} />
        </Routes>
    </>
  )
}

export default App