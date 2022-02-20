import "./article.css";

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
    <div className="articleMedia">
      {urlToImage != null && (
        <img className="articleImg" src={urlToImage} alt="" />
      )}
    </div>
    <div className="articleText">
      <h6 className="articleTitle">{title}</h6>
      {description}
    </div>
    <div className="articleDate">
      {author}
      {publishedAt}
    </div>
</div>
);
}
