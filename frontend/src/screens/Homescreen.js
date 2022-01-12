// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Loader from "../components/Loader";
// import Room from "../components/Room";

// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Navbar from "./Navbar";
// import request from "../Request";
// AOS.init();

// function Homescreen() {
//   const [hotels, sethotels] = useState([]);
//   const [duplicatehotes, setduplicatehotes] = useState([]);
//   const [data, setdata] = useState([])
//   const [loading, setloading] = useState(false);
//   const [type, settype] = useState('all')

//   useEffect(async () => {
//     try {
//       setloading(true);
//       const rooms = await (await axios.get("/api/rooms/getallrooms")).data;
//       console.log(rooms);
//       sethotels(rooms);
//       setduplicatehotes(rooms)
//       setdata(rooms)
//       setloading(false);
//     } catch (error) {
//       console.log(error);
//       setloading(false);
//     }
//   }, []);
//   // function filterByType(e)
//   // {
//   //   settype(e)
//   //   if(e!=='all'){
//   //     const dupdate = duplicatehotes.filter(room=>room.type.toLowerCase().includes(e.toLowerCase()))
//   //     sethotels(dupdate)
//   //   }
//   //   else{
//   //     sethotels(duplicatehotes)
//   //   }

//   // }


//   return (

//     <div className="mt">
//       <Navbar />
//       <div className="container">
//         <div className="row bs p-3 m-5  justify-content-center">
//           <div className="col-md-4 ">
//             <select className="form-control m-2 " value={type} onChange={(e) => (e.target.value)} >

//               {/* <option value="all">All</option>
//               <option value="delux">Delux</option>
//               <option value="Basic">Basic</option> */}
//               <option value="all">All</option>
//               <option  fetchUrl={request.fetchBasic}/>
//               <option  fetchUrl={request.fetchDelux}/>
//               <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//               <a class="dropdown-item" href="/profile">Profile</a>
//             </div>
//             </select>
//           </div>
//         </div>
//       </div>
//       <div className="row justify-content-center">
//         {loading ? (
//           <Loader />
//         ) : (
//           hotels.map((room) => {
//             return (
//               <div className="col-md-8" data-aos='zoom-in'>
//                 <Room room={room} />
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// }

// export default Homescreen;




import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Room from "../components/Room";

import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./Navbar";
AOS.init();

function Homescreen() {
  const [hotels, sethotels] = useState([]);
  const [duplicatehotes, setduplicatehotes] = useState([]);
  const [data, setdata] = useState([])
  const [loading, setloading] = useState(false);
  const [searchkey, setsearchkey] = useState('')
  const [type, settype] = useState('all')


  useEffect(async () => {
    try {
      setloading(true);
      const rooms = await (await axios.get("/api/rooms/getallrooms")).data;
      console.log(rooms);
      sethotels(rooms);
      setduplicatehotes(rooms)
      setdata(rooms)
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  }, []);
  function filterBysearch() {
    const temprooms = duplicatehotes.filter(room => room.name.toLowerCase().includes(searchkey.toLowerCase()))
    sethotels(temprooms);
  }
  function filterByType(e) {
    settype(e)
    if (e !== 'all') {
      const dupdate = duplicatehotes.filter(room => room.type.toLowerCase().includes(e.toLowerCase()))
      sethotels(dupdate)
    }
    else {
      sethotels(duplicatehotes)
    }

  }


  return (

    <div className="mt">
      <Navbar />
      <div className="container">
        <div className="row bs p-3 m-5  justify-content-center">
          <div >
            <select className="form-control m-2  " value={type} onChange={(e) => { filterByType(e.target.value) }} >

              <option value="all">All</option>
              <option value="delux">Delux</option>
              <option value="Basic">Basic</option>

            </select>
          </div>
          <div >
            <input type="text" className="form-control m-2" placeholder="search rooms" value={searchkey} onChange={(e) => { setsearchkey(e.target.value) }} onKeyUp={filterBysearch} />
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? (
          <Loader />
        ) : (
          hotels.map((room) => {
            return (
              <div className="col-md-8" data-aos='zoom-in'>
                <Room room={room} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Homescreen;