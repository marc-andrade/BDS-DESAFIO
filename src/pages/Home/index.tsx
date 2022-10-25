import './styles.css';

import CarImg from 'assets/images/car-header1.png';
import ButtonIcon from 'components/ButtonIcon';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="base-card home-card">
          <div className="home-content-container">
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
          <div className="home-image-container">
            <img src={CarImg} alt="Imagem do carro home" />
          </div>
        </div>

        <div className="home-card-bottom second-card">
          <div className="bottom-content-container">
            <div className="btn-container">
              <ButtonIcon />
            </div>
            <div>
              <p>Comece agora a navegar</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
