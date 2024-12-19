import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { RateReview, SwapHoriz, Timer, People, Start } from "@mui/icons-material";
import styles from './Advantages.module.scss'; 

export const Advantages = () => {
  return (
    <Box sx={{ textAlign: "center", py: 10, px: 4 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 5,
          fontFamily: "'Poppins', sans-serif",
          fontSize: "2.5rem",
        }}
      >
        Our Advantages
      </Typography>
      
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <RateReview sx={{ fontSize: 50, color: "#26A17B" }} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mt: 2,
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "1.5rem", 
                }}
              >
                10 thousand reviews
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                On independent platforms
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <SwapHoriz sx={{ fontSize: 50, color: "#F7931A" }} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mt: 2,
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "1.5rem",
                }}
              >
                Over 200
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Exchange directions
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Timer sx={{ fontSize: 50, color: "#F1C40F" }} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mt: 2,
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "1.5rem",
                }}
              >
                15 minutes
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Time of processing
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <People sx={{ fontSize: 50, color: "#3498DB" }} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mt: 2,
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "1.5rem",
                }}
              >
                24,582 clients
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Make exchanges
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Start sx={{ fontSize: 50, color: "#9B59B6" }} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mt: 2,
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "1.5rem",
                }}
              >
                2016
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Beginning of work
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <SwapHoriz sx={{ fontSize: 50, color: "#E74C3C" }} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mt: 2,
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "1.5rem",
                }}
              >
                425,000+
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Exchanges for 6 years
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
