import '../../../style/PostCard.css';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <img
        src={post.urls.small}
        alt={post.alt_description}
        className="post-image"
      />
      <div className="post-overlay">
        <button className="save-button">Guardar</button>
      </div>
    </div>
  );
};

export default PostCard;
