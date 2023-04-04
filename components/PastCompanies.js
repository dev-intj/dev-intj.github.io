import React from "react";
import data from "@data/index";

const PastCompanies = () => {
  return (
    <div className="section is-white has-text-centered">
      <div className="container">
        <div className="columns is-mobile is-vcentered">
          {data.past_companies.map((company, index) => (
            <div className="column" key={index}>
              <img className="Companies" src={company.img.src} alt={company.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastCompanies;
