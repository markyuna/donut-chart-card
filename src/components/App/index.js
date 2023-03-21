import "./App.css";
import { useState, useEffect } from "react";
//import axios from "axios";
import { mockData } from "../../data";
import DonutChartCard from "../DonutChartCard";

function App() {
  const [data, setData] = useState({});

  // a function to get the necessary data
  async function getData() {
    // Commented below is a request I would have made to an API, instead I will just get the mock data
    try {
      // const response = await axios({
      //   method: "GET",
      //   url: ``,
      // });
      // setData(response)

      setData(mockData);
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect will be triggered at app launch
  useEffect(() => {
    getData();
  }, []);

  function addCloneToData(cardToClone) {
    // I would make this function async if I needed to modify the data via POST request to API
    const updatedData = data;

    updatedData.profiles.push(cardToClone);
    setData({ ...updatedData });
  }

  return (
    <div className="App">
      {data.profiles?.map((profile, index) => {
        return (
          <DonutChartCard
            key={index}
            profile={profile}
            addCloneToData={addCloneToData}
          />
        );
      })}
    </div>
  );
}

export default App;
