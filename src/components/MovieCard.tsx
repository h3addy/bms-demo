import "../styles/MovieCard.css";
type IProps = {
  data: {
    id: number;
    movie_name: string;
    like: string;
    imgSrc: string;
    uaCategory: string;
    language: string;
  };
};
const MovieCard: React.FC<IProps> = ({ data }: IProps) => {
  return (
    <div className="card-container">
      <div className="movie-image-wrapper">
        <img src={data.imgSrc} alt={data.movie_name} />
        <div className="like-wrapper">{data.like}</div>
      </div>
      <div className="movie-name-wrapper">{data.movie_name}</div>
      <div className="movie-uacategory-wrapper">{data.uaCategory}</div>
      <div className="movie-language-wrapper">{data.language}</div>
    </div>
  );
};

export default MovieCard;
