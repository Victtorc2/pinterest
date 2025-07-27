import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { searchPhotos } from "../features/posts/services/unsplashService";
import '../style/ExplorePage.css'; 

const ReferenciasPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "ideas";

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchRelatedPhotos = async () => {
      const data = await searchPhotos(query);
      setPhotos(data);
    };

    fetchRelatedPhotos();
  }, [query]);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Referencias relacionadas con "{query}"</h2>
      <div className="masonry-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="masonry-item">
            <img
              src={photo.urls.small}
              alt={photo.alt_description}
              className="img-fluid rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReferenciasPage;
