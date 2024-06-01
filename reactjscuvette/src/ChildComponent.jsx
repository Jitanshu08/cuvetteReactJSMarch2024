import PropTypes from "prop-types";
function ChildComponent(props) {
  const { jayant, myRank, handleClick } = props;

  return (
    <>
      <div style={{ background: "magenta" }}>
        <h1>Children Component</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut excepturi
          aspernatur est sapiente possimus sint accusantium eum doloremque ea
          blanditiis!
        </span>
        <h1>{jayant}</h1>
        <h4>{myRank}</h4>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </>
  );
}

export default ChildComponent;

// function add(a, b) {
//   return a + b;
// }

// add(2, 3);

// * Props (short for properties) are a way to pass data from a parent component to a child component in React. Props are read-only, meaning that a child component should not modify them.

// props = {
//   jayant : message
// }

ChildComponent.propTypes = {
  jayant: PropTypes.string.isRequired,
  myRank: PropTypes.number.isRequired,
  handleClick: PropTypes.object,
};


// placeholder

