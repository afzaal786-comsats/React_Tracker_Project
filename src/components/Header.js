import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
    const onClick = (e) =>{
        
console.log("click");
    }
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
      
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};
// Css in Js
// const headingStyle ={
//      color: 'red'
// }

export default Header;
