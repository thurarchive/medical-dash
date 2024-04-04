import React from "react";
import WelcomePanel from "../WelcomePanel/WelcomePanel";
import TwoCharts from "../TwoCharts/TwoCharts";
import WideChart from "../WideChart/WideChart";
import ThreeCharts from "../ThreeCharts/ThreeCharts";
import Form from "../Form/Form";

class MainSection extends React.Component {
    render() {
    const { selected } = this.props;
    console.log("selected ", selected)
    if (selected === "dashboard") {
      return (
        <div className="mainsection">
          <WelcomePanel />
          <TwoCharts />
          <WideChart />
          <ThreeCharts />
        </div>
      );
    } else {
      return (
        <div className="mainsection">
          <Form/>          
        </div>
      );
    }
  }
}

export default MainSection;
