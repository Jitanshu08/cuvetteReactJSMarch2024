import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const message = "Hey, I am your parent!";
  const myRank = 12;

  const handleClick = () => {
    alert("helloooooo...");
  };

  return (
    <>
      <h1>ParentComponent</h1>
      <ChildComponent
        handleClick={handleClick}
        jayant={message}
        myRank={myRank}
      />
    </>
  );
}

export default ParentComponent;
