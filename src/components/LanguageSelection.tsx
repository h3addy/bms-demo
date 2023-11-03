import FilterButton from "./FilterButton";
import "../styles/LangaugeSelection.css";
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
        handleSelection([...selectedLanguages, val]);
      }
    }
  };

  return (
    <ul className="listing-wrapper">
      {listOfLanguages.map((d: string, i: number) => (
        <li key={`${d.toLowerCase()}_${i}`}>
          <FilterButton label={d} handleClick={handleLocalSelection} />
        </li>
      ))}
    </ul>
  );
};

export default LanguageSelection;
