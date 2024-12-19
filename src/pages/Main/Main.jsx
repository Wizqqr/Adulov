import React from "react";
import { Box, Typography } from "@mui/material";
import ExchangeForm from '../../components/ExchangeForm/ExchangeForm';
import { Advantages } from "../../components/Advantages/Advantages";
import { Reviews } from "../../components/Reviews/Reviews";
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
        {/* Container for text and icons with max-width */}
        <Box
          sx={{
            maxWidth: "1200px",  // Apply max-width here
            mx: "auto",  // Center the container horizontally
            position: "relative", // Ensure the icons remain positioned correctly
          }}
        >
          {/* Левая иконка */}
          <Box
            sx={{
              position: "absolute",
              top: 20,
              left: 40,
              width: 100,  // Increased width
              height: 100,  // Increased height
              backgroundColor: "#26A17B",
              borderRadius: "50%",
              display: { xs: "none", sm: "flex" },  // Hide on small screens (xs), show on medium and up (sm)
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: 36,  // Adjusted font size
              }}
            >
              T
            </Typography>
          </Box>

          {/* Правая иконка */}
          <Box
            sx={{
              position: "absolute",
              top: 20,
              right: 40,
              width: 100,  // Increased width
              height: 100,  // Increased height
              backgroundColor: "#F7931A",
              borderRadius: "50%",
              display: { xs: "none", sm: "flex" },  // Hide on small screens (xs), show on medium and up (sm)
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: 36,  // Adjusted font size
              }}
            >
              ₿
            </Typography>
          </Box>

          {/* Основной текст */}
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
            Reliable and convenient <br />
            cryptocurrency exchange
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mt: 3,
              color: "text.secondary",
              maxWidth: 700,
              mx: "auto",
              fontSize: "1.2rem",
            }}
          >
            The main value that we have is our reputation and the trust of our
            customers, which confirms over 20,000 positive reviews
          </Typography>
        </Box>
      </Box>
      <ExchangeForm />
      <Advantages />    
      <Reviews/>
    </>
  );
};
