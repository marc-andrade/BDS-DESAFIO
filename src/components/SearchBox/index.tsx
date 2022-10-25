import './styles.css';

const SearchBox = () => {
  return (
    <>
    <div className="searchbox-container">
        <div className="input-container">
          <input type="text" placeholder="Digite sua busca" />
        </div>
        <button className="btn btn-secondary">
          <h6>Buscar</h6>
        </button>
      </div>
    </>
  );
};

export default SearchBox;
