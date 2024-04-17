import React from "react";
import WelcomePanel from "../WelcomePanel/WelcomePanel";
import TwoCharts from "../TwoCharts/TwoCharts";
import OneChart from "../OneChart/OneChart";
import WideChart from "../WideChart/WideChart";
import ThreeCharts from "../ThreeCharts/ThreeCharts";
import Form from "../Form/Form";
import PatientsList from "../PatientsList/PatientsList";

class MainSection extends React.Component {
  render() {
    const { selected } = this.props;

    if (selected === "Dashboard") {
      return (
        <div className="mainsection">
          <WelcomePanel />
          <TwoCharts leftDataGroup={4} rightDataGroup={5} />
          <OneChart />
          <TwoCharts leftDataGroup={6} rightDataGroup={7} />
        </div>
      );
    } else if (selected === "Manage") {
      return (
        <div className="mainsection">
          <PatientsList />
        </div>
      );
    } else {
      return (
        <div className="mainsection">
          <Form />
        </div>
      );
    }
  }
}

export default MainSection;
