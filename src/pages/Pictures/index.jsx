import React from "react";
import { Box, Typography, Grid, Paper, Card, CardMedia, CardContent, useTheme } from "@mui/material";

const teamPhotos = [
  {
    id: 1,
    title: "Game Day",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMM6RUHRX2M2OsTxTQQrAjpFqV2Jh8UYEtqQ&s", // Замените на реальные URL изображений
    description: "The team playing in the final match of the season.",
  },
  {
    id: 2,
    title: "Cup Victory",
    imageUrl: "https://pbs.twimg.com/media/E5RSQH9XoAAqmzV.jpg:large", // Замените на реальные URL изображений
    description: "The team celebrating their cup victory.",
  },
  {
    id: 3,
    title: "Team Celebration",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTuSxELpREVqjFnWDh5J_NGxsMZPu3aBXvUw&s", // Замените на реальные URL изображений
    description: "The team celebrating a hard-fought win.",
  },
  {
    id: 4,
    title: "Training Session",
    imageUrl: "https://bloximages.newyork1.vip.townnews.com/postguam.com/content/tncms/assets/v3/editorial/0/1f/01fcc7d6-67a0-11e6-8264-e75311d228c4/57b9a738afd67.image.jpg?crop=1200%2C630%2C0%2C85&resize=1200%2C630&order=crop%2Cresize", // Замените на реальные URL изображений
    description: "The team working hard during a training session.",
  },
  {
    id: 5,
    title: "Pre-Match Warmup",
    imageUrl: "https://www.turkmenistan.gov.tm/storage/app/media/Images/2022/07-2022/01072022/01072022-07-03.jpg", // Замените на реальные URL изображений
    description: "The team warming up before a big match.",
  },
];

export const TeamGallery = () => {
  const theme = useTheme();

  return (
    <Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", marginBottom: 4 }}>
        Team Moments
      </Typography>
      <Grid container spacing={4}>
        {teamPhotos.map((photo) => (
          <Grid item xs={12} sm={6} md={4} key={photo.id}>
            <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={photo.imageUrl}
                alt={photo.title}
                sx={{
                  borderTopLeftRadius: 2,
                  borderTopRightRadius: 2,
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                  {photo.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {photo.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
