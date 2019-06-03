import React from "react";
//Importovanje odredjene ikone
import { FaGoogle } from "react-icons/fa";
import { IconContext } from "react-icons";

export default props => {
  return (
    <div>
      <button
        type="button"
        className={props.klasa}
        onClick={props.onClickEvent}
      >
        {/* Ubacivanje ikone */}
        <IconContext.Provider
          value={{
            color: "red",
            className: "global-class-name",
            size: "1em",
            style: { 
            "marginRight": "10px" }
          }}
        >
          <FaGoogle />
        </IconContext.Provider>

        {props.text}
      </button>
    </div>
  );
};

//Google button
// export default props => {
//   console.log(`${props.type} button`);
//   if (props.type == "signInButton") {
//     console.log(`${props.type} button`);
//     return (
//       <div>
//         {window.gapi.signin2.render("my-signin2", {
//           scope: "email",
//           width: 240,
//           height: 50,
//           longtitle: true,
//           theme: "dark"
//           // 'onsuccess': onSuccess,
//           // 'onfailure': onFailure
//         })}
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <button
//           type="button"
//           className={props.klasa}
//           onClick={props.onClickEvent}
//         >
//           {props.text}
//         </button>
//       </div>
//     );
//   }
// };
