import "./Home.css"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="home_container">
        <Link className="malbec" to={'/'}><div>Malbec</div></Link>
        <Link className="cabernet" to={'/'}><div>Cabernet</div></Link>
        <Link className="pinot" to={'/'}><div>Pinot</div></Link>
        <Link className="chardonay" to={'/'}><div>Chardonay</div></Link>
        <Link className="blend" to={'/'}><div>Blend</div></Link>
    </div>
  )
}

export default Home