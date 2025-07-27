import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../style/Search.css';
const Navbar = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim()) {
            navigate(`/explore?q=${encodeURIComponent(search)}`);
            setSearch('');
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
            <div className="container-fluid">
                
                <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
                        alt="Pinterest logo"
                        width="40"
                        height="40"
                        className="me-2"
                    />

                    Pinterest
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav me-3 mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/explore">Explorar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/create">Crear</Link>
                        </li>
                    </ul>

                    <form className="d-flex mx-auto buscador-navbar" onSubmit={handleSearch}>
                        <div className="input-group">
                            <span className="input-group-text bg-white border-end-0">
                                <i className="bi bi-search text-muted"></i>
                            </span>
                            <input
                                className="form-control border-start-0 rounded-end-pill shadow-sm"
                                type="search"
                                placeholder="Buscar ideas, recetas, decoración..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                style={{ minWidth: '300px' }}
                            />
                        </div>
                    </form>


                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-3">
                            <button className="btn btn-outline-secondary rounded-circle">
                                <i className="bi bi-bell"></i>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-secondary rounded-circle">
                                <i className="bi bi-person-circle"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
