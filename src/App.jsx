import {
  Box,
  Button,
  Typography,
  IconButton,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { useState } from "react";
import PaidIcon from "@mui/icons-material/Paid";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import InsertChartRoundedIcon from "@mui/icons-material/InsertChartRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TextField from "@mui/material/TextField";
function App() {
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifySelf: "center",
        gap: 6,
        borderRadius: "24px",
        backgroundColor: "white",
        padding: { xs: 6, md: 8 },
        boxShadow: 24,
        width: 1100,
      }}
    >
      <Box
        component="div"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: { xs: 1, md: 2 },
          border: "1px solid",
          borderRadius: 10,
          borderColor: "#636e82",
          padding: 1,
        }}
      >
        <Button
          sx={{ color: "#636e82", display: "flex", gap: 1, borderRadius: 3 }}
        >
          <PaidIcon />
          Convert
        </Button>
        <Button
          sx={{ color: "#636e82", display: "flex", gap: 1, borderRadius: 3 }}
        >
          <SendRoundedIcon />
          Send
        </Button>
        <Button
          sx={{ color: "#636e82", display: "flex", gap: 1, borderRadius: 3 }}
        >
          <InsertChartRoundedIcon />
          Charts
        </Button>
        <Button
          sx={{ color: "#636e82", display: "flex", gap: 1, borderRadius: 3 }}
        >
          <NotificationsIcon />
          Alert
        </Button>
      </Box>
      <Box
        component="div"
        sx={{
          position: "relative",
          display: "grid",
          alignItems: "center",
          gridTemplateColumns: { xs: "1fr", md: "33% 1fr" },
          gridTemplateRows: { xs: "1fr", md: "auto" },
          gap: { xs: 7, md: 2 },
        }}
      >
        <TextField
          variant="standard"
          defaultValue="$"
          InputProps={{
            sx: {
              height: 84,
              borderRadius: "8px",
              border: "1px solid",
              borderColor: "grey.250",
              backgroundColor: "white",
              px: 4,
              py: 2,
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#636e82",
              width: 315,
              marginTop:2,
              "&:hover": { backgroundColor: "grey.150" },
              "&:focus": {
                outline: "2px solid",
                outlineColor: "blue.400",
              },
            },
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" color="textSecondary">
              From
            </Typography>
            <FormControl variant="outlined">
              <Select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                sx={{ minWidth: 315,height:82,borderRadius: 2 }}
              >
                <MenuItem value="EUR">EUR - Euro</MenuItem>
                <MenuItem value="USD">USD - US Dollar</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <IconButton
            onClick={handleSwap}
            sx={{
              border: "1px solid",
              borderColor: "grey.300",
              borderRadius: "50%",
              marginTop: 2,
            }}
            size="large"
          >
            <SwapHorizIcon />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" color="textSecondary">
              To
            </Typography>
            <FormControl variant="outlined">
              <Select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                sx={{ minWidth: 315,height:82,borderRadius: 2 }}
              >
                <MenuItem value="EUR">EUR - Euro</MenuItem>
                <MenuItem value="USD">USD - US Dollar</MenuItem>
                {/* Add more currencies as needed */}
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <Box component="div" sx={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="contained"
          size="large"
          sx={{ width: 234, borderRadius: 2 }}
        >
          Convert
        </Button>
      </Box>
    </Box>
  );
}

export default App;
