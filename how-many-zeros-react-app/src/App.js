import React from "react";
import "./App.css"; // Import the CSS file

function App() {
  return (
    <div className="App">
      <h1>How Many Zeros?</h1>
      <p>Ireland</p>

      <div className="bandcamp">
        <iframe
          title="How Many Zeros? - Output"
          src="https://bandcamp.com/EmbeddedPlayer/track=3306867031/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
          seamless
        >
          <a href="https://howmanyzeros.bandcamp.com/track/output">
            null by How Many Zeros?
          </a>
        </iframe>
      </div>

      <div>
        <iframe title="How Many Zeros? - Follow" src="https://bandcamp.com/band_follow_button_deluxe/506512362" />
      </div>
    </div>
  );
}

export default App;
