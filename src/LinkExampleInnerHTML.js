import React from "react";
import { sanitize } from "dompurify";
// 테스트 코드는 아래를 참고
// https://github.com/cure53/DOMPurify/blob/307c7d0dde17a2d1f27049d6d39add24144ba87c/test/test-suite.js

export const LinkExampleInnerHTML = () => {
  const unsanitized =
    '<a href="fb://profile/33138223345" onClick=alert("xss") style="color:red;text-decoration:none;text-transform:uppercase;"><b>click me</b></a>';
  const sanitized = sanitize(unsanitized);
  const sanitizedAndWhitelistTag = sanitize(unsanitized, {
    ALLOWED_TAGS: ["a"],
    ALLOWED_ATTR: ["href", "onClick"], // onclick은 허용하지 않거나 사용자 입력 추가 불가
    ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|fb|mailto|tel|callto|cid|xmpp|xxx):|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i
  });
  // dompurify 지원 내용은 test suite에서 확인 가능
  // https://github.com/cure53/DOMPurify/blob/main/test/test-suite.js#L266
  return (
    <>
      <div
        className="section"
        dangerouslySetInnerHTML={{
          __html: "dangerouslySetInnerHTML AND unsanitized : " + unsanitized
        }}
      ></div>
      <div
        className="section"
        dangerouslySetInnerHTML={{
          __html: "dangerouslySetInnerHTML AND sanitized : " + sanitized
        }}
      ></div>
      <div
        className="section"
        dangerouslySetInnerHTML={{
          __html:
            "dangerouslySetInnerHTML AND sanitizedAndWhitelistTag : " +
            sanitizedAndWhitelistTag
        }}
      ></div>
    </>
  );
};
