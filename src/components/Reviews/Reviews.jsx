import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import { format } from "date-fns";
import styles from './Reviews.module.scss'; 

export const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      date: new Date(),
      comment: "Great service, fast and reliable. I will definitely use it again!",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Jane Smith",
      date: new Date(),
      comment: "Had an amazing experience! Highly recommend this platform.",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      name: "Sam Wilson",
      date: new Date(),
      comment: "Smooth exchange process and friendly customer support.",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 4,
      name: "Anna Lee",
      date: new Date(),
      comment: "Fast and secure, my go-to exchange service!",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
      id: 5,
      name: "Tom Brown",
      date: new Date(),
      comment: "Reliable service with a great user interface.",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: 6,
      name: "Lucy Green",
      date: new Date(),
      comment: "Quick transactions and great support team!",
      avatar: "https://i.pravatar.cc/150?img=6",
    },
  ];

  return (
    <div className={styles.reviews}>
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        px: 4,
        py: 6,
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", mb: 4 }}>
        What our customers say
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {reviews.map((review) => (
          <Grid item xs={12} sm={6} md={4} key={review.id}>
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: 3,
                borderRadius: 2,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "400px",
                margin: "0 auto",
              }}
            >
              <Avatar src={review.avatar} alt={review.name} sx={{ width: 80, height: 80, mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>
                {review.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
                {format(review.date, "MMM dd, yyyy")}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center", fontSize: "1rem" }}>
                {review.comment}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
  );
};
