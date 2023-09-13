import  {useState, useEffect} from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/NavBar/Nav.jsx";
import axios from "axios";
import {Route, Routes, useLocation,  useNavigate} from "react-router-dom";
import About from "./views/about/About.jsx";
import Detail from "./views/detail/Detail.jsx";
import Login from "./views/Login/Login";
import Favorites from "./views/favorites/Favorites";

const URL = 'http://localhost:3001/rickandmorty/login/';

function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  let [counter, setCounter] = useState(0)
  const navigate = useNavigate();
  const [access, setAccess] = useState(true);
  
 
  const loginHandler = async (userData) => {
    try {
    const { email, password } = userData;
     const { data } = await axios(URL + `?email=${email}&password=${password}`)
        const { access } = data;
        setAccess(access);
        access && navigate('/home');
     
    } catch (error) {
      console.log(error.message)
    }
    }

   useEffect(() => {
    !access && navigate("/");
    //eslint-disable-next-line
  }, [access, navigate])

  const searchHandler = async (id) => {
    try {
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
        
        if(data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        }

    } catch (error) {
     alert("¡No hay personajes con este ID!");
      
    }
  };

  function closeHandler(id) {
      let filteredCharacters = characters.filter(
      (character) => character.id !== id);

    setCharacters(filteredCharacters);
    setCounter(counter - 1);
  }

  function randomHandler() {
    let memoria = [];

    let randomId = (Math.random() * 826).toFixed();

    randomId = Number(randomId);

    if (!memoria.includes(randomId)) {
      memoria.push(randomId);
      searchHandler(randomId);
    } else {
      alert("Ese personaje ya fue agregado");
      return;
    }
  }
        
  return (
    <div className='App'>
      {pathname !== "/" && (
        <Nav
        onSearch={searchHandler}
        randomize={randomHandler}
        />
        )}

      <Routes>
        <Route path="/" element={<Login login={loginHandler} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={closeHandler} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
       
      </Routes>
      </div>
    
  );
}

export default App;
