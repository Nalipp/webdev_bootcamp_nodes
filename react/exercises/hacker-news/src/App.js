import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {stories: []}
  }

  componentDidMount() {
    const topStories = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    const storyUrlBase = 'https://hacker-news.firebaseio.com/v0/item/';

    fetch(topStories)
      .then(data => data.json())
      .then(data => data.map(id => {
        let url = storyUrlBase + id + '.json'
        return fetch(url).then(d => d.json());
      }))
      .then(promises => Promise.all(promises))
      .then(stories => this.setState({stories}))
  }

  render() {
    let view = <p>Loading...</p>
    const { stories } = this.state;
    if (stories && stories.length > 0) {
      view = this.state.stories.map(story => {
        return (
          <p key={story.id}>
            {story.score} <a href={story.url}>{story.title}</a> by {story.by}
          </p>
        )
      });
    }
    return (
      <div><h2>Hacker News</h2>
        <div>{view}</div>
      </div>
    );
  }
}

export default App;


