export default function List({ children }) {
  return (
    <ul
      style={{
        margin: 0,
        padding: 0,
        border: "1px solid #ddd",
        borderRadius: 5,
        listStyle: "none",
        overflow: "hidden",
      }}
    >
      {children}
    </ul>
  );
}
