const SearchField = (props) => {
  console.log('PROPS In the search field', props);
  return (
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={props.handleSearch}
      />
      {/* <button
  className="btn btn-outline-success my-2 my-sm-0"
  type="submit"
>
  Search
</button> */}
    </form>
  );
};

export default SearchField;
