
import { Link } from 'react-router-dom';

export const Navbar = () => {

    return (
        <nav>
            <h3>navbar</h3>
            <h6>com o Link você muda de página sem o reload</h6>
            <Link to="/">Home</Link>
            <Link to="/contact"> Contatos</Link>
            <Link to="/details/1"> Detalhes</Link>
            <br/><br/><br/>
            <h6>sem o Link o reload de página ocorre</h6>
            <a href="/">Home</a>
            <a href="/contact"> Contatos</a>
            <a href="/details/1"> Detalhes</a>
        </nav>
    )
}
