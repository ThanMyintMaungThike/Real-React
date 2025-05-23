import { useState } from "react";
import { useApp } from "../ThemedApp";
import { Box, Container } from "@mui/material";
import Header from "../components/Header";
import Item from "../components/Item";
import Form from "../components/Form";

export default function Home() {
  const { showForm, setGlobalMsg } = useApp();

  const [data, setData] = useState([
    { id: 3, content: "Yay, interesting", name: "Peter" },
    { id: 2, content: "React is fun.", name: "Bob" },
    { id: 1, content: "Hello World! It is my day.", name: "Alice" }
  ]);

  const remove = (id) => {
    setData(data.filter((item) => item.id != id));
    setGlobalMsg("An item deleted");
  };

  const add = (content, name) => {
    const id = data[0].id + 1;
    setData([{ id, content, name }, ...data]);
    setGlobalMsg("An item added");
  };

  return (
    <Box>
      {showForm && <Form add={add} />}
      {data.map((item) => {
        return <Item key={item.id} item={item} remove={remove} />;
      })}
    </Box>
  );
}
