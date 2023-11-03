import "../styles/SearchBar.css";
type IProps = {
  searchedValue: string;
  handleSearch: (val: string) => void;
};
const SearchBar: React.FC<IProps> = ({
  searchedValue,
  handleSearch,
}: IProps) => {
  const handleLocalSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    handleSearch(input);
  };
  return (
    <div className="serach-wrapper">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        value={searchedValue}
        onChange={handleLocalSearch}
      />
    </div>
  );
};

export default SearchBar;
