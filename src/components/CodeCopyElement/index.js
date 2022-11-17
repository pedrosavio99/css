import React from "react";
import { CodeCopyDiv } from "./CodeCopy";

const CodeCopyComponent = () => {
  return (
    <>
      <CodeCopyDiv>
        <div className="left">
          <h1> Base page CSS </h1>
          <div class="text-boxes">
            <div class="text-box JSBox">
              <div class="topic">JavaScript Code:</div>
              <textarea id="JSBox" readonly>
                Add JavaScript Code here
              </textarea>
              <button id="JSButton">Copy Codes</button>
            </div>
          </div>
          <div class="text-boxes">
            <div class="text-box JSBox">
              <div class="topic">JavaScript Code:</div>
              <textarea id="JSBox" readonly>
                Add JavaScript Code here
              </textarea>
              <button id="JSButton">Copy Codes</button>
            </div>
          </div>
          <div class="text-boxes">
            <div class="text-box JSBox">
              <div class="topic">JavaScript Code:</div>
              <textarea id="JSBox" >
                Add JavaScript Code here
              </textarea>
              <button id="JSButton">Copy Codes</button>
            </div>
          </div>
        </div>
        
      </CodeCopyDiv>
    </>
  );
};
export default CodeCopyComponent;
