import styled from "@emotion/styled";
import { Paper } from "@mui/material";

export const PaperStyle = styled(Paper)({
  padding: "10px 20px",
  width: 600,
  margin: "20 px auto",
});

export const NoteStyle = styled(Paper)({
  margin: "10px",
  padding: "15px",
  textAllign: "left",
});

export const CenteredContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
