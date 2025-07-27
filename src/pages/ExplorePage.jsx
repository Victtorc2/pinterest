import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchPhotos } from "../features/posts/services/unsplashService";
import '../style/ExplorePage.css'; 

const ExplorePage = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExplorePhotos = async () => {
      try {
        setLoading(true);
        const data = await searchPhotos("popular");
        setPhotos(data);
      } catch (error) {
        console.error("Error al cargar imágenes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExplorePhotos();
  }, []);

  const handleClick = (photo) => {
    navigate(`/referencias/${photo.id}?query=${photo.alt_description || "related"}`);
  };

  return (
    <div className="explore-container py-4">
      <h2 className="text-center fw-bold mb-4">Explorar ideas populares</h2>

      {loading ? (
        <p className="text-center">Cargando imágenes...</p>
      ) : (
        <div className="masonry">
          {photos.map((photo) => (
            <div key={photo.id} className="masonry-item" onClick={() => handleClick(photo)}>
              <img
                src={photo.urls.small}
                alt={photo.alt_description}
              />
              <div className="image-description">
                {photo.alt_description || "Ver más ideas similares"}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExplorePage;
