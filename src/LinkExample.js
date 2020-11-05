import React from "react";
import ReactHtmlParser from "react-html-parser";
import { sanitize } from "dompurify";

export const LinkExample = () => {
  const unsanitized =
    '<a href="fb://profile/33138223345" onClick="alert("xss");" style="color:red;text-decoration:none;text-transform:uppercase;"><b>click me</b></a>';
  // onclick은 react-html-parse에서 보안 위협으로 간주하여 html로 파싱하지 않음
  // https://github.com/wrakky/react-html-parser/issues/8
  const sanitized = sanitize(unsanitized);
  const sanitizedAndWhitelistTag = sanitize(unsanitized, {
    ALLOWED_TAGS: ["a"],
    ALLOWED_ATTR: ["href", "onClick"],
    ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|fb|mailto|tel|callto|cid|xmpp|xxx):|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i
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
