import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import R from "./components/R";
import Alert from "./components/Alert";
import {
  BrowserRouter as Main,
  Route,
  Routes,
} from "react-router-dom";

export default function App() {
  const changegreen = () => {
    document.body.style.backgroundColor = "#35C649";
  };
  const changeyellow = () => {
    document.body.style.backgroundColor = "#CAB911";
  };
  const changered = () => {
    document.body.style.backgroundColor = "#C15031";
  };
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#05476e";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtil - Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtil - Light Mode";
    }
  };
  return (
    <>
      {/*  <Graph />
      <Navbar />
      <Chart /> */}
    <Main>
        <Nav
          title="TextConvert"
          aboutText="About "
          mode={mode}
          toggleMode={toggleMode}
          changegreen={changegreen}
          changered={changered}
          changeyellow={changeyellow}
        />
        <Alert alert={alert} />
        <Routes>
        
            <Route
              exact path="/about"
            element ={<About mode ={mode}/>} 
            />

            <Route 
            exact path="/" element ={ <R
              showAlert={showAlert}
              heading= "Try TextUtil Word Counter Character Counter"
              mode={mode}
            /> }
             />
             
            
      </Routes>
      </Main>
    </>
  );
}
