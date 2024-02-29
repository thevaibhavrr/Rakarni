import React from 'react';
import "../../styles/contact/delarDetails.css"
const DealerDetails = () => {
  const dealers = [
    {
      name: "Mayur interior",
      firmName: " Mohd Mohasin",
      address: "Near Balaji dham, Mozaffnagar",
      phoneNumber: "9058545024"
    },
    {
      name: "Lakhan Singh",
      firmName: " Haridwar  dealer",
      address: " Rajasthan pop",
      phoneNumber: "9837263625",
    },
    {
      name: "Shree Balaji trading co.",
      firmName: "Behat road Saharanpur",
      address: "Arpit Bansal",
      phoneNumber: "9808924046" 
    }
  ];

  return (
    <div className="dealer-details">
      <div  className='dealer_details_text' >Dealer Details</div>
      
      {dealers.map((dealer, index) => (
        <div className="dealer" key={index}>
          <h3 className='dealer_name' >{dealer.name}</h3>
          <p><strong>Firm Name:</strong> {dealer.firmName}</p>
          <p><strong>Address:</strong> {dealer.address}</p>
          <p><strong>Phone Number:</strong> {dealer.phoneNumber}</p>
        </div>
      ))}
    </div>
  );
};

export default DealerDetails;
