import { useContext, useState } from "react";
import List from "./List";
import Item from "./Item";
// import { Fruit } from "./Item"
import Form from "./Form";
import { AppContext } from "./ThemedApp";
export default function App() {
  const [data, setData] = useState([
    { id: 1, content: "Hello World!", name: "Alice" },
    { id: 2, content: "React is fun.", name: "Bob" },
    { id: 3, content: "Yah! really interesting.", name: "Peter" },
  ]);

  const [showForm, setShowForm] = useState(false);

  const { mode, setMode } = useContext(AppContext);

  const remove = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const add = (content, name) => {
    const id = data.length > 0 ? data[data.length - 1].id + 1 : 1;

    // const id = data[data.length - 1] . id + 1;

    setData([...data, { id, content, name }]);
  };

  return (
    <div
      style={{
        minHeight: 1500,
        background: mode === "dark" ? "black" : "white",
        color: mode === "dark" ? "white" : "black",
        paddingTop: 20,
      }}
    >
      <div style={{ maxWidth: 600, margin: "20px auto" }}>
        <h1
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Conversation
          <div>
            <button
              onClick={() => setShowForm(!showForm)}
              style={{
                width: 32,
                height: 32,
                borderRadius: 50,
                border: "0 none",
                background: showForm ? "#dc3545" : "#0d6efd",
                color: "white",
              }}
            >
              {showForm ? "×" : "+"}
            </button>

            <button
              onClick={() => {
                setMode(mode === "dark" ? "light" : "dark");
              }}
              style={{
                height: 32,
                padding: "0 20px",
                borderRadius: 10,
                border: "0 none",
                marginLeft: 10,
              }}
            >
              {mode === "dark" ? "Light" : "Dark"}
            </button>
          </div>
        </h1>

        {showForm && <Form add={add} />}
        <List>
          {data.map((item) => (
            <Item key={item.id} item={item} remove={remove} />
          ))}
        </List>
      </div>
    </div>
  );
}
