import { useEffect, useState } from 'react';
import { searchPhotos } from '../features/posts/services/unsplashService';
import '../style/HomePage.css';
import Masonry from 'react-masonry-css';
import PostCard from '../features/posts/components/PostCard';

const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    900: 3,
    700: 2,
    500: 1
};

const HomePage = () => {
    const [query, setQuery] = useState('nature');
    const [results, setResults] = useState([]);

    const fetchPhotos = async () => {
        const data = await searchPhotos(query);
        setResults(data);
    };

    useEffect(() => {
        fetchPhotos();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchPhotos();
    };

    return (
        <div className="container py-4">
            <form onSubmit={handleSubmit} className="input-group mb-4 search-bar-home">
                <span className="input-group-text bg-white border-end-0">
                    <i className="bi bi-search text-muted"></i>
                </span>
                <input
                    type="text"
                    className="form-control border-start-0 rounded-end-pill shadow-sm"
                    placeholder="Buscar categoría (p. ej. moda, arte, viajes...)"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="btn btn-danger rounded-pill px-4 ms-2" type="submit">
                    Buscar
                </button>
            </form>


            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {results.map((img) => (
                    <PostCard key={img.id} post={img} />
                ))}
            </Masonry>
        </div>
    );
};

export default HomePage;
