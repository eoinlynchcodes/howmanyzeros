import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>How Many Zeros?</h1>
      <p>Ireland</p>

      <iframe
        style="border: 0; width: 350px; height: 442px;"
        src="https://bandcamp.com/EmbeddedPlayer/track=3306867031/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
        seamless
      >
        <a href="https://howmanyzeros.bandcamp.com/track/output">
          null by How Many Zeros?
        </a>
      </iframe>

      <div>
        <iframe
          scrolling="no"
          style="border: 0;width: 100%;height: 50px;"
          src="https://bandcamp.com/band_follow_button_deluxe/506512362"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
