import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Tabs,
  Tab,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import BitcoinIcon from "@mui/icons-material/MonetizationOn";
import EthereumIcon from "@mui/icons-material/Token";
import { useTheme } from "@mui/material/styles";

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#2962FF",
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#0039CB",
  },
  borderRadius: "8px",
  fontWeight: "bold",
  fontSize: "16px",
  padding: "12px 0",
  textTransform: "none",
}));

const ExchangeForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ borderRadius: "16px", p: isMobile ? 2 : 4 }}>
        <Tabs
          value={0}
          indicatorColor="primary"
          textColor="primary"
          sx={{
            "& .MuiTabs-flexContainer": {
              justifyContent: isMobile ? "space-around" : "flex-start",
            },
          }}
        >
          <Tab label="Все" sx={{ fontWeight: "bold" }} />
          <Tab label="Банки" sx={{ fontWeight: "bold" }} />
          <Tab label="Криптовалюта" sx={{ fontWeight: "bold" }} />
        </Tabs>

        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight="bold"
          sx={{ mt: 2, mb: 3 }}
          textAlign={isMobile ? "center" : "left"}
        >
          Продать Bitcoin (BTC) за Ethereum (ETH)
        </Typography>

        <Box display="flex" flexDirection="column" gap={3}>
          <Box display="flex" flexDirection={isMobile ? "column" : "row"} gap={2}>
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              sx={{ width: isMobile ? "100%" : "50%" }}
            >
              <BitcoinIcon color="warning" />
              <Typography variant="h6" fontWeight="bold">
                Bitcoin
              </Typography>
              <IconButton size="small">
                <SearchIcon fontSize="small" />
              </IconButton>
              <Typography color="primary" sx={{ cursor: "pointer" }}>
                Изменить
              </Typography>
            </Box>
            <TextField
              fullWidth
              label="Сколько отдаете"
              placeholder="BTC"
              variant="outlined"
            />
          </Box>

          <Box display="flex" flexDirection={isMobile ? "column" : "row"} gap={2}>
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              sx={{ width: isMobile ? "100%" : "50%" }}
            >
              <EthereumIcon color="primary" />
              <Typography variant="h6" fontWeight="bold">
                Ethereum
              </Typography>
              <IconButton size="small">
                <SearchIcon fontSize="small" />
              </IconButton>
              <Typography color="primary" sx={{ cursor: "pointer" }}>
                Изменить
              </Typography>
            </Box>
            <TextField
              fullWidth
              label="Сколько получаете"
              placeholder="ETH"
              variant="outlined"
            />
          </Box>

          <TextField
            fullWidth
            label="Ваш адрес Ethereum"
            placeholder="Введите адрес"
            variant="outlined"
          />
        </Box>

        <Box mt={4} display="flex" flexDirection="column" alignItems="center">
          <CustomButton fullWidth={isMobile} sx={{ maxWidth: "300px" }}>
            Перейти к оплате
          </CustomButton>
          <Typography
            variant="caption"
            display="block"
            textAlign="center"
            sx={{ mt: 2, color: "#888" }}
          >
            Нажимая кнопку, Вы подтверждаете свое согласие с{" "}
            <Typography component="span" color="primary" sx={{ cursor: "pointer" }}>
              Правилами
            </Typography>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default ExchangeForm;
