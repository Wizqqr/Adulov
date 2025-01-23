import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import styles from './FootballTeam.module.scss'; 

export const FootballTeam = () => {
  const players = [
    {
      id: 1,
      name: "Анарбек Ормомбеков",
      position: "Нападающий",
      age: 25,
      avatar: "https://sport.kg/uploads/posts/2014-01/thumbs/1389350666_spisok_ormonbekov.jpg",
    },
    {
      id: 2,
      name: "Руслан Сыдыков",
      position: "Полузащитник",
      age: 27,
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk_VKbtC-SluwlvA-97vOfqU1jIDnvg0DCnA&s",
    },
    {
      id: 3,
      name: "Мирлан Мурзаев",
      position: "Защитник",
      age: 29,
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAI2vvqhkI9nXzq9vqGcAllcozMlvCDJqwPQ&s",
    },
    {
      id: 4,
      name: "Девид Тетте",
      position: "Вратарь",
      age: 24,
      avatar: "https://gdb.rferl.org/d72c6fc6-caf8-4a4b-a678-9e98fb6bf33a_cx28_cy7_cw32_w408_r1_s.jpg",
    },
    {
      id: 5,
      name: "Нурбек Джумашев",
      position: "Нападающий",
      age: 26,
      avatar: "https://yt3.googleusercontent.com/ytc/AIdro_mv9XfbY0HovRH48vkhZO0eyn8k1nacpoHqufD_q9PNkA=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 6,
      name: "Айбек Асанов",
      position: "Полузащитник",
      age: 28,
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpYCZDc0_ebQjEG870m4pXLSHdZlnJ0cDXIg&s",
    },
  ];

  return (
    <div className={styles.footballTeam}>
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: 4,
          py: 6,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", mb: 4 }}>
          Футболисты футбольного клуба «Дордой»
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {players.map((player) => (
            <Grid item xs={12} sm={6} md={4} key={player.id}>
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
                <Avatar src={player.avatar} alt={player.name} sx={{ width: 80, height: 80, mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>
                  {player.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                  Позиция: {player.position}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Возраст: {player.age} лет
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};
