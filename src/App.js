import logo from "./logo.svg";
import "./App.css";

// function App() {
//   return (
//     <div>
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       zzzz
//     </div>
//   );
// }

import React, { Component } from "react";
import axios from "axios";

axios.defaults.baseURL =
  "http://api.mediastack.com/v1/news?access_key=9d9e99f08daabda977f8a12302a782f8&keywords=cats dogs news&sources=en";

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(({ objectID, url, title }) => (
      <li key={objectID}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

class App extends Component {
  state = {
    articles: [],
  };

  async componentDidMount() {
    const response = await axios.get();
    this.setState({ articles: response.data });
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        zzzzz
      </div>
    );
  }
}

export default App;
