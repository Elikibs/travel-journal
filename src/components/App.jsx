import Card from "./Card";
import Navbar from "./Navbar";
import dataFile from "../../data"

function App(){
  const cardData = dataFile.map(function(data){
    return <Card 
              key={data.id}
              {...data}
    />
  })
  return (
    <div className="main-div">
      <Navbar />
      {cardData}
    </div>
  )
}

export default App;