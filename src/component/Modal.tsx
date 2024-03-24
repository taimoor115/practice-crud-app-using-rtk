import { useSelector } from "react-redux";
import "./Modal.css";
import { RootState } from "../store/store";

interface Props {
  id: number;
  showPopUp: boolean;
  setShowPopUp: (showPopUp: boolean) => void;
}
const Modal = ({ id, showPopUp, setShowPopUp }: Props) => {
  const data = useSelector((state: RootState) => state.app.users);

  const singleUser = data.filter((user) => user.id === id);
  console.log(singleUser);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        {singleUser.map((user) => (
          <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>

            <button onClick={() => setShowPopUp(!showPopUp)}>Close</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modal;
