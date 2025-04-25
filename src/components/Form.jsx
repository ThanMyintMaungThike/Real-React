import { Box, Button, TextField } from "@mui/material";
import { useRef } from "react";

export default function Form({ add }) {
  // const { mode } = useContext(AppContext);
  const contentRef = useRef();
  const nameRef = useRef();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const content = contentRef.current.value;
        const name = nameRef.current.value;

        add(content, name);
        // add(content, name);

        e.currentTarget.reset();
        e.currentTarget.focus();
      }}>
      <Box sx={{ mb: 4, textAllign: "right" }}>
        <TextField
          inputRef={contentRef}
          type="text"
          placeholder="Content"
          fullWidth
          multiline
          sx={{ mb: 1 }}
        />
        <TextField
          inputRef={nameRef}
          type="text"
          placeholder="Name"
          fullWidth
          multiline
          sx={{ mb: 1 }}
        />
        <Button variant="contained" type="submit">
          Post
        </Button>
      </Box>
    </form>
  );
}
