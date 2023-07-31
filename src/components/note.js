import { Card, CardContent, Container, Typography } from "@mui/material";
import * as React from "react";

const Note = ({ note }) => {
  const { text } = note;

  return (
    <Container>
      <Card variant="outlined">
        <CardContent>
          <Typography>{`${text}`}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Note;
