import React from "react";
import { Box, Typography, Paper, Avatar, List, ListItem, ListItemText, useMediaQuery } from "@mui/material";

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

export const Rules = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box display="flex" flexDirection={isMobile ? "column" : "row"} justifyContent="space-between" p={4} sx={{ maxWidth: '1200px', margin: '0 auto' }}>
      <Box flex={1} p={4} sx={{ borderRight: !isMobile ? 1 : 0, borderColor: 'grey.300', backgroundColor: '#f4f6f8', borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          Service Rules
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Purpose and Scope
        </Typography>
        <Typography paragraph sx={{ fontSize: '1.2rem' }}>
          Rules of Service
          <br />
          1.1. These Rules for the provision of services by the service crypto-port.ru (hereinafter - Rules) establish requirements and contain a description of:
          <br />
          1.1.1. Procedure for providing the multicurrency exchange service crypto-port.ru
          <br />
          1.1.2. Public offer to users of the services of the service crypto-port.ru
          <br />
          1.1.3. Separation of responsibility for the use and provision of services by the service crypto-port.ru
          <br />
          1.1.4. Measures to minimize the risk of money laundering and terrorist financing.
          <br />
          1.2. crypto-port.ru or Service - a system that provides Users with the opportunity to exchange cryptocurrencies for electronic money and (or) national currency, as well as the exchange of electronic money and (or) national currency for cryptocurrency located and functioning on a website in the network Internet at crypto-port.ru
          <br />
          1.3. The service is located in the territory of the state of Belgium. According to the current legislative regulation, in Belgium the activity on the civil circulation of cryptocurrency is normatively not.
        </Typography>
      </Box>

      {!isMobile && (
        <Box flex={1} p={4} sx={{ backgroundColor: '#f9fafb', borderRadius: 2 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            Reviews
          </Typography>
          <Paper sx={{ maxHeight: 500, overflowY: 'auto', p: 2, borderRadius: 2, backgroundColor: '#fff' }}>
            <List>
              {reviews.map((review) => (
                <ListItem key={review.id} sx={{ borderBottom: 1, borderColor: 'grey.200', paddingY: 3 }}>
                  <Avatar alt={review.name} src={review.avatar} sx={{ marginRight: 2 }} />
                  <ListItemText
                    primary={<Typography variant="h6">{review.name}</Typography>}
                    secondary={
                      <>
                        <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 1 }}>
                          {review.comment}
                        </Typography>
                        <Typography variant="caption" color="textSecondary">{review.date.toLocaleDateString()}</Typography>
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>
      )}
    </Box>
  );
};
