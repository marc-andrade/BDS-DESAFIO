import { NavLink } from 'react-router-dom';
import './styles.css';


const ButtonIcon = () => {
  return (
    <div className="btn-container">
      <NavLink to="/products" activeClassName="active">
      <button className="btn btn-secondary">
        <h6>Ver catálogo</h6>
      </button>
      </NavLink>
      
    </div>
  );
};

export default ButtonIcon;