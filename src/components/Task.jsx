import React, { useState } from "react";

function Task({ id, title, description, status, onComplete, onInProgress, onDelete, priority }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="task-card">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>{title}</h3>
        <div>
          <button onClick={toggleExpansion}>{isExpanded ? "Close" : "View"}</button>
          &nbsp;&nbsp;&nbsp;
          <button onClick={() => onDelete(id)}>Delete</button> 
        </div>
      </div>
      {isExpanded && (
        <div>
          <p>{description}</p>
          <span>Status: {status}</span>
          <span>Priority: {priority}</span>
          {status === "To Do" && (
            <>
              <button onClick={() => onInProgress(id)}>Start</button> 
            </>
          )}
          {status === "In Progress" && (
            <button onClick={() => onComplete(id)}>Complete</button>
          )}
          
        </div>
      )}
    </div>
  );
}

export default Task;
