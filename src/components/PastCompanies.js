import React from "react";
import data from "../data";


const PastCompanies = () => {
    return (
        < div className="section is-white has-text-centered" >
            <div className="container">
                <div className="columns is-mobile is-vcentered">

                    {data.past_companies.map((company, index) => (
                        <div className="column" key={index}>
                            <img className="Companies" src={company.img} alt={company.alt} />
                        </div>
                    ))}

                </div>
            </div>
        </div >
    )
}
export default PastCompanies;