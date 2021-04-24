const SearchField = (props) => {
  return (
    <div className="container">
      <form className="d-flex align-items-center">
        <div className="form-row ">
          <div className="text-right">
            <label className="sr-only" htmlFor="inlineFormInput">
              Click your column and search{' '}
            </label>
            <input
              className="form-control form-control-lg d-flex justify-content-center mb-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={props.handleSearch}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchField;
