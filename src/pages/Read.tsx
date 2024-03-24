import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../component/Modal";
import { readUser, deleteUser } from "../features/userDetailSlice";
import { RootState } from "../store/store";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();
  const [radioData, setRadioData] = useState("");
  const { users, loading, searchData } = useSelector(
    (state: RootState) => state.app
  );
  const [id, setId] = useState(-1);
  const [popUp, setPopUp] = useState(false);

  console.log(searchData.length);

  useEffect(() => {
    dispatch(readUser());
  }, [dispatch]);

  if (loading) return <h2>Loading.....</h2>;
  return (
    <>
      <h3 className="text-center text-dark">All Data</h3>
      {popUp && <Modal id={id} showPopUp={popUp} setShowPopUp={setPopUp} />}
      <div className="d-flex justify-content-center ">
        <input
          className="form-check-input"
          name="gender"
          checked={radioData === ""}
          type="radio"
          onChange={() => setRadioData("")}
        />
        <label className="form-check-label me-1">All</label>
        <input
          className="form-check-input"
          name="gender"
          checked={radioData === "Male"}
          value="Male"
          type="radio"
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label className="form-check-label me-1">Male</label>
        <input
          className="form-check-input"
          name="gender"
          value="Female"
          checked={radioData === "Female"}
          type="radio"
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label className="form-check-label me-1">Female</label>
      </div>

      {users &&
        users
          .filter((user) => {
            if (searchData.length === 0) {
              return user;
            } else {
              return user.name
                .toLowerCase()
                .includes(searchData.toString().toLowerCase());
            }
          })
          .filter((user) => {
            if (radioData === "") {
              return user;
            } else if (radioData === "Male") {
              return user.gender == "Male";
            } else {
              return user.gender == "Female";
            }
          })
          .map((user) => (
            <div key={user.id} className="container">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Name: {user.name}</h5>
                  <p className="card-text">Email: {user.email}</p>
                  <p className="card-link">Gender: {user.gender}</p>
                  <button
                    className="btn btn-dark me-2"
                    onClick={() => [setId(user.id), setPopUp(true)]}
                  >
                    View
                  </button>
                  <Link to={`/edit/${user.id}`} className=" btn btn-dark">
                    Edit
                  </Link>
                  <button
                    className="btn btn-dark ms-2"
                    onClick={() => dispatch(deleteUser(user.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
    </>
  );
};

export default Read;
