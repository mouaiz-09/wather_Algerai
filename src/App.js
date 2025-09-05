import "./App.css";
import { Button } from "@mui/material";
import { Themproject } from "./Context/ProjectContext";

//Compenets
import CardWather from "./Project/Card";

// MUI Compenets
import { ThemeProvider } from "@emotion/react";
import Container from "@mui/material/Container";

function App() {
 
  
  
  return (
    <div className="App">
      <ThemeProvider theme={Themproject}>
        <Container maxWidth="sm">
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
            <CardWather   />
            {/*=== Card ===*/}
            <div style={{textAlign:"start" , width:"100%"}}>

            <Button variant="text"  style={{color:"whitesmoke"}}> انجليزي</Button>
            </div>
          </div>

          
          {/*==== Container Conten ====*/}
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
