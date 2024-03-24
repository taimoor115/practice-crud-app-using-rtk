import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../component/Modal";
import { readUser, deleteUser } from "../features/userDetailSlice";
import { RootState } from "../store/store";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state: RootState) => state.app);
  const [id, setId] = useState(-1);
  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    dispatch(readUser());
  }, [dispatch]);

  if (loading) return <h2>Loading.....</h2>;
  return (
    <>
      <h3 className="text-center text-primary">ALL Data</h3>
      {popUp && <Modal id={id} showPopUp={popUp} setShowPopUp={setPopUp} />}
      {users &&
        users.map((user) => (
          <div key={user.id} className="w-50 mx-auto p-4">
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
