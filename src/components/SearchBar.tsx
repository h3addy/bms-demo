// import "../styles/SearchBar.css";

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
    <div className="serach-wrapper  w-1/3">
      <input
        type="text"
        placeholder="Search..."
        className="search-input w-full border border-[##494949] rounded-2xl p-1"
        value={searchedValue}
        onChange={handleLocalSearch}
      />
    </div>
  );
};

export default SearchBar;
