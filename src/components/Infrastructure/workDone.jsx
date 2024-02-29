import React from "react";
import "../../styles/infrastructure/WorkDone.css";
import OrangeShape from "../../Images/infrastructure/Star 1.png";
import Person_Image from "../../Images/infrastructure/Winner.png";
import member_Image from "../../Images/infrastructure/Business Group.png";
import Maintenance from "../../Images/infrastructure/Maintenance.png";
function WorkDone() {
  const details = [
    {
      image: Person_Image,
      name: "Happy Customers",
      number: "500",
    },
    {
      image: Maintenance,
      name: "Work Done",
      number: "100+",
    },
    {
      image: member_Image,
      name: "Team Member",
      number: "120+",
    },
  ];
  return (
    <>
      <div className="work_done_main_div">
        {/* center image */}
        {/* <div className="d-flex justify-content-around align-items-center " > */}
        {/* image */}
        {details.map((data, index) => (
          <div
            className="orange_shape"
            data-aos="flip-up"
            data-aos-offset="100"
            data-aos-delay="400"
            data-aos-duration="1200"
          >
            <div className="orange_shape_image_div">
              <img
                src={OrangeShape}
                alt=""
                srcset=""
                className="orange_shape_work_done"
              />
              <div className="work_done_details">
                {/* image */}
                <div>
                  <img
                    src={data.image}
                    alt="Work_Image"
                    className="work_done_person_image"
                  />
                </div>
                {/* name */}
                <div className="name_work_done ">{data.name}</div>
                <div className="name_work_done">{data.number}</div>
              </div>
            </div>
          </div>
        ))}

        {/* </div> */}
      </div>
    </>
  );
}

export default WorkDone;
