import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../style/CrearPage.css';

const CrearPage = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
    board: "",
    tags: "",
    file: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      const file = files[0];
      setFormData({ ...formData, file });
      setImagePreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Publicación creada:", formData);
    alert("¡Pin creado exitosamente!");
    navigate("/explorar");
  };

  return (
    <div className="crear-container">
      <h2 className="crear-title">Crear Pin</h2>
      <form className="crear-form" onSubmit={handleSubmit}>
        <div className="image-upload">
          {imagePreview ? (
            <img src={imagePreview} alt="Vista previa" />
          ) : (
            <label className="upload-box">
              <span>Sube una imagen</span>
              <input type="file" name="file" accept="image/*" onChange={handleChange} />
            </label>
          )}
        </div>

        <input
          type="text"
          name="title"
          placeholder="Agrega un título"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Agrega una descripción detallada"
          value={formData.description}
          onChange={handleChange}
          rows="4"
        />

        <input
          type="text"
          name="link"
          placeholder="Agrega un enlace (opcional)"
          value={formData.link}
          onChange={handleChange}
        />

        <select name="board" value={formData.board} onChange={handleChange} required>
          <option value="">Selecciona un tablero</option>
          <option value="inspiracion">Inspiración</option>
          <option value="recetas">Recetas</option>
          <option value="moda">Moda</option>
          <option value="manualidades">Manualidades</option>
        </select>

        <input
          type="text"
          name="tags"
          placeholder="Agrega etiquetas separadas por coma"
          value={formData.tags}
          onChange={handleChange}
        />

        <button type="submit">Publicar Pin</button>
      </form>
    </div>
  );
};

export default CrearPage;
