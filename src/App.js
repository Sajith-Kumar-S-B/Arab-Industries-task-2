
import ImageSlider from './Components/ImageSlider';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <div>
        <div className="row">
          <div className="col-md-12">
            <Navbar />
            <ImageSlider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
