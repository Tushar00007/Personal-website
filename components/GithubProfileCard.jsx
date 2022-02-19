import React from "react";

import { Card, Col, Row, Container } from "reactstrap";
import {  MdCall } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import SocialLinks from "../components/SocialLinks";
import { Button } from "reactstrap";
import Image from "next/image";

const GithubProfileCard = ({ prof }) => {
	return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img
                src={prof.avatar_url}
                style={{ width: "250px" }}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Reach Out to me!</h2>
              <p className="lead text-white mt-3">
                Discuss A Project Or Just Want To Say Hi? My Inbox Is Open For
                All
              </p>
              <p className="text-white mt-3">{prof.bio}</p>
              <div
                style={{
                  margin: "30px 0px",
                }}
              >
                <div
                  style={{
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <button
                    className="btn-icon-only rounded-circle facebook"
                    color="facebook"
                    target="_blank"
                    rel="noopener"
                    aria-label="email"
                    onClick={() => {
                      window.open("mailto:rahulkonda612@gmail.com", "_blank");
                    }}
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-envelope" />
                    </span>
                  </button>
                  <a
                    className="text-white"
                    href="mailto:rahulkonda612@gmail.com"
                  >
                    rahulkonda612@gmail.com
                  </a>
                </div>

                <div
                  style={{
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    marginTop: "30px",
                  }}
                >
                  <button
                    className="btn-icon-only rounded-circle whatsapp"
                    color="whatsapp"
                    // href={socialLinks.email}
                    target="_blank"
                    rel="noopener"
                    aria-label="phone"
                    onClick={() => {
                      window.open("callto:9834390308", "_blank");
                    }}
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-phone" />
                    </span>
                  </button>
                  <a className="text-white" href="callto:9834390308">
                    9834390308
                  </a>
                </div>
              </div>

              {/* <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
								<i className="ni ni-pin-3 text-info mr-2" />
								{prof.location}
							</div> */}
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
