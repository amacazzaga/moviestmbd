import Header from "./Header/Header";
import Body from "./Body/Body";
import "./App.css";

function App() {
  return (
    <div>
      <div className="container">
      <Header />
      </div>
      <div className="container">
      <Body/>
      </div>
    </div>
  );
}
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
  crossorigin="anonymous"
></script>;
export default App;
