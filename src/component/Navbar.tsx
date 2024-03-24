import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../store/store";
import { useEffect, useState } from "react";
import { searchUser } from "../features/userDetailSlice";

const Navbar = () => {
  const count = useSelector((state: RootState) => state.app.users);
  const [searchData, setSearchData] = useState("");
  const dispatch = useDispatch();

  console.log(searchData);

  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [dispatch, searchData]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">Redux Toolkit</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Create Post<span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/read">
              All Post ({count.length})
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control"
            value={searchData}
            onChange={(event) => setSearchData(event.target.value)}
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
