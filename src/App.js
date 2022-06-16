import "./App.css";
import { format } from "date-fns";

function App() {
  const date = format(new Date(), "dd.MM.yyyy");
  const clock = format(new Date(), "hh:mm");

  return (
    <>
      <header>
        <div className="menu">
          <div className="search">
            <img
              src="https://brandlogos.net/wp-content/uploads/2021/04/facebook-icon.png"
              alt=""
            />
            <input type="text" />
          </div>
          <div className="time">
            <p>
              {date} {clock}
            </p>
          </div>
        </div>
      </header>
      <div className="images">
        <div className="item">
          <div className="item-container">
            <img
              src="https://source.unsplash.com/gYl-UtwNg_I/1500x1500"
              alt=""
            />
          </div>
          <h1>Hey</h1>
        </div>
        <div className="item">
          <img src="https://source.unsplash.com/rFKUFzjPYiQ/1500x1500" alt="" />
          <h1>Let's</h1>
        </div>
        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d"
            alt=""
          />
          <h1>Give</h1>
        </div>
        <div className="item">
          <img src="https://source.unsplash.com/ITjiVXcwVng/1500x1500" alt="" />
          <h1>All</h1>
        </div>
        <div className="item">
          <h1>You Can</h1>
          <img src="https://source.unsplash.com/3MNzGlQM7qs/1500x1500" alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
