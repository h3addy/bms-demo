// import "../styles/MovieCard.css";
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
    <div className="card-container flex flex-col items-start w-full gap-6 mb-6">
      <div className="movie-image-wrapper w-full rounded-2xl relative">
        <img
          src={data.imgSrc}
          alt={data.movie_name}
          className="w-full rounded-2xl"
        />
        <div className="like-wrapper absolute left-0 bottom-0 bg-black w-full text-white rounded-b-2xl">
          {data.like}
        </div>
      </div>
      <div className="flex flex-col items-start">
        <div className="movie-name-wrapper text-lg font-medium">
          {data.movie_name}
        </div>
        <div className="movie-uacategory-wrapper text-slate-600">
          {data.uaCategory}
        </div>
        <div className="movie-language-wrapper text-slate-600 text-sm">
          {data.language}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
