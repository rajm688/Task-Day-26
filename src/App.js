import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./App.css";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
export default function App() {
  return (
    <div className="outerdiv">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}
function Container1() {
  return (
    <div className="innerdiv">
      <Card sx={{ width: "100%" }}>
        <CardContent>
          <Typography
            style={{ textAlign: "center" }}
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            Free
          </Typography>
          <Typography
            style={{ textAlign: "center" }}
            variant="h5"
            component="div"
          >
            {" "}
            $0 / Month
          </Typography>{" "}
          <hr />
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <DoneIcon style={{ fontSize: "medium" }} /> Single USer
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <DoneIcon style={{ fontSize: "medium" }} /> 5GB Storage
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <DoneIcon style={{ fontSize: "medium" }} /> Unlimited Public
            Projects
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <DoneIcon style={{ fontSize: "medium" }} /> Community Access
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <DoneIcon style={{ fontSize: "medium" }} /> Unlimited Private
            Projects
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <CloseIcon style={{ fontSize: "medium" }} /> Dedicated Phone Support
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <CloseIcon style={{ fontSize: "medium" }} /> Free Subdomain
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <CloseIcon style={{ fontSize: "medium" }} /> Monthly Status Reports
          </Typography>
        </CardContent>
        <CardActions>
          <Button className="button" variant="contained" disableElevation>
            Button
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
function Container2() {
  return (
    <div className="innerdiv">
      <Card sx={{ width: "100%" }}>
        <CardContent>
          <Typography
            style={{ textAlign: "center" }}
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            PLUS
          </Typography>
          <Typography
            style={{ textAlign: "center" }}
            variant="h5"
            component="div"
          >
            {" "}
            $9 / Month
          </Typography>{" "}
          <hr />
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <DoneIcon style={{ fontSize: "medium" }} /> 5 USer
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <DoneIcon style={{ fontSize: "medium" }} /> 5GB Storage
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <DoneIcon style={{ fontSize: "medium" }} /> Unlimited Public
            Projects
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <DoneIcon style={{ fontSize: "medium" }} /> Community Access
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <DoneIcon style={{ fontSize: "medium" }} /> Unlimited Private
            Projects
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <DoneIcon style={{ fontSize: "medium" }} /> Dedicated Phone Support
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <DoneIcon style={{ fontSize: "medium" }} /> Free Subdomain
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <CloseIcon style={{ fontSize: "medium" }} /> Monthly Status Reports
          </Typography>
        </CardContent>
        <CardActions>
          <Button className="button" variant="contained" disableElevation>
            Button
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
function Container3() {
  return (
    <div className="innerdiv">
      <Card sx={{ width: "100%" }}>
        <CardContent>
          <Typography
            style={{ textAlign: "center" }}
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            PRO
          </Typography>
          <Typography
            style={{ textAlign: "center" }}
            variant="h5"
            component="div"
          >
            {" "}
            $49 / Month
          </Typography>{" "}
          <hr />
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <DoneIcon style={{ fontSize: "medium" }} />
            <span style={{ fontWeight: "bolder" }}>Unlimited User</span>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <DoneIcon style={{ fontSize: "medium" }} /> 5GB Storage
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <DoneIcon style={{ fontSize: "medium" }} /> Unlimited Public
            Projects
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <DoneIcon style={{ fontSize: "medium" }} /> Community Access
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <DoneIcon style={{ fontSize: "medium" }} /> Unlimited Private
            Projects
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <DoneIcon style={{ fontSize: "medium" }} /> Dedicated Phone Support
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <DoneIcon style={{ fontSize: "medium" }} />{" "}
            <span style={{ fontWeight: "bolder" }}>Unlimited</span> Free
            Subdomains
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <DoneIcon style={{ fontSize: "medium" }} /> Monthly Status Reports
          </Typography>
        </CardContent>
        <CardActions>
          <Button className="button" variant="contained" disableElevation>
            Button
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
