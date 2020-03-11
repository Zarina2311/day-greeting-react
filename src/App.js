import React from "react";

function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    fontSize: 60
  };

  if (hours < 12) {
    timeOfDay = "morning";
    styles.color = "#ff8080";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
    styles.color = "#cc3333";
  } else {
    timeOfDay = "night";
    styles.color = "#800000";
  }

  return <h1 style={styles}>Good {timeOfDay}!</h1>;
}

export default App;
