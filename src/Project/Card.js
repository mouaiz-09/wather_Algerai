import { useTranslation } from 'react-i18next';
//Mui Copmenets
import Typography from "@mui/material/Typography";
import CloudIcon from "@mui/icons-material/Cloud";
import axios from "axios";
import { useState, useEffect } from "react";



export default function CardWather({Data}) {
  /*State of water */
  const [Weather, setWaeter] = useState({
    temp: null,
    Temp_max: null,
    Temp_min: null,
    description: "",
    Date: "",
    Loation: "",
    iconCode: null,
  });
  /*==== State of water == */

  /*------Transltion---------  */
  const { t, i18n } = useTranslation();

   useEffect(()=>{
      console.log(Data);
      i18n.changeLanguage(Data)
     
    
      } , [Data,i18n])
 
  /*======Transltion  ===*/

  /* Response from api */
  useEffect(() => {
    var CancelTokenCode;
    

    // =========Get data================================
    const UrlApi =
      "https://api.openweathermap.org/data/2.5/weather?q=Sour%20El%20Ghozlane,DZ&appid=32f91e41100758513c7ab2c2c52fa8b3&units=metric&lang="+Data;
    axios
      .get(UrlApi, {
        cancelToken: new axios.CancelToken((c) => (CancelTokenCode = c)),
      })
      .then((Response) => {
        
   // تاريخ اليوم بالعربي
      
   const today = new Date();
   const options = {
     weekday: "long",
     year: "numeric",
     month: "long",
     day: "numeric",
   };
   const dateInArabic = today.toLocaleDateString(Data, options);
        setWaeter({
          ...Weather,
          temp: Response.data.main.temp,
          Temp_max: Response.data.main.temp_max,
          Temp_min: Response.data.main.temp_min,
          description: Response.data.weather[0].description,
          iconCode: Response.data.weather[0].icon,
          Loation: "",
          Date:dateInArabic
        });
      })
      .catch((err) => Error("erro in ftech" + err));

    //=====Get data end===

  

    /* clen up*/
    return () => {
      console.log("clen up colleng");

      CancelTokenCode();
    };
  }, [Data]);
 ;
  
  return (
    <>
      {/*Card */}
      <Typography
      fontWeight={"700"} variant='h2' style={{color:'white' , fontFamily:"Gulzar" , marginBottom:"30px" ,
     
      }} 
      >
          {t("weather")}
       </Typography>
      <div
        style={{
          background: "rgb(28 52 91 / 36%)",
          color: "whitesmoke",
          padding: "15px",
          borderRadius: "15px",
          width: "100%",
          boxShadow: "0px 0px 30px rgba(0, 0,0 ,0.1 )",
        }}
      >
        {/*Card Conetent */}
        <div   dir={Data ==="ar" ?"rtl" : "ltf"}>
          {/*Citey & Date */}
          <div
            style={{
              display: "flex",
              alignItems: "end",
              justifyContent: "start",
              gap: "15px",
            }}
            dir={Data ==="ar" ?"rtl" : "ltf"}
          >
            <Typography variant="h2" fontWeight={"700"}>
             {t("sour el gzlane")}
             
            </Typography>
            <Typography
              variant="h6"
              fontWeight={"600"}
              style={{ marginRight: "15px" }}
            >
              {Weather.Date}
            </Typography>
          </div>
          {/*=== Citey & Date  === */}

          <hr style={{ color: "whitesmoke" }} />

          {/** card conent  */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
             
            }}
            dir={Data ==="ar" ?"rtl" : "ltf"}
          >
            {/*Degerre & descripten */}
            <div>
              {/*Tepm +IMgTemp */}
              <div    >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                   
                  }}
                  dir={Data ==="ar" ?"rtl" : "ltf"}
                >
                  <Typography
                    variant="h1"
                    textAlign={"center"}
                    fontWeight={"700"}
                  >
                    {Math.round(Weather.temp)}°
                  </Typography>
                  <img
                    src={`https://openweathermap.org/img/wn/${Weather.iconCode}@2x.png`}
                    alt="Waether imge"
                  ></img>
                </div>
                <Typography
                  variant="h6"
                  textAlign={"center"}
                  fontWeight={"600"}
                >
                  {Weather.description}
                </Typography>
                {/*Min  & Max */}
                <div
                  style={{
                    display: "flex ",
                    justifyContent: "right",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Typography variant="h6" textAlign={"end"} fontWeight={"500"}>
                    {t("min")} :°{Weather.Temp_min}
                  </Typography>

                  <h4>|</h4>

                  <Typography variant="h6" textAlign={"end"} fontWeight={"500"}>
                    {t("max")} : °{Weather.Temp_max}
                  </Typography>
                </div>
                {/*== Min  & Max ==*/}

                {/*TODO: Imge from api */}
              </div>
              {/*=======Tepm +IMg Temp  =====*/}
            </div>
            {/*==== Degerre & descripten ====*/}

            {/*ICon Cloud */}
            <div>
              <CloudIcon style={{ fontSize: "300px" }} />
            </div>
            {/*===  ICon Cloud ===*/}
          </div>
          {/** ====card conent === */}
        </div>
        {/*=== Card Conetent ===*/}
      </div>
      {/*===Card ===*/}
    </>
  );
}
