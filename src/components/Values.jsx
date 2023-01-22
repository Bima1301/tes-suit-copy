import React from "react";
import "../style/style.scss";
import Card from "./Card";
import icon1 from "../assets/icon/lightbulb-o.png";
import icon2 from "../assets/icon/bank.png";
import icon3 from "../assets/icon/balance-scale.png";
const Value = () => {
  return (
    <div>
      <h2
        className="text-center mb-4"
        style={{ fontWeight: "700", marginTop: "70px" }}
      >
        OUR VALUES
      </h2>
      <div className="w-100 d-flex justify-content-center align-items-center flex-lg-row flex-md-row flex-column gap-4">
        <Card
          style={{ backgroundColor: "#db5858" }}
          icon={icon1}
          title={"INNOVATIVE"}
          des={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque fugit expedita omnis, dignissimos aspernatur nobis."
          }
        />
        <Card
          style={{ backgroundColor: "#33914e" }}
          icon={icon2}
          title={"LOYALITY"}
          des={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque fugit expedita omnis, dignissimos aspernatur nobis."
          }
        />
        <Card
          style={{ backgroundColor: "#587fdb" }}
          icon={icon3}
          title={"RESPECT"}
          des={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque fugit expedita omnis, dignissimos aspernatur nobis."
          }
        />
      </div>
    </div>
  );
};

export default Value;
