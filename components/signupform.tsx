"use client";

import React, { useEffect } from "react";

export default function SignupForm() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://vlvqfc-cmpzourl.maillist-manage.com/js/optin.min.js";
        script.onload = () => {
          (window as any).setupSF(
            "sf3z9f5764ea15cc38964264a0efb104f120075862b211144d617be07a45c2692347",
            "ZCFORMVIEW",
            false,
            "acc",
            false,
            "2"
          );
        };
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        };
      }, []);

  return (
    <div
      id="sf3z9f5764ea15cc38964264a0efb104f120075862b211144d617be07a45c2692347"
      data-type="signupform"
      style={{ opacity: 1 }}
    >
      <div id="customForm">
        <div
          className="quick_form_9_css"
          style={{
            backgroundColor: "#ffffff",
            width: "350px",
            zIndex: 2,
            fontFamily: "Arial",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "#ebebeb",
            overflow: "hidden",
          }}
          data-name="SIGNUP_BODY"
        >
          <form
            method="POST"
            id="zcampaignOptinForm"
            style={{ margin: "0px", width: "100%", padding: "0px 15px" }}
            action="https://vlvqfc-cmpzourl.maillist-manage.com/weboptin.zc"
            target="_zcSignup"
          >
            <div
              style={{
                position: "relative",
                margin: "10px 0 15px",
                width: "225px",
                height: "30px",
                display: "inline-block",
              }}
              className="SIGNUP_FLD"
            >
              <input
                type="text"
                style={{
                  fontSize: "14px",
                  border: "1px solid #ebebeb",
                  width: "100%",
                  height: "100%",
                  outline: "none",
                  padding: "5px 10px",
                  color: "#888888",
                  backgroundColor: "#ffffff",
                  boxSizing: "border-box",
                }}
                placeholder="Email"
                name="CONTACT_EMAIL"
                id="EMBED_FORM_EMAIL_LABEL"
              />
            </div>
            <div
              style={{
                position: "relative",
                width: "90px",
                height: "30px",
                textAlign: "left",
                display: "inline-block",
                margin: "0px 0px 10px",
              }}
              className="SIGNUP_FLD"
            >
              <input
                type="submit"
                id="zcWebOptin"
                value="Join Now"
                style={{
                  textAlign: "center",
                  width: "100%",
                  height: "100%",
                  border: "0px",
                  color: "#ffffff",
                  cursor: "pointer",
                  outline: "none",
                  fontSize: "14px",
                  backgroundColor: "#FFB46E",
                }}
                name="SIGNUP_SUBMIT_BUTTON"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
