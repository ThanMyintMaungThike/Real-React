import {
  AccountCircle as UserIcon,
  Alarm as TimeIcon,
  Delete as DeleteIcon
} from "@mui/icons-material";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export default function Item({ item, remove, primary }) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{ mb: 2, bgcolor: "banner" }}
      onClick={() => navigate("/comments")}>
      {primary && <Box sx={{ height: 50, bgcolor: green[500] }} />}
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1
            }}>
            <TimeIcon fontSize="10" color="success" />
            <Typography variant="caption" sx={{ color: green[500] }}>
              A few second ago
            </Typography>
          </Box>
          <IconButton size="small" onClick={() => remove(item.id)}>
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Box>
        <Typography sx={{ my: 3 }}>{item.content}</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1
          }}>
          <UserIcon fontSize="12" color="info" />
          <Typography variant="caption">{item.name}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
