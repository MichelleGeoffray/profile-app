
import About from "./components/About";
import Navbar from "./components/Navbar";
import "./App.css";
import image_man from "./assets/headshot-man.png";
import image_woman from "./assets/headshot-woman.png";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import { useState } from "react";
import ProfileForm from "./components/ProfileForm";
import { useEffect } from "react";
import { use } from "react";


const App = () => {
  /*const profiles = [
    { img: image_man, name: 'John Doe', title: 'Software Engineer', email: 'john@john.com' },
    { img: image_woman, name: 'Lily Smith', title: 'UX Designer', email: 'lily@blah.com' },
    { img: image_man, name: 'Rob Johnson', title: 'Web Developer', email: 'rob@gmail.com' },
    { img: image_woman, name: 'Ava Smith', title: 'Web Developer', email: 'a@a.com' },
    { img: image_man, name: 'Tom Smith', title: 'Software Engineer', email: 't@a.com' },
    { img: image_woman, name: 'Eva Smith', title: 'Graphic Designer', email: 'eva@blah.com' },
  ];*/

  //Variable to store the animation state
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    fetch("https://web.ics.purdue.edu/~zong6/profile-app/fetch-data.php")
      .then((res) => res.json())
      .then((data) => {
        setProfiles(data);
        console.log(data)
      })
  }, []);

  const [animation, setAnimation] = useState(false);
  //function to update the animation state
  const handleAnimation = () => {
    setAnimation(false);
  };

  //Variable to store the mode state
  const [mode, setMode] = useState("light");
  //function to update the mode state
  const handleModeChange = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  //get titles
  const titles = [...new Set(profiles.map((profile) => profile.title))];

  const [title, setTitle] = useState("");
  //update the title on change of the dropdown
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setAnimation(true);
  };

  const [search, setSearch] = useState("");
  //update the search on change of the input
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setAnimation(true);
  };

  //clear the title and search
  const handleClear = () => {
    setTitle("");
    setSearch("");
    setAnimation(true);
  };

  //filter the profiles based on the title
  const filterProfiles = profiles.filter((profile) => 
    (title === "" || profile.title === title) && profile.name.toLowerCase().includes(search.toLowerCase())
  );

  const buttonStyle = {
    border: "1px solid #ccc",
  }

  return (
    <>
      <header>
        <Navbar mode={mode} updateMode={handleModeChange}/>
      </header>
      <main className={mode === "light" ? "light" : "dark"}>
        <Wrapper>
          <h1>Profile App</h1>
        </Wrapper>
        <Wrapper>
          <About />
        </Wrapper>
        <Wrapper>
          <ProfileForm />
        </Wrapper>
        <Wrapper>
          <div className="filter-wrapper">
            <div className="filter--select">
              <label htmlFor="title-select">Select a title: </label>
              <select id="title-select" value={title} onChange={handleTitleChange}>
                <option value="">All</option>
                {titles.map((title) => (<option key={title} value={title}>{title}</option>))}
              </select>
            </div>
            <div className="filter--search">
              <label htmlFor="search">Search by name: </label>
              <input
                type="text"
                id="search"
                onChange={handleSearchChange}
                value={search}
              />
            </div>
            <button onClick={handleClear} style={buttonStyle}>Reset</button>
          </div>
          <div className="profile-cards">
            {filterProfiles.map((profile) => (
              <Card 
                key={profile.id} 
                {...profile} 
                animate={animation} 
                updateAnimate={handleAnimation}
              />
            ))}
          </div>
        </Wrapper>
      </main>
    </>
  );
};

export default App;
