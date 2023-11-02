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
              <div
                style={{
                  display: "flex",
                  gap: "3px",
                  flexDirection: "row-reverse",
                }}
              >
                <button
                  style={{
                    padding: "10px",
                    border: "none",
                    backgroundColor: "#e9eaee",
                    borderRadius: "20px",
                    marginTop: "30px",
                    marginRight: "20px",
                  }}
                >
                  0 grop{" "}
                </button>
                <button
                  style={{
                    padding: "10px",
                    border: "none",
                    backgroundColor: "#e9eaee",
                    borderRadius: "20px",
                    marginTop: "30px",
                    marginRight: "20px",
                  }}
                >
                  {" "}
                  85 Followers
                </button>
                <button
                  style={{
                    padding: "10px",
                    border: "none",
                    backgroundColor: "#e9eaee",
                    borderRadius: "20px",
                    marginTop: "30px",
                    marginRight: "20px",
                  }}
                >
                  {" "}
                  34 Following
                </button>
              </div>
              <div
                style={{
                  backgroundColor: "#e9eaee",
                  width: "100%",
                  height: "1px",
                  marginTop: "35px",
                  marginBottom: "25px",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                <button
                  style={{
                    width: "123px",
                    height: "35px",
                    borderRadius: "20px",
                  }}
                >
                  {" "}
                  Gruops
                </button>
                <button
                  style={{
                    width: "123px",
                    height: "35px",
                    borderRadius: "20px",
                  }}
                >
                  {" "}
                  Gruops
                </button>
              </div>
            </div>

            <div className="card" style={{ marginTop: "20px" }}>
              <div className="name">
                <div>
                  <h2>Group & Follower Details</h2>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "3px",
                  flexDirection: "row-reverse",
                }}
              >
                <button
                  style={{
                    padding: "10px",
                    border: "none",
                    backgroundColor: "#e9eaee",
                    borderRadius: "20px",
                    marginTop: "30px",
                    marginRight: "20px",
                  }}
                >
                  Followers{" "}
                </button>
                <button
                  style={{
                    padding: "10px",
                    border: "none",
                    backgroundColor: "#e9eaee",
                    borderRadius: "20px",
                    marginTop: "30px",
                    marginRight: "20px",
                  }}
                >
                  {" "}
                  Following{" "}
                </button>
                <button
                  style={{
                    padding: "10px",
                    border: "none",
                    backgroundColor: "#e9eaee",
                    borderRadius: "20px",
                    marginTop: "30px",
                    marginRight: "20px",
                  }}
                >
                  Groups{" "}
                </button>
              </div>
              <div
                style={{
                  backgroundColor: "#dedfe3",
                  width: "100%",
                  height: "1px",
                  marginTop: "35px",
                  marginBottom: "25px",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  backgroundColor: "#f0f0f0",
                  justifyContent: "space-around",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                <div className="search">
                  <input
                    style={{ width: "297px", height: "36px" }}
                    type="text"
                    placeholder="search"
                  />
                  <button
                    style={{
                      backgroundColor: "#000000",
                      borderRadius: "5px",
                      padding: "5px",
                      color: "white",
                      border: "none",
                      width: "34px",
                      height: "34px",
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="name">
                <div className="image">
                  <img src="/logo192.png" className="profile" alt="img" />
                </div>
                <div>
                  <h2>Tanuja Pandey</h2>
                  <p>Software Developer</p>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#e9eaee",
                  width: "100%",
                  height: "1px",
                  marginTop: "35px",
                  marginBottom: "25px",
                }}
              ></div>
              <div className="name">
                <div className="image">
                  <img src="/logo192.png" className="profile" alt="img" />
                </div>
                <div>
                  <h2>Tanuja Pandey</h2>
                  <p>Software Developer</p>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#e9eaee",
                  width: "100%",
                  height: "1px",
                  marginTop: "35px",
                  marginBottom: "25px",
                }}
              ></div>
              <div className="name">
                <div className="image">
                  <img src="/logo192.png" className="profile" alt="img" />
                </div>
                <div>
                  <h2>Tanuja Pandey</h2>
                  <p>Software Developer</p>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#e9eaee",
                  width: "100%",
                  height: "1px",
                  marginTop: "35px",
                  marginBottom: "25px",
                }}
              ></div>
              <div className="name">
                <div className="image">
                  <img src="/logo192.png" className="profile" alt="img" />
                </div>
                <div>
                  <h2>Tanuja Pandey</h2>
                  <p>Software Developer</p>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#e9eaee",
                  width: "100%",
                  height: "1px",
                  marginTop: "35px",
                  marginBottom: "25px",
                }}
              ></div>
            </div>
            {/*  */}
          </div>
          <div className="container">
            <div>g</div>
          </div>
          <div className="container1">
            <div>h1</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;

// import "./App.css";
// import { AiOutlineHome } from "react-icons/ai";
// import { TbGridDots } from "react-icons/tb";
// import { BsFillRCircleFill } from "react-icons/bs";
// import { IoIosNotificationsOutline } from "react-icons/io";
// import { HiOutlineDocumentDuplicate } from "react-icons/hi";
// import { BiMessageDetail } from "react-icons/bi";
// import { CgProfile } from "react-icons/cg";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { BsLink45Deg } from "react-icons/bs";
// import { AiOutlineCalendar } from "react-icons/ai";
// function App() {
//   return (
//     <>
//       <div className="nav">
//         <div className="icons">
//           <div>
//             <AiOutlineHome style={{ color: "#E71A73", fontSize: "30px" }} />
//           </div>
//           <div>
//             <TbGridDots style={{ color: "#E71A73", fontSize: "30px" }} />
//           </div>
//           <div>
//             <BsFillRCircleFill style={{ color: "#E71A73", fontSize: "30px" }} />
//           </div>
//         </div>
//         {/*  */}
//         <div className="search">
//           <input type="text" placeholder="search here" />
//           <button
//             style={{
//               backgroundColor: "#E71A73",
//               borderRadius: "5px",
//               padding: "5px",
//               color: "white",
//               border: "none",
//               width: "100px",
//             }}
//           >
//             Search
//           </button>
//         </div>
//         {/*  */}
//         <div className="last-icons">
//           <div>
//             <IoIosNotificationsOutline
//               style={{ color: "#E71A73", fontSize: "30px" }}
//             />
//           </div>
//           <div>
//             <HiOutlineDocumentDuplicate
//               style={{ color: "#E71A73", fontSize: "30px" }}
//             />
//           </div>
//           <div>
//             <BiMessageDetail style={{ color: "#E71A73", fontSize: "30px" }} />
//           </div>
//           <div>
//             <CgProfile style={{ color: "#E71A73", fontSize: "30px" }} />
//           </div>
//         </div>
//       </div>
//       {/*  */}
//       <div className="main">
//         <div
//           className="sidebar"
//           style={{ width: "50px", height: "100%", backgroundColor: "#5C5C5C" }}
//         >
//           <div className="pink" style={{ backgroundColor: "#E71A73" }}>
//             <div>
//               <GiHamburgerMenu style={{ color: "white", fontSize: "30px" }} />
//             </div>
//             <div>
//               <BsLink45Deg style={{ color: "white", fontSize: "30px" }} />
//             </div>
//           </div>
//           <div className="gray" style={{ backgroundColor: "#272C33" }}>
//             <div>
//               <AiOutlineCalendar style={{ color: "white", fontSize: "30px" }} />
//             </div>
//           </div>
//           <div className="slate" style={{ backgroundColor: "#5C5C5C" }}>
//             <div>
//               <BsLink45Deg style={{ color: "white", fontSize: "30px" }} />
//             </div>
//             <div>
//               <BsLink45Deg style={{ color: "white", fontSize: "30px" }} />
//             </div>
//             <div>
//               <BsLink45Deg style={{ color: "white", fontSize: "30px" }} />
//             </div>
//             <div>
//               <BsLink45Deg style={{ color: "white", fontSize: "30px" }} />
//             </div>
//             <div>
//               <BsLink45Deg style={{ color: "white", fontSize: "30px" }} />
//             </div>
//             <div>
//               <BsLink45Deg style={{ color: "white", fontSize: "30px" }} />
//             </div>
//             <div>
//               <BsLink45Deg style={{ color: "white", fontSize: "30px" }} />
//             </div>
//             <div>
//               <BsLink45Deg style={{ color: "white", fontSize: "30px" }} />
//             </div>
//             <div>
//               <BsLink45Deg style={{ color: "white", fontSize: "30px" }} />
//             </div>
//           </div>
//         </div>
//         <div className="content">
//           <div>
//             <h1>Pulse</h1>
//           </div>
//           <div className="banner">
//             <div className="card">
//               <div className="name">
//                 <div className="image">
//                   <img src="/logo192.png" className="profile" alt="img" />
//                 </div>
//                 <div>
//                   <h2>Tanuja Pandey</h2>
//                 </div>
//                 <p>Software Developer</p>
//               </div>
//             </div>
//             {/*  */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default App;

// // import { TbMathIntegral } from "react-icons/tb";
// import "./App.css";
// import Navbar from "./Assignment/Navbar";
// import Sidebar from "./Assignment/Sidebar";
// import Card1 from "./Assignment/Card1";
// import Card2 from "./Assignment/Card2";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Sidebar />
//       <Card1 />
//       <Card2 />
//     </div>
//   );
// }

// export default App;
