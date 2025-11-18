import './App.css';
import { HashRouter, Route, Routes } from 'react-router';
import { useState, useEffect } from 'react';

import SolHome from './components/SolHome';
import SolAbout from './components/SolAbout';
import SolAchievements from './components/SolAchievements';
import SolPlanets from './components/SolPlanets';
import SolMoons from './components/SolMoons';
import SolStats from './components/SolProfile/SolStats';
import SolCodex from './components/SolProfile/SolCodex';

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
      <Route path="/" element={<SolHome planet={planet}/>}></Route>
      <Route path="/about" element={<SolAbout planet={planet}/>}></Route>
      <Route path="/achievements" element={<SolAchievements planet={planet}/>}></Route>
      <Route path="/planets" element={<SolPlanets planet={planet}/>}></Route>
      <Route path="/moons" element={<SolMoons planet={planet}/>}></Route>
      <Route path="/profile" element={<SolStats/>}></Route>
      <Route path="/codex" element={<SolCodex/>}></Route>
    </Routes>
  </HashRouter>
}

export default App
