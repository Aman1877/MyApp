import { useContext } from "react";
import { UserContext } from "../context/authContext";

const NavBar = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <div>
        <p>E-Commerce</p>
      </div>
      <div className="flex border-2 border-gray-200 rounded">
        <input type="text" className="px-4 py-2 w-80" placeholder="Search..." />
        <button className="px-4 text-white bg-gray-600 border-l ">
          Search
        </button>
      </div>
      <div className="rounded-full">
        <img
          src={`https://ui-avatars.com/api/?background=random&name=${user.userName}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default NavBar;
