import React from "react";
import { Box, Typography, Paper, Grid, useTheme } from "@mui/material";

export const ClubInfo = () => {
  const theme = useTheme();

  return (
    <Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: 4 }}>
      {/* Заголовок */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          marginBottom: 4,
          textAlign: "center",
          color: theme.palette.primary.main,
          textTransform: "uppercase",
          letterSpacing: 2,
        }}
      >
        Футбольный клуб «Дордой»
      </Typography>

      {/* История клуба */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: 2,
            color: theme.palette.secondary.main,
            textDecoration: "underline",
            textAlign: "center",
          }}
        >
          История клуба
        </Typography>
        <Paper sx={{ padding: 2, backgroundColor: "#f9fafb", borderRadius: 2 }}>
          <Typography
            paragraph
            sx={{
              fontSize: "1.2rem",
              lineHeight: 1.6,
              color: theme.palette.text.primary,
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            Футбольный клуб «Дордой» был основан в 1997 году и является одним из самых титулованных клубов Кыргызстана. Клуб
            выступает на стадионе «Дордой» в Бишкеке, вмещающем 3 000 зрителей. С момента своего основания клуб зарекомендовал
            себя как ведущая сила в футболе страны.
          </Typography>
        </Paper>
      </Box>

      {/* Достижения клуба */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: 2,
            color: theme.palette.secondary.main,
            textDecoration: "underline",
            textAlign: "center",
          }}
        >
          Достижения клуба
        </Typography>
        <Paper sx={{ padding: 2, backgroundColor: "#f9fafb", borderRadius: 2 }}>
          <Typography
            paragraph
            sx={{
              fontSize: "1.2rem",
              lineHeight: 1.6,
              color: theme.palette.text.primary,
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            <strong>Чемпионат Кыргызстана:</strong> 13 титулов (2004, 2005, 2006, 2007, 2008, 2009, 2011, 2012, 2014, 2018, 2019, 2020, 2021).
          </Typography>
          <Typography
            paragraph
            sx={{
              fontSize: "1.2rem",
              lineHeight: 1.6,
              color: theme.palette.text.primary,
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            <strong>Кубок Кыргызстана:</strong> 10 побед (2004, 2005, 2006, 2008, 2010, 2012, 2014, 2016, 2017, 2018).
          </Typography>
          <Typography
            paragraph
            sx={{
              fontSize: "1.2rem",
              lineHeight: 1.6,
              color: theme.palette.text.primary,
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            <strong>Суперкубок Кыргызстана:</strong> 6 титулов (2012, 2013, 2014, 2019, 2021, 2022).
          </Typography>
          <Typography
            paragraph
            sx={{
              fontSize: "1.2rem",
              lineHeight: 1.6,
              color: theme.palette.text.primary,
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            <strong>Кубок Президента АФК:</strong> 2 победы (2006, 2007).
          </Typography>
        </Paper>
      </Box>

      {/* Состав команды */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: 2,
            color: theme.palette.secondary.main,
            textDecoration: "underline",
            textAlign: "center",
          }}
        >
          Состав команды (2024)
        </Typography>
        <Paper sx={{ padding: 2, backgroundColor: "#f9fafb", borderRadius: 2 }}>
          <Typography
            paragraph
            sx={{
              fontSize: "1.2rem",
              lineHeight: 1.6,
              color: theme.palette.text.primary,
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            На сезон 2024 года «Дордой» заявил команду, состоящую из опытных игроков, представляющих клуб в национальных и
            международных турнирах. Клуб продолжает поддерживать высокий уровень игры и амбиции на победу.
          </Typography>
        </Paper>
      </Box>

      {/* Дополнительная информация */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: 2,
            color: theme.palette.secondary.main,
            textDecoration: "underline",
            textAlign: "center",
          }}
        >
          Дополнительная информация
        </Typography>
        <Paper sx={{ padding: 2, backgroundColor: "#f9fafb", borderRadius: 2 }}>
          <Typography
            paragraph
            sx={{
              fontSize: "1.2rem",
              lineHeight: 1.6,
              color: theme.palette.text.primary,
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            Футбольный клуб «Дордой» является символом футбольной культуры Кыргызстана. В течение своей истории клуб
            зарекомендовал себя как настоящий лидер на национальной арене, регулярно выигрывая чемпионаты и кубки. Он
            также имеет богатую историю выступлений на международной арене, где достиг немалых успехов.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};
