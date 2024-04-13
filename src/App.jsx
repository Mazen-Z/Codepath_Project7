import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom"; 
import ViewCrewmate from './pages/viewCrewmate'
import CreateCrewmate from './pages/createCrewmate.jsx';
import EditCrewmate from './pages/editCrewmate.jsx'
import NavBar from './components/navBar.jsx'
import CrewmateInfo from './components/crewmateInfo.jsx'
import { Link } from 'react-router-dom'
import { supabase } from './client.js'
import './App.css'

function App() {
  const [crewmates, setCrewmates] = useState([]); 
  
  useEffect(()=> {
      const fetchData = async () => {
          const { data } = await supabase
          .from("characters")
          .select()
          .order("created_at", { ascending: true });

      setCrewmates(data);
      };
      fetchData();
      }, [])


  // Sets up routes
  let elements = useRoutes([
    {
      path: "/",
      element: <div className='App'>
              <h1>Welcome to the Crewmate Creator!</h1>
              <h3>Are you lonely? Do you need friends?? Dependable friends??? Well you've come to the right place!</h3>
              <h3>You can now create your very own set of crewmates (or imposters for some drama)</h3>
              <h4><i>Disclaimer: They dont do much but they exist...</i></h4>
              </div>
    },
    {
      path: "/new-crewmate",
      element: <CreateCrewmate /> 
    },
    {
      path: "/crewmates",
      element: <ViewCrewmate data={crewmates}/>
    },
    {
    path:"crewmates/edit/:id",
    element: <EditCrewmate data={crewmates} />
    },
    {
      path: "crewmates/crewmate/:id",
      element: <CrewmateInfo data={crewmates}/>
    }, 
    {
      path: "crewmates/crewmate/:id/edit/:id",
      element: <EditCrewmate allCrewmates={crewmates} /> 
    }
  ]);

  return (
    <div className="App">
      <NavBar />
      {elements}
    </div>
  )
}

function Main() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Main;
