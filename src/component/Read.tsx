import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readUser } from "../features/userDetailSlice";
import { RootState } from "../store/store";

const Read = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state: RootState) => state.app);
  console.log(users);

  useEffect(() => {
    dispatch(readUser());
  }, [dispatch]);

  if (loading) return <h2>Loading.....</h2>;
  return (
    <>
      <h3 className="text-center text-primary">ALL Data</h3>
      {users &&
        users.map((user) => (
          <div className="w-50 mx-auto p-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.email}</p>
                <p>{user.age}</p>
                <p className="card-link">{user.gender}</p>
                <a href="" className="card-link">View</a>
                <a href="" className="card-link">Edit</a>
                <a href="" className="card-link">Delete</a>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Read;
