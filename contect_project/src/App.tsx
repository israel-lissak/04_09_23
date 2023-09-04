import { createContext, useState, useEffect } from 'react'
import './App.css';
import Grandpa from './Grandpa';
import ThemeSwitcher from './ThemeSwitcher';
import Light_dark_mode from './Light_dark_mode';
import Header from './Header';

type ContextValue = {
    state: string | null;
    setState: React.Dispatch<React.SetStateAction<string | null>>;
};
export const textContext = createContext<ContextValue | string >('hello');


type ContextThemeValue = {
  theme: "dark" | "light";
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
};
export const themeContext = createContext<ContextThemeValue | null >(null);


type user = {
  "id": number,
  "name": string,
  "username": string,
  "email": string,
  "address": {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": {
      "lat": string,
      "lng": string
    }
  },
  "phone": string,
  "website": string,
  "company": {
    "name": string,
    "catchPhrase": string,
    "bs": string
  }
}

type UserContext = {
  user: user;
  setUser : React.Dispatch<React.SetStateAction<user | null>>;
};

export const userContext = createContext<UserContext | null>(null);


function App() {

  const [state, setState] = useState<string | null>('hello world');
  const [theme, setTheme] = useState<"dark" | "light">('light');
  const [user, setUser] = useState<user|null>(null);
  

  useEffect (() => {
    async function getUsers() {
      const data = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await data.json()
      const random = users[Math.floor(Math.random() * (10 - 1 + 1)) + 1]
      setUser(random)
      console.log('request sent')
      console.log(random)
  }
  getUsers()
  .catch(console.error)
  }, [])
  

  return (
    <>
    
      <textContext.Provider value={{state ,setState}}>
          <Grandpa/>
      </textContext.Provider>

      <Light_dark_mode theme={theme}/>

      <themeContext.Provider value={{theme,setTheme}}>
        <ThemeSwitcher/>
      </themeContext.Provider>

      <Header/>

      {/* <userContext.Provider value={{getUsers()[Math.random() * (10 - 1 + 1) + 1]}}>

      </userContext.Provider> */}

    </>
  )
}

export default App
