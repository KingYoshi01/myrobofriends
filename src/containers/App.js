import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
// import { robots } from '../robots';
import './App.css';

function App() {
  // constructor(){
  //   super()
  //   this.state = {
  //     robots: [],
  //     searchField: ''
  //   }
  //   console.log('constructor')
  // }

  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [count, setCount] = useState(0);

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response=> response.json())
  //     .then(users => {this.setState({ robots: users })});
  //   console.log('componentDidMount');
  // }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users));
    console.log(count)
  }, [count]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })
  
  return !robots.length ?
    <h1 className='f1'>Loading!</h1> :
    (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <button onClick={()=>setCount(count+1)}>Open Console & Click Me!</button>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );

  }


// once done can run npm run build and will optimize
// build folder ready for deployment
export default App;