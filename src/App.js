import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import React, { useState } from 'react'

function App() {
  const [alert, setalert] = useState(null)
  const [mode, setmode] = useState('light')
  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 2000)
  }
  const showMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'rgb(37,8,126)';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Navbar title='Textutils' about='About us' mode={mode} showMode={showMode} showAlert={showAlert} />

      <Alert alert={alert} />

      <div className="container my-3">
        <Textform title='TextUtils - Word and Character Counter' mode={mode} showMode={showMode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
