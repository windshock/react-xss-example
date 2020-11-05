import React, { useState } from "react";
import { IFrameExample } from "./IFrameExample";
import { LinkExample } from "./LinkExample";
import { LinkExampleInnerHTML } from "./LinkExampleInnerHTML";

export const App = () => {
  const [type, setType] = useState("");
  return (
    <>
      <header>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Select example</option>
          <option value="iframe">XSS via iframe src</option>
          <option value="link">XSS via link href with react-html-parser</option>
          <option value="link2">
            XSS via link href with dangerouslySetInnerHTML
          </option>
        </select>
      </header>
      <main>
        {type === "iframe" && <IFrameExample />}
        {type === "link" && <LinkExample />}
        {type === "link2" && <LinkExampleInnerHTML />}
      </main>
    </>
  );
};
