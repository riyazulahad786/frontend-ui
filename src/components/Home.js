import React from "react";

function Home() {
  return (
    <div>
      <div className="container ">

    
        <div className="d-flex justify-content-around logo-pos">
         
            {" "}
            <img
              className="logo-home"
              src="https://cdn.dribbble.com/users/5031392/avatars/normal/944b08efb66577ba400d5838490ea5b9.png?1597658879"
            />
           
          <span className="hide">O</span>
          
          <div>
            {" "}
            <button className="home-btn" type="button"  data-toggle="tooltip" data-placement="left" title="Send a message about work oppurinity">Work with us</button>
          </div>
        </div>
    
      </div>
    </div>
  );
}

export default Home;
