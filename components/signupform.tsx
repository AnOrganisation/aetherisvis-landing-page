import React from "react";

export default function SignupForm() {
  return (
    <div id="mc_embed_shell">
      <link
        href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
        rel="stylesheet"
        type="text/css"
      />
      <style>
        {`
          #mc_embed_signup {
            clear: left;
            font: 14px Helvetica, Arial, sans-serif;
            width: 500px;
            max-width: 600px; /* Adjust container width for desktop screens */
            margin: 0 auto; /* Center the form */
            box-sizing: border-box;
          }
          #mc_embed_signup h2, #mc_embed_signup label {
            color: white;
          }
          #mc_embed_signup .asterisk {
            color: red;
          } 
          #mc_embed_signup input {
            background-color: #fff;
            color: #000;
            border-radius: 12px;
            padding: 12px;
            border: 1px solid #ccc;
            font-size: 16px;
            width: 100%; /* Full width for smaller screens */
            max-width: 400%; /* Use full width of the parent container */
            box-sizing: border-box;
            margin: 0 auto; /* Center alignment */
          }
          #mc_embed_signup input::placeholder {
            color: #888;
          }
          #mc_embed_signup .button {
            background-color: #fff;
            color: #ff6600;
            font-weight: bold;
            border: none;
            border-radius: 12px;
            text-align: center;
            line-height: 1.5;
            font-size: 16px;
            cursor: pointer;
            display: inline-block;
            width: 200px;
            max-width: 200px;
            box-sizing: border-box;
          }
          #mc_embed_signup .button:hover {
            background-color: #f0f0f0;
          }

          /* Responsive Styles */
          @media (max-width: 768px) {
            #mc_embed_signup {
              font-size: 14px;
              padding: 10px;
              width: 300px;
            }
            #mc_embed_signup h2 {
              font-size: 20px;
            }
            #mc_embed_signup input, #mc_embed_signup .button {
              font-size: 14px;
              max-width: 100%;
            }
          }

          @media (max-width: 480px) {
            #mc_embed_signup {
              padding: 8px;
            }
            #mc_embed_signup h2 {
              font-size: 18px;
              text-align: center;
            }
            #mc_embed_signup label {
              font-size: 14px;
            }
            #mc_embed_signup input, #mc_embed_signup .button {
              font-size: 14px;
              width: 150px;
            }
          }
        `}
      </style>
      <div id="mc_embed_signup">
        <form
          action="https://aetherisvis.us14.list-manage.com/subscribe/post?u=3f976642dc1ae093f18045713&amp;id=dd04c89ead&amp;f_id=00c39de1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
                placeholder="Enter your email"
                autoComplete="email"
              />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">First Name</label>
              <input
                type="text"
                name="FNAME"
                className="text"
                id="mce-FNAME"
                placeholder="Enter your first name"
                autoComplete="given-name"
              />
            </div>
            <div hidden>
              <input type="hidden" name="tags" value="7005128" />
            </div>
            <div id="mce-responses" className="clear foot">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div>
            <div
              aria-hidden="true"
              style={{ position: "absolute", left: "-5000px" }}
            >
              <input
                type="text"
                name="b_3f976642dc1ae093f18045713_dd04c89ead"
                tabIndex={-1}
                defaultValue=""
              />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                  value="Subscribe"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <script
        type="text/javascript"
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
      ></script>
    </div>
  );
}
