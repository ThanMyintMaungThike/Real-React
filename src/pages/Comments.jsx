import { Box, Button, TextField } from "@mui/material";
import Item from "../components/Item";
import { useNavigate } from "react-router-dom";

export default function Comments() {
  const navigate = useNavigate();
  return (
    <Box>
      <Item
        primary
        key={1}
        item={{
          id: 1,
          content: "Initial post content from Peter",
          name: "Peter"
        }}
        remove={() => {}}
      />
      <Item
        key={2}
        item={{
          id: 2,
          content: "A comment from Bob",
          name: "Peter"
        }}
        onClick={() => navigate("/likes")}
        remove={() => {}}
      />
      <Item
        key={3}
        item={{
          id: 3,
          content: "A comment from Alice",
          name: "Peter"
        }}
        remove={() => {}}
      />

      <form>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            mt: 3
          }}>
          <TextField multiline placeholder="Your comment" />
          <Button sx={{ padding: 1.5 }} type="submit" variant="contained">
            Reply
          </Button>
        </Box>
      </form>
    </Box>
  );
}
