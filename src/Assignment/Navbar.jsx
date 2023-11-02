import "./Navbar.css";
import { AiFillHome } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiMessageDetail } from "react-icons/bi";
export default function Navbar() {
  return (
    <div className="nav">
      <div className="icons">
        <div>
          <AiFillHome style={{ color: "#E71A73" }} />
        </div>
        <div>
          <CgMenuGridR style={{ color: "#E71A73" }} />
        </div>
        <div>
          <CgMenuGridR style={{ color: "#E71A73" }} />
        </div>
      </div>
      <div className="search-bar">
        <input type="text" />

        <button style={{ color: "#E71A73" }}>Search</button>
      </div>
      <div className="last-icons">
        <IoIosNotificationsOutline />
        <CgMenuGridR />
        <BiMessageDetail />
        <CgMenuGridR />
      </div>
    </div>
  );
}
