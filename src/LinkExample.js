import React from "react";
import ReactHtmlParser from "react-html-parser";
import { sanitize } from "dompurify";

export const LinkExample = () => {
  const unsanitized = "<a href=\"javascript:alert('xss')\"><b>click me</b></a>";
  const sanitized = sanitize(unsanitized);
  const sanitizedAndWhitelistTag = sanitize(unsanitized, {
    ALLOWED_TAGS: ["a"]
  });
  return (
    <>
      <div className="section">
        unsanitized : {ReactHtmlParser(unsanitized)}
      </div>
      <div className="section">sanitized : {ReactHtmlParser(sanitized)}</div>
      <div className="section">
        sanitizedAndWhitelistTag : {ReactHtmlParser(sanitizedAndWhitelistTag)}
      </div>
    </>
  );
};