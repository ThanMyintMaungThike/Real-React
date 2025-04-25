// import React from "react";
// import List from "./List";
import { useState } from "react";
import Item from "./components/Item";
import Form from "./components/Form";
import { useApp } from "./ThemedApp";
import { Box, Container } from "@mui/material";
import Header from "./components/Header";
// import { AppContext } from "./ThemedApp";

export default function App() {
  // const { mode, setMode } = useContext(AppContext);
  // const [showForm, setShowForm] = useState(false);

  const { showForm, setGlobalMsg } = useApp();

  const [data, setData] = useState([
    { id: 3, content: "Yay, interesting", name: "Peter" },
    { id: 2, content: "React is fun.", name: "Bob" },
    { id: 1, content: "Hello World!", name: "Alice" }
  ]);

  const remove = (id) => {
    setData(data.filter((item) => item.id != id));
    setGlobalMsg("An item deleted");
  };

  const add = (content, name) => {
    const id = data[0].id + 1;
    console.log(data[0].id);
    setData([{ id, content, name }, ...data]);
    setGlobalMsg("An item added");
  };

  return (
    <Box>
      <Header />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        {showForm && <Form add={add} />}
        {data.map((item) => {
          return <Item key={item.id} item={item} remove={remove} />;
        })}
      </Container>
    </Box>
    // <div
    //   style={{
    //     minHeight: 1500,
    //     background: mode === "dark" ? "black" : "white",
    //     color: mode === "dark" ? "white" : "black",
    //     paddingTop: 20
    //   }}>
    //   <div
    //     style={{
    //       maxWidth: 500,
    //       margin: "0 auto"
    //     }}>
    //     <h1
    //       style={{
    //         display: "flex",
    //         justifyContent: "space-between",
    //         alignItems: "center"
    //       }}>
    //       Yaycha
    //       <div>
    //         <button
    //           onClick={() => setShowForm(!showForm)}
    //           style={{
    //             width: 32,
    //             height: 32,
    //             borderRadius: 50,
    //             border: "0 none",
    //             background: showForm ? "#dc3545" : "#0d6efd"
    //           }}>
    //           {showForm ? "x" : "+"}
    //         </button>
    //         <button
    //           onClick={() => setMode(mode === "dark" ? "light" : "dark")}
    //           style={{
    //             marginLeft: 8,
    //             padding: "0 20px",
    //             height: 32,
    //             borderRadius: 32,
    //             border: "0 none",
    //             background: mode === "dark" ? "#333" : "#ddd",
    //             color: mode === "dark" ? "white" : "black"
    //           }}>
    //           {mode === "dark" ? "Light" : "Dark"}
    //         </button>
    //       </div>
    //     </h1>
    //     {showForm && <Form add={add} />}
    //     <List>
    //       {data.map((item) => (
    //         <Item key={item.id} item={item} remove={remove} />
    //       ))}
    //     </List>
    //   </div>
    // </div>
  );
}
