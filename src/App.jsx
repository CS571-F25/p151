import './App.css'
import { HashRouter, Route, Routes } from 'react-router'
import SolHome from './components/SolHome'
import SolAbout from './components/SolAbout'
import { useState, useEffect } from 'react'

function App() {
  const [planet, setPlanet] = useState({});

  useEffect(() => {
        fetch("https://cs571api.cs.wisc.edu/rest/f25/bucket/sol", {
            headers: {
                // eslint-disable-next-line no-undef
                "X-CS571-ID": CS571.getBadgerId()
            }
        }).then(res => res.json()).then(data => {
            const planetName = {};
            console.log(data);
            Object.values(data.results).forEach(find => {
                planetName[find.name] = find;
            });
            setPlanet(planetName);
        });
    }, []);

  return <HashRouter>
    <Routes>
      <Route path="/" element={<SolHome planet={planet} setPlanet={setPlanet}/>}></Route>
      <Route path="/about" element={<SolAbout planet={planet}/>}></Route>
    </Routes>
  </HashRouter>
}

export default App
