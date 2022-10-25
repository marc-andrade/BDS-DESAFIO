import './styles.css'

import CatalogImg from 'assets/images/catalog-img.png';

const ProductCard = () => {
  return (
    <>
      <div className="second-card product-card">
        <img src={CatalogImg} alt="Imagem de Catálogo" />
        <div className="card-container">
          <h6>Audi Supra TT</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
        </div>
        <button className="btn btn-secondary">
          <h6>Comprar</h6>
        </button>
      </div>
    </>
  );
};

export default ProductCard;
