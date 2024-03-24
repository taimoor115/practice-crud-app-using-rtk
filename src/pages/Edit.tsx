import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../store/store";
import { User, updateUser } from "../features/userDetailSlice";

const Edit = () => {
  const { id } = useParams();
  const users = useSelector((state: RootState) => state.app.users);
  const [user, setUser] = useState<User | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser!, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (user) {
      dispatch(updateUser({ ...user }));
      navigate("/read");
    }
  };

  useEffect(() => {
    if (id) {
      const singleUser = users.find((user) => user.id.toString() === id);
      setUser(singleUser || null);
    }
  }, [id, users]);

  if (!user) return <div>Loading...</div>;

  return (
    <>
      <h3 className="text-center text-dark mt-2">Edit the data</h3>

      <form className="w-50 mx-auto my-5 text-dark" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            required
            value={user.name}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            required
            value={user.email}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            name="age"
            className="form-control"
            required
            value={user.age}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            checked={user.gender === "Male"}
            onChange={newData}
            required
          />
          <label className="form-check-label ms-2">Male</label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Female"
            checked={user.gender === "Female"}
            onChange={newData}
            type="radio"
          />
          <label className="form-check-label ms-2">Female</label>
        </div>

        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </>
  );
};

export default Edit;
