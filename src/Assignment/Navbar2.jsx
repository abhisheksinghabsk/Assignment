import "./App.css";
import { AiOutlineHome } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { BsFillRCircleFill } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { BiMessageDetail } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsLink45Deg } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
function App() {
  return (
    <>
      <div className="nav">
        <div className="icons">
          <div>
            <AiOutlineHome style={{ color: "#E71A73", fontSize: "30px" }} />
          </div>
          <div>
            <TbGridDots style={{ color: "#E71A73", fontSize: "30px" }} />
          </div>
          <div>
            <BsFillRCircleFill style={{ color: "#E71A73", fontSize: "30px" }} />
          </div>
        </div>
        {/*  */}
        <div className="search">
          <input type="text" placeholder="search here" />
          <button
            style={{
              backgroundColor: "#E71A73",
              borderRadius: "5px",
              padding: "5px",
              color: "white",
              border: "none",
              width: "100px",
            }}
          >
            Search
          </button>
        </div>
        {/*  */}
        <div className="last-icons">
          <div>
            <IoIosNotificationsOutline
              style={{ color: "#E71A73", fontSize: "30px" }}
            />
          </div>
          <div>
            <HiOutlineDocumentDuplicate
              style={{ color: "#E71A73", fontSize: "30px" }}
            />
          </div>
          <div>
            <BiMessageDetail style={{ color: "#E71A73", fontSize: "30px" }} />
          </div>
          <div>
            <CgProfile style={{ color: "#E71A73", fontSize: "30px" }} />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="main">
        <div
          className="sidebar"
          style={{ width: "50px", height: "100%", backgroundColor: "#5C5C5C" }}
        >
          <div className="pink" style={{ backgroundColor: "#E71A73" }}>
            <div>
              <GiHamburgerMenu style={{ color: "white", fontSize: "30px" }} />
            </div>
            <div>
              <BsLink45Deg style={{ color: "white", fontSize: "30px" }} />
            </div>
          </div>
          <div className="gray" style={{ backgroundColor: "#272C33" }}>
            <div>
              <AiOutlineCalendar style={{ color: "white", fontSize: "30px" }} />
            </div>
          </div>
          <div className="slate" style={{ backgroundColor: "#5C5C5C" }}>
            <div>
              <BsLink45Deg style={{ color: "white", fontSize: "30px" }} />
            </div>
            <div>
              <BsLink45Deg style={{ color: "white", fontSize: "30px" }} />
            </div>
            <div>
              <BsLink45Deg style={{ color: "white", fontSize: "30px" }} />
            </div>
            <div>
              <BsLink45Deg style={{ color: "white", fontSize: "30px" }} />
            </div>
            <div>
              <BsLink45Deg style={{ color: "white", fontSize: "30px" }} />
            </div>
            <div>
              <BsLink45Deg style={{ color: "white", fontSize: "30px" }} />
            </div>
            <div>
              <BsLink45Deg style={{ color: "white", fontSize: "30px" }} />
            </div>
            <div>
              <BsLink45Deg style={{ color: "white", fontSize: "30px" }} />
            </div>
            <div>
              <BsLink45Deg style={{ color: "white", fontSize: "30px" }} />
            </div>
          </div>
        </div>
        <div className="content">
          <div>
            <h1>Pulse</h1>
          </div>
          <div className="banner">
            <div className="card">
              <div className="name">
                <div className="image">
                  <img src="/logo192.png" className="profile" alt="img" />
                </div>
                <div>
                  <h2>Tanuja Pandey</h2>
                </div>
                <p>Software Developer</p>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
