type IProps = {
  label: string;
  handleClick: (val: string) => void;
  styleObject?: React.CSSProperties;
  classNames?: string;
};
const FilterButton: React.FC<IProps> = ({
  label,
  handleClick,
  styleObject,
  classNames,
}: IProps) => {
  return (
    <button
      style={styleObject}
      className={`${classNames}`}
      onClick={() => handleClick(label)}
    >
      {label}
    </button>
  );
};

export default FilterButton;
