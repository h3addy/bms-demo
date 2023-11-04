import clsx from "clsx";
import FilterButton from "./FilterButton";
// import "../styles/LangaugeSelection.css";

type IProps = {
  listOfLanguages: string[];
  selectedLanguages: string[];
  handleSelection: (val: string[]) => void;
};

const LanguageSelection: React.FC<IProps> = ({
  listOfLanguages,
  selectedLanguages,
  handleSelection,
}: IProps) => {
  const handleLocalSelection = (val: string) => {
    if (selectedLanguages.length === 0) {
      handleSelection([val]);
    } else {
      if (selectedLanguages.includes(val)) {
        const filterVal = selectedLanguages.filter((d: string) => d !== val);
        handleSelection(filterVal);
      } else {
        handleSelection([val, ...selectedLanguages]);
      }
    }
  };

  return (
    <ul className="listing-wrapper flex items-center justify-start">
      {listOfLanguages.map((d: string, i: number) => (
        <li
          key={`${d.toLowerCase()}_${i}`}
          className={clsx(i === 0 ? "" : "ml-4")}
        >
          <FilterButton
            label={d}
            handleClick={handleLocalSelection}
            isSelected={selectedLanguages.includes(d)}
          />
        </li>
      ))}
    </ul>
  );
};

export default LanguageSelection;
