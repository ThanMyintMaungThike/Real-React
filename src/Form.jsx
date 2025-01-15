import { useContext, useRef } from "react";
import { AppContext } from "./ThemedApp";

export default function Form({ add }) {
  const { mode } = useContext(AppContext);

  const contentRef = useRef();
  const nameRef = useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const content = contentRef.current.value;
        const name = nameRef.current.value;

        if (!content && !name) return false;
        add(content, name);

        e.currentTarget.reset();
        e.currentTarget.focus();
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        padding: 10,
        borderRadius: 8,
        marginBottom: 20,
        background: mode === "dark" ? "#555" : "#def",
        // color: mode === "dark" ? "white" : "black",
      }}
    >
      <input
        type="text"
        ref={contentRef}
        placeholder="Content"
        style={{
          padding: 6,
          background: mode === "dark" ? "black" : "white",
          color: mode === "dark" ? "white" : "black",
        }}
      />
      <input
        type="text"
        ref={nameRef}
        placeholder="Name"
        style={{
          padding: 6,
          background: mode === "dark" ? "black" : "white",
          color: mode === "dark" ? "white" : "black",
        }}
      />
      <button
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 10,
          // background: "#0d6efd",
          color: "#fff",
          border: "0 none",
          alignItems: "center",
          background: mode === "dark" ? "#bead14" : "#0d6efd",
          color: mode === "dark" ? "black" : "#fff",
        }}
      >
        Post
      </button>
    </form>
  );
}
