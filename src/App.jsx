
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
    {
      img: image_man,
      name: 'John Doe',
      title: 'Software Engineer',
      email: 'john@john.com'
    },
    {
      img: image_woman,
      name: 'Eva Smith',
      title: 'UX Designer',
      email: 'eva@blah.com'
    },
  ];
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Wrapper>
          <h1>Profile App</h1>
          <button onClick={handleClick}>
            {clicked ? "Clicked" : "Click me"}
          </button>
        </Wrapper>
        <Wrapper>
          <About />
        </Wrapper>
        <Wrapper>
          <div className="profile-cards">
            {profiles.map((profile) => (
              <Card key={profile.email} {...profile} />
            ))}
          </div>
        </Wrapper>
      </main>
    </>
  );
}
export default App;
