//Mui Copmenets
import Typography from "@mui/material/Typography";
import CloudIcon from '@mui/icons-material/Cloud';

export default function CardWather(params) {
  return (
    <>
      {/*Card */}
      <div
        style={{
          background: "rgb(28 52 91 / 36%)",
          color: "whitesmoke",
          padding: "15px",
          borderRadius: "15px",
          width:"100%", 
          boxShadow:"0px 0px 30px rgba(0, 0,0 ,0.1 )"
        }}
      >
        {/*Card Conetent */}
        <div>
          {/*Citey & Date */}
          <div
            style={{
              display: "flex",
              alignItems: "end",
              justifyContent: "start",
              gap: "15px",
            }}
            dir="rtl"
          >
            <Typography variant="h2" fontWeight={"700"}>
              الجزائر
            </Typography>
            <Typography
              variant="h6"
              fontWeight={"600"}
              style={{ marginRight: "15px" }}
            >
              الاثنين ٢٠٢٥ ٠٩ ٠٢
            </Typography>
          </div>
          {/*=== Citey & Date  === */}

          <hr style={{ color: "whitesmoke" }} />

          {/** card conent  */}
             <div  style={{display:"flex" , justifyContent:"space-around" , alignItems:"center" , direction:"rtl"}}>
               {/*Degerre & descripten */}
                    <div>
                        {/*Tepm +IMgTemp */}
                        <div> 
                                <Typography variant="h1" textAlign={"center"} fontWeight={"700"}>
                                      38°           
                               </Typography>
                                <Typography variant="h6" textAlign={"center"} fontWeight={"600"} >
                                   حرارة عالية مع رطوبة           
                               </Typography>
                               {/*Min  & Max */}
                               <div style={{display:"flex " , justifyContent:"right" , alignItems:"center" , gap:"10px"}}>
                                     <Typography variant="h6" textAlign={"end"} fontWeight={"500"}>
                                               الصغرى :38          
                                     </Typography>

                                            <h4>|</h4>
                                          
                                     <Typography variant="h6" textAlign={"end"} fontWeight={"500"}>
                                               الكبرى :48          
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
                    <CloudIcon  style={{fontSize:"200px"}}/>
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
