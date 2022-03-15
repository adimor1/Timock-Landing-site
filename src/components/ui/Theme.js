import { createTheme } from "@material-ui/core";


const arcBlue = "#3be2ab";
const arcOrange= "#202124";
const arcGrey="#868686";
export default createTheme({
    palette:{
        common:{
            blue:`${arcBlue}`,
            orange:`${arcOrange}`
        },
        primary:{
            main:`${arcBlue}`,
        },
        secondary:{
            main:`${arcOrange}`,
        }
    },
    typography:{
        tab:{
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem",
        },
        download: {
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color:"white"
        },
        h2:{
            fontFamily:"Raleway", 
            fontWeight:700, 
            fontSize: "3.5rem",
            color: "black",
            lineHeight:1.5
        },
        h5:{
            fontFamily:"Raleway", 
            fontSize: "1.7rem",
            color: arcGrey,
            fontWeight: 700
        },
        subtitle2:{
            fontSize: "2rem",
            color: arcGrey,
            fontWeight: 300
        },
        learnButton:{
            borderColor: arcBlue,
            color: arcBlue,
            borderWidth:2,
            textTransform: "none",
            borderRadius:50,
            fontFamily:"Roboto",
            fontWeight:"bold",
          },
          body1:{
             fontSize:"1.25em",
             color: arcGrey,
             fontWeight: 300
          }
    }
})