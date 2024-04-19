import React, { useState } from "react";

	//Initializing Objects, Variables, & useStates:

const List = () => {
	  //Dynamic Objects, Variables, & useStates:
    const [input, setInput] = useState("");
    const [choreList, setChoreList] = useState([]);

	  //Functions
    const addChore = () => {
        if (input.trim()) {
            setChoreList([...choreList, input]);
            setInput(""); // Clear the input after adding a chore
        }
    };

    const removeChore = () => {
      let newChoreList = choreList.slice(0,-1);
      setChoreList(newChoreList);
      console.log(newChoreList)

    

    }

  
  	//Returns
    return (
        <div>
            <input
                type="text"
                placeholder="Type chore here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addChore}>Add Chore</button>
            <button onClick={removeChore}>Remove Chore</button>
            <ul>
                {choreList.map((chore, index) => (
                <li key={index}>{chore}</li>
                ))}
            </ul>
            {choreList.length == 0 ? <div>No tasks, add a task!</div> : null}
        </div>
    );
};

export default List;
