import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";

export default function Products() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Card variant="outlined" sx={{ maxWidth: 360 }}>
          <CardMedia
            component="img"
            height="240"
            image="	https://airomax.co/wp-content/uploads/2024/04/Airomax-AM80T_Highcompressed-2048x1551.png"
            alt="Toothbrush"
          />
          <Box sx={{ p: 2 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography gutterBottom variant="h5" component="div">
                Adipisicing
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                $340
              </Typography>
            </Stack>
            <Typography color="text.secondary" variant="body2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Typography gutterBottom variant="body2">
              Select type
            </Typography>
            <Stack direction="row" spacing={1}>
              <Chip color="primary" label="Type1" size="small" />
              <Chip label="Type2" size="small" />
              <Chip label="Type3" size="small" />
            </Stack>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card variant="outlined" sx={{ maxWidth: 360 }}>
          <CardMedia
            component="img"
            height="240"
            image="https://airomax.co/wp-content/uploads/2024/04/Airomax-AM80S.png"
            alt="Toothpaste"
          />
          <Box sx={{ p: 2 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography gutterBottom variant="h5" component="div">
                Explicabo
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                $143
              </Typography>
            </Stack>
            <Typography color="text.secondary" variant="body2">
              Quam amet sint nihil eos nobis eum minima placeat facere soluta,
              totam dolores maiores non.
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Typography gutterBottom variant="body2">
              Select size
            </Typography>
            <Stack direction="row" spacing={1}>
              <Chip color="primary" label="Small" size="small" />
              <Chip label="Medium" size="small" />
              <Chip label="Large" size="small" />
            </Stack>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card variant="outlined" sx={{ maxWidth: 360 }}>
          <CardMedia
            component="img"
            height="240"
            image="	https://airomax.co/wp-content/uploads/2024/04/Airomax-AM60T_Highcompress.png"
            alt="Dental Floss"
          />
          <Box sx={{ p: 2 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography gutterBottom variant="h5" component="div">
                Poluptatibus
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                $252
              </Typography>
            </Stack>
            <Typography color="text.secondary" variant="body2">
              obcaecati quas ex, voluptatibus sequi explicabo. Iste!
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Typography gutterBottom variant="body2">
              Select model
            </Typography>
            <Stack direction="row" spacing={1}>
              <Chip color="primary" label="2024" size="small" />
              <Chip label="2022" size="small" />
            </Stack>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}
