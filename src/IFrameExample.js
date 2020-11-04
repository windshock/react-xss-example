import React from "react";
import ReactHtmlParser from "react-html-parser";
import { sanitize } from "dompurify";

export const IFrameExample = () => {
  const unsanitized = "<iframe src=\"javascript:alert('xss')\" />";
  const sanitized = sanitize(unsanitized);
  return (
    <>
      <div className="section">{ReactHtmlParser(unsanitized)}</div>
      <div className="section">{ReactHtmlParser(sanitized)}</div>
    </>
  );
};
