import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const logoLink = `https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png`;

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target[0].value;
    navigate({ pathname: '/search', search: `query=${searchValue}` });
  }

  return (
    <>
      <header className="header">
        <Link to="/">
          <img src={logoLink} alt="netflix-font" border="0" />
        </Link>
        <div id="navigation" className="navigation">
          <nav>
            <ul>
              <li><Link to="/my-watch-list">Watch List</Link></li>
            </ul>
          </nav>
        </div>
        <form onSubmit={handleSearch} id="search" className="search">
          <input type="search" placeholder="Search for a title..." />
          <div className="searchResults"></div>
        </form>
      </header>
    </>
  )
}
