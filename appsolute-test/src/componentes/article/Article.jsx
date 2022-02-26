import dayjs from "dayjs";
import "./article.css";

export default function Article({ articleData }) {
  const { author, title, description, url, urlToImage, publishedAt } =
    articleData;

  let date = dayjs(publishedAt).format("MM-DD-YYYY");

  return (
    <div className="articleWrapper">
      <div className="mediaWrapper">
        {urlToImage === null && (
          <img
            className="postImg"
            src={process.env.PUBLIC_URL + "/img/notFounded.png"}
            alt=""
          />
        )}
        {urlToImage !== null && (
          <img className="postImg" src={urlToImage} alt="" />
        )}
      </div>
      <div className="contentWrapper">
        <a href={url}>
          <h3 className="title">{title}</h3>
        </a>
        <div className="content">
          <span>{description}</span>
          <br />
          <div className="authorWrapper">
            <div className="authorInfo">
              <div className="fullName">{author}</div>
              <br />
              <span>{date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
