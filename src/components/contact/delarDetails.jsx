import React from "react";
import "../../styles/contact/delarDetails.css";
const DealerDetails = () => {
  const dealers = [
    {
      shop_name: "Mozaffnagar Dealer",
      name: "Mayur interior",
      firmName: " Mohd Mohasin",
      address: "Near Balaji dham, Mozaffnagar",
      phoneNumber: "+91 9058545024",
    },
    {
      shop_name: "Haridwar Dealer",
      name: "Lakhan Singh",
      firmName: " Rajasthan P.O.P Traders",
      address: " Shop no-12, kumhar dharamshala, Jwalapur (Haridwar)",
      phoneNumber: "+91 9837263625, +91 9837263625",
    },
    {
      shop_name: "Saharanpur Dealer",
      name: "Arpit Bansal",
      firmName: " Shree Balaji trading co. ",
      address: "Behat road Saharanpur",
      phoneNumber: "+91 9808924046",
    },
  ];

  return (
    <div>
      <div className="dealer_details_text">Dealer Details</div>
      <div className="main_dealer_details_div">
        {dealers.map((dealer, index) => (
          <div className="dealer-details">
            <div className="dealer" key={index}>
              <h3 className="dealer_name">{dealer.shop_name}</h3>
              <p>
                <strong>Dealer Name:</strong> {dealer.name}
              </p>

              <p>
                <strong>Firm Name:</strong> {dealer.firmName}
              </p>
              <p>
                <strong>Address:</strong> {dealer.address}
              </p>
              <p>
                <strong>Phone Number:</strong> {dealer.phoneNumber}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealerDetails;
