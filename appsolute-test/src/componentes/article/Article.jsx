// import "./post.css";

export default function Article({ articleData}) {
    
    const {
        author,
        title,
        description,
        url,
        urlToImage,
        publishedAt,
        content,
    } = articleData;

  return ( <div className="postWrapper">
  <div className="postCenter">
    <div className="postMedia">
      {urlToImage != null && (
        <img className="postImg" src={urlToImage} alt="" />
      )}
    </div>
    <div className="postText">
      <h6 className="postTitle">{title}</h6>
      {content}
    </div>
    <div className="postDate">
      {author}
    </div>
  </div>
  <div className="postBottom">
  </div>
</div>
);
}
