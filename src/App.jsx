import logo from './logo.svg';
import './App.css';

function App() {
  
  // var arr = ["Karachi", "Multab", "Lahore","Quetta", "Rawalpindi"]

  var arr = [
    {
    cityName: "Karachi",
    humidity: "10%",
    perception: "1%",
    temperature: "30%"
  },
  {
    cityName: "Quetta",
    humidity: "10%",
    perception: "1%",
    temperature: "30%"
  },
  {
    cityName: "Islamabad",
    humidity: "12%",
    perception: "1%",
    temperature: "30%"
  },
  {
    cityName: "Lahore",
    humidity: "10%",
    perception: "12%",
    temperature: "30%"
  },
  {
    cityName: "Multan",
    humidity: "20%",
    perception: "1%",
    temperature: "30%"
  },



]

  return (



  <div>
    <header><h1>Header</h1></header>
<div style={{display: "flex", justifyContent:"space-around", color:'blue', border:" 2px solid black" }}>
  {arr.map((value)=>{
    return (
      <div key={value}>
        <h2>City name:{value.cityName} </h2>
    <h2>humidity:{value.humidity}</h2>
    <h2>perception:{value.perception}</h2>
    <h2>temperature:{value.temperature}</h2>
      </div>
    )
    
    
  })}
</div>


    {/* {[<p>Karachi</p>,<p>Quetta</p>,<p>Machar Colony</p>, <p>Quiadabad</p>]} */}

    {/* {arr.map((Cities) =>{
      return (
        <div>
          {Cities}
        </div>
        )
    })} */}





    <footer><h1>Footer</h1></footer>
  </div>



  
  
  );
}

export default App;
