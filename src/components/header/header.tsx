import { CSSProperties } from "react";

const styles:{[key:string]:CSSProperties} ={
    header:{
        margin:"0px",
        // border:"1px solid red",
        height:"50px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        // fontFamily:"roboto",
        color: "GrayText"
    }
}
const Header : React.FC = () => {
    return(
        <>
        <h1 style={styles.header}>To-Do App</h1>
        </>
    )
}

export default Header;