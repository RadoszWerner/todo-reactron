import { Card, CardContent, Typography } from "@mui/material";
import * as React from "react";

const Note = ({ note }) => {
  const { text } = note;
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography>{`${text}`}</Typography>
      </CardContent>
    </Card>
  );
};

export default Note;
