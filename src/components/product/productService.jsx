import React from "react";
import "../../styles/product/ProductService.css";
function ProductService() {
  return (
    <>
      <div className="main_product_service_div">
        {/* 1 */}
        <div className="product_service_div">
          {/* heading */}
          <div className="product_service_heading" >Surface Preparation</div>
          {/* message */}
          <div  className="product_service_message" >
            <ul>
              <li>Clean surface from dust, oil, and impurities.</li>
              <li>Prepare wall with hacking or use Sakarni plaster bond.</li>
              <li>Check wall alignment and remove any undulations.</li>
              <li>
                Clean surface with water and let it dry before application.
              </li>
            </ul>
          </div>
        </div>
        {/* 2 */}
        <div className="product_service_div">
          {/* heading */}
          <div className="product_service_heading" >Application Procedure</div>
          {/* message */}
          <div  className="product_service_message" >
            <ul>
              <li>
                Mix gypsum plaster with water until homogeneous (70% water
                ratio).
              </li>
              <li>
                Apply plaster on wall, trowel progressively for smooth finish.
              </li>
              <li>Maintain 10-15 mm thickness.</li>
              <li>Protect surface from continuous moisture exposure.</li>
              <li>Ensure surface is fully dry before painting.</li>
            </ul>
          </div>
        </div>
        {/* 3 */}
        <div className="third_div_product_service_div">
          {/* top */}
          <div className="product_service_div">
            {/* heading */}
            <div className="product_service_heading" >Packaging</div>
            {/* message */}
            <div  className="product_service_message" >
              <ul>
                <li>
                  Moisture-proof, fully sealed, and tamper-proof packaging
                  available in 02, 25, and 40 Kg. packs.
                </li>
              </ul>
            </div>
          </div>
          {/* bottom */}
          <div className="product_service_div">
            {/* heading */}
            <div className="product_service_heading" >Storage</div>
            {/* message */}
            <div  className="product_service_message" >
              <ul>
                <li>The shelf life of the sealed pack is 6 months.</li>
                <li>Use the material before 7 days once the bag is open.</li>
                <li>The pack should be kept away from damp places and stored in a moisture-free environment.</li>
              </ul>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="product_service_div">
          {/* heading */}
          <div className="product_service_heading" >Technical Specifications</div>
          {/* message */}
          <div  className="product_service_message" >
            <ul>
              <li>Color: Off White</li>
              <li>Water/Plaster Ratio: 70-75%</li>
              <li>Setting Time: Initial - 12 min, Final - 20 min</li>
              <li>
                Strength: Flexural - Up to 3 N/mm2, Compressive - 9 N/mm2 after
                7 days
              </li>
              <li>
                Fineness: 425 micron sieve pass - 100%, 100 micron sieve pass -
                99%
              </li>
              <li>
                Stability: Withstands up to 750°C without cracking; Low content
                of Sodium Chloride (NaCl), Silica Oxide, Calcium Carbonate, and
                Iron Oxide (Fe2O3)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductService;
