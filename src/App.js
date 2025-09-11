import "./App.css";
import { Button } from "@mui/material";
import { Themproject } from "./Context/ProjectContext";
import { Analytics } from "@vercel/analytics/react"

//Compenets
import CardWather from "./Project/Card";

// MUI Compenets
import { ThemeProvider } from "@emotion/react";
import Container from "@mui/material/Container";
import { useState } from "react";


function App() {
 //transltion
 const [Lange , setLange] = useState('ar')
 function HendelClick() {
  if (Lange ==="ar") {
    setLange("en")
  }
  else setLange('ar')
 }
  
  return (
  <>
    {/*---Vercel----*/}
            <Analytics/> 
    {/*----Vercel---*/}
    <div className="App">
      <ThemeProvider theme={Themproject}>
        <Container maxWidth="md">
          {/*Container Conten */}
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection:"column"      ,
              gap:"10px"
                   }}
          >
            {/*Card */}
            <CardWather  Data ={Lange}  />
            {/*=== Card ===*/}
            <div style={{textAlign:"start" , width:"100%"}}>

            <Button variant="text"  
            onClick={HendelClick}
              style={{color:"whitesmoke", fontSize:"15px" , fontWeight:"800"}}> 
                    {Lange ==="ar" ? "انجليزي" : "Arabic"}
           </Button>
            </div>
          </div>

          
          {/*==== Container Conten ====*/}
        </Container>
      </ThemeProvider>
    </div>
    </>
  );
}

export default App;
