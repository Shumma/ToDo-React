import React, { useState } from "react";
import RadioButtonForm from "./RadioButtons.jsx"

function TaskForm() {
    return (
        <form>
            <div className="TaskForm">
                <p className="TitleForm"> New Task </p>
                <p className="DescForm">
                    Please complete the fields for the creation of the new task.
                </p>

                <div>
                    <div>
                        <span>Task Name</span> 
                        <br/>
                        <input
                            type="text"
                            name="task"
                            id="task"
                            autoComplete="task"
                            placeholder="First Module"
                        />
                    </div>    
                    <div>
                        <span>Task Category</span>
                        <br/>
                        <RadioButtonForm/>
                    </div>
                    <div>
                        <span>Description</span> 
                        <br/>
                        <input
                            type="text"
                            name="desc"
                            id="desc"
                            autoComplete="desc"
                            placeholder="Something"
                        />
                    </div>    
                </div>

            </div>
        </form>
    );
}

export default TaskForm;