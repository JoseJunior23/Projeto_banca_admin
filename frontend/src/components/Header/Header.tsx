import { Link } from "react-router-dom";
import "./styles.scss";
export function Header() {
  return (
    <div className="content">
      <div className="logo">
        <h3>Banca_admin</h3>
      </div>
      <div className="btn">
      <Link to="/">
          <button>Pagina Principal</button>
        </Link>
      </div>
    </div>
  );
}