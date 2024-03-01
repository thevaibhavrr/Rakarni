import React from "react";
import "../../styles/contact/delarDetails.css";
const DealerDetails = () => {
  const dealers = [
    {
      shop_name: "Mozaffnagar Dealer",
      name: "Mohd Mohasin ",
      firmName: " Mayur interior",
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
    {
      shop_name: "Firozabad Dealer",
      name: "Amit Yadav",
      firmName: " Shri Giriraj Traders ",
      address: "Statioin road, Firozabad",
      phoneNumber: "+91 94123 16831",
    },
    {
      shop_name: "Lucknow Dealer",
      name: "Aditya Saxena",
      firmName: " Aaditya Enterprises ",
      address: "13/7065, C - Block , Rajajipuram, Lucknow -17",
      phoneNumber: "+91 92059 72779, +91 86040 46674",
    },
    {
      shop_name: "Etawah Dealer",
      name: "Rajkumar Chuhan",
      firmName: " DEEKSHA POP ",
      address: "Pakka bagh, main kanpur road, Etawah, Uttar pardesh",
      phoneNumber: "+91 88592 74297",
    },
    {
      shop_name: "Auraiya Dealer",
      name: "Sharad porwal",
      firmName: " GURUDYAL PARSAD SANTOSH KUMAR AND SONS ",
      address: "Tilak nagar, tilak marcket, Auriya, Uttar pardesh",
      phoneNumber: "+91 95286 18183",
    },
    {
      shop_name: "Kanpur Dealer",
      name: "Sandeep rajpal",
      firmName: " DAlPHIN IND. ",
      address: "PLOT NO 4 vyapar nagar ispat nagar kanpur, Uttar pardesh",
      phoneNumber: "+91 98393 24547 ",
    },
  ];

  return (
    <div>
      <div className="dealer_details_text">Our Dealer</div>
      <div className="main_dealer_details_div"
       data-aos="zoom-in"
       data-aos-offset="100"
       data-aos-delay="400"
       data-aos-duration="1200"
      >
        {dealers.map((dealer, index) => (
          <div className="dealer-details"
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-delay="400"
          data-aos-duration="1200"
          >
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
