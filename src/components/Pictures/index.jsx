import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Divider } from '@mui/material';

const news = [
  {
    title: "Переименование футзального клуба «Дордой»",
    description: "8 января 2025 года футзальный клуб «Дордой» сменил название на «Art Blast Group» в связи со сменой генерального спонсора. Команда продолжит выступать в Суперлиге под новым именем.",
    link: "https://www.for.kg/news-861482-ru.html?utm_source=chatgpt.com"
  },
  {
    title: "Отставка главного тренера футбольного клуба «Дордой»",
    description: "Главный тренер Анарбек Ормомбеков был отправлен в отставку из-за неудовлетворительных результатов команды. Исполняющим обязанности главного тренера назначен Руслан Сыдыков.",
    link: "https://24.kg/sport/32973_glavnyiy_trener_futbolnogo_kluba_dordoy_otpravlen_v_otstavku/?utm_source=chatgpt.com"
  },
  {
    title: "Участие в турнире CAFA Silk Way Cup",
    description: "«Дордой» примет участие в международном турнире CAFA Silk Way Cup 2025, который пройдет с 24 апреля по 6 мая. Команда встретится с туркменским клубом в предварительном раунде за право участия в турнире.",
    link: "https://news.com.kg/sport/dordoj-i-muras-yunajted-sygrayut-v-turnire-cafa-silk-way-cup/?utm_source=chatgpt.com"
  },
  {
    title: "Переход капитана Мирлана Мурзаева в клуб Индии",
    description: "Капитан «Дордоя» Мирлан Мурзаев перешел в индийский клуб «Ченнаи». Он покидает команду после успешной карьеры в Кыргызстане и международных выступлениях.",
    link: "https://24.kg/sport/204843_kapitan_futbolnogo_kluba_laquodordoyraquo_mirlan_murzaev_pereshel_vnbspkomandu_indii_/?utm_source=chatgpt.com"
  },
  {
    title: "Победа в Кубке Кыргызстана",
    description: "19 сентября 2016 года «Дордой» в восьмой раз выиграл Кубок Кыргызстана, победив ошский «Алай» со счетом 1:0. Единственный гол забил Девид Тетте на 59-й минуте.",
    link: "https://rus.azattyk.org/a/27999432.html?utm_source=chatgpt.com"
  },
  {
    title: "История клуба",
    description: "«Дордой» был основан в январе 1997 года и с тех пор стал одним из ведущих клубов Кыргызстана, многократно становясь чемпионом страны и обладателем Кубка Кыргызстана.",
    link: "https://www.dordoi.kg/kompanii/sport/dordoy-dinamo?utm_source=chatgpt.com"
  }
];

const NewsSection = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center" marginTop="35px">
        Важные новости футбольного клуба «Дордой»
      </Typography>
      <Grid container spacing={4}>
        {news.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {item.description}
                </Typography>
                <Divider />
                <Typography variant="body2" color="primary" component="a" href={item.link} target="_blank" rel="noopener noreferrer">
                  Подробнее
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NewsSection;
