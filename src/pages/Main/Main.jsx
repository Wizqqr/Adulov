import React from "react";
import { Box, Typography } from "@mui/material";
import { FootballTeam } from "../../components/FootballTeam/FootballTeam";
import NewsSection from "../../components/Pictures";
export const Main = () => {
  return (
    <>
    <Box
  sx={{
    background: "linear-gradient(90deg, #E3FCEF 0%, #FEF6F2 100%)",
    textAlign: "center",
    py: 10,
    px: 4,
    position: "relative",
    borderRadius: 2,
  }}
>
  <Box
    sx={{
      maxWidth: "1200px",  
      mx: "auto",  
      position: "relative", 
    }}
  >
    <Box
      sx={{
        position: "absolute",
        top: 20,
        left: 40,
        width: 100,
        height: 100,
        backgroundColor: "#2F8E36", // Green color for football
        borderRadius: "50%",
        display: { xs: "none", sm: "flex" },
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontWeight: "bold",
          fontSize: 36, 
        }}
      >
        ⚽
      </Typography>
    </Box>

    <Box
      sx={{
        position: "absolute",
        top: 20,
        right: 40,
        width: 100, 
        height: 100,  
        backgroundColor: "#F2C94C", // Yellow color for football highlights
        borderRadius: "50%",
        display: { xs: "none", sm: "flex" },
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontWeight: "bold",
          fontSize: 36, 
        }}
      >
        ⚽
      </Typography>
    </Box>

    <Typography
      variant="h3"
      component="h1"
      sx={{
        fontWeight: "bold",
        fontSize: "2.5rem",
        lineHeight: 1.4,
        mt: 10,
        color: "#333",
      }}
    >
      FC Dordoi <br />
      Football Team
          </Typography>
  </Box>
</Box>
<NewsSection/>
<FootballTeam/>
    </>
  );
};
