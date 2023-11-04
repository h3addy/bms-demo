import clsx from "clsx";

type IProps = {
  label: string;
  handleClick: (val: string) => void;
  isSelected: boolean;
  styleObject?: React.CSSProperties;
  classNames?: string;
};
const FilterButton: React.FC<IProps> = ({
  label,
  handleClick,
  isSelected,
  styleObject,
  classNames,
}: IProps) => {
  return (
    <button
      style={styleObject}
      className={clsx(
        classNames,
        isSelected
          ? "text-white bg-red-600"
          : "bg-[#fff] border-[##494949] text-red-600",
        "border  rounded-2xl  px-4 py-1 text-sm "
      )}
      onClick={() => handleClick(label)}
    >
      {label}
    </button>
  );
};

export default FilterButton;
