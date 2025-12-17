import { useEffect } from "react";
import loadBackgroudImages from "./loadBackgroudImages";
import { Link } from "react-router-dom";

const BreadCumb = ({Title,bgimg}) => {
    
    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (

      <div className="breadcumb-section fix">
      <div className="breadcumb-container-wrapper" data-background={bgimg}>
          <div className="container">
              <div className="breadcumb-wrapper">
                  <div className="page-heading">
                      <h1>{Title}</h1>
                      <div className="links">
                      <Link to="/">Home<span className="slash">/</span></Link>{Title}
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>


    );
};

export default BreadCumb;