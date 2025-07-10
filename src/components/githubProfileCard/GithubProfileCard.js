import React from "react";
import "./GithubProfileCard.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo, isHireable } from "../../portfolio";
import { Fade } from "react-reveal";

export default function GithubProfileCard({ prof }) {
  // reflect global flag
  prof.hireable = isHireable ? "Yes" : "No";

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="contact">
        <h1 className="prof-title">Lets Connect!</h1>

        <div className="row">
          {/* ---------- left column ---------- */}
          <div className="main-content-profile">
            {/* subtitle */}
            <p className="subTitle blog-subtitle">{contactInfo.subtitle}</p>

            {/* phone + email */}

            {contactInfo.email_address && (
              <><a
                className="contact-detail-email"
                href={`mailto:${contactInfo.email_address}`}
              >
                {contactInfo.email_address}
              </a><br /></>
            )}

            {contactInfo.number && (
              <a
                className="contact-detail"
                href={`tel:${contactInfo.number}`}
              >
                {contactInfo.number}
              </a>

            )}

            {/* location & hireable */}
            {prof.location && (
              <div className="location-div">
                <span className="desc-prof">{prof.location}</span>
              </div>
            )}

            <div className="opp-div">
              <span className="desc-prof">
                Open for opportunities: {prof.hireable}
              </span>
            </div>

            {/* social icons */}
            <SocialMedia />
          </div>

          {/* ---------- right column ---------- */}
          <div className="image-content-profile">
            <img
              src={prof.avatarUrl}
              alt={prof.name}
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
