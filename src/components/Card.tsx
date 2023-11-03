type IProps = {
  img: string;
  title: string;
  price: number;
};
const Card: React.FC<IProps> = ({ img, title, price }: IProps) => {
  return (
    <div className="card-wrapper">
      <img
        src={img}
        alt="product img"
        width={300}
        height={200}
        className="thumbnail"
      />
      <div className="texts">
        <p>{title}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Card;
