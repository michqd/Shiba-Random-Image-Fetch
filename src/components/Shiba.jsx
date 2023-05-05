import React from "react";

export const Shiba = () => {
  const [dogs, setDogs] = React.useState([]);
  const [isDataLoaded, setIsDataLoaded] = React.useState(false);

  React.useEffect(() => {
    fetch("https://shibe.online/api/shibes?count=1")
      .then((res) => res.json())
      .then((json) => {
        const dogObjects = json.map((url) => ({ url }));
        setDogs(dogObjects);
        setIsDataLoaded(true);
      });
  }, []);

  if (!isDataLoaded) {
    return (
      <div>
        <h1> Data is still loading... </h1>
      </div>
    );
  }

  return (
    <div className="Shiba">
      <h1> SHIBAS ARE SO CUTE </h1>
      {dogs.map((dog) => (
        <img src={dog.url} key={dog.url} alt="Shiba" />
      ))}
    </div>
  );
};

export default Shiba;
