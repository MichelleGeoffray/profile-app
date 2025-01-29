
import {useState} from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
/*import Card1 from './components/Card1';
import Card2 from './components/Card2';*/
import './App.css';
import image_man from "./assets/headshot-man.png";
import image_woman from "./assets/headshot-woman.png";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";

const App = () => {
  const profiles = [
    { img: image_man, name: 'John Doe', title: 'Software Engineer', email: 'john@john.com' },
    { img: image_woman, name: 'Lily Smith', title: 'UX Designer', email: 'lily@blah.com' },
    { img: image_man, name: 'Rob Johnson', title: 'Web Developer', email: 'rob@gmail.com' },
    { img: image_woman, name: 'Ava Smith', title: 'Web Developer', email: 'a@a.com' },
    { img: image_man, name: 'Tom Smith', title: 'Software Engineer', email: 't@a.com' },
    { img: image_woman, name: 'Eva Smith', title: 'Graphic Designer', email: 'eva@blah.com' },
  ];

  //get titles
  const titles = [...new Set(profiles.map((profile) => profile.title))];


  const [title, setTitle] = useState("");
  //update the title on change of the dropdown
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const [search, setSearch] = useState("");
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleClear = () => {
    setTitle("");
    setSearch("");
  }

  //filter the profiles based on the title
  const filterProfiles = profiles.filter((profile) => 
    (title === "" || profile.title === title) && profile.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Wrapper>
          <h1>Profile App</h1>
        </Wrapper>
        <Wrapper>
          <About />
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
            <button onClick={handleClear}>Clear</button>
          </div>
          {/*display:flex; align-items:center; flex-wrap:wrap; ... input height:2rem; font-size:1rem; */}

          <div className="profile-cards">
            {filterProfiles.map((profile) => (<Card key={profile.email} {...profile} />
            ))}
          </div>
        </Wrapper>
      </main>
    </>
  );
}
export default App;
