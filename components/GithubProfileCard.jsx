import React from "react";

import { Card, Col, Row, Container } from "reactstrap";
import {  MdCall } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import SocialLinks from "../components/SocialLinks";
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
                style={{ width: "280px" }}
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
              <p>
                <SiGmail style={{ color: "midnightblue" }} />
                <a
                  href="mailto:rahulkonda612@gmail.com"
                  className="text-white mt-3"
                >   Rahulkonda612@gmail.com
                </a>
              </p>
              <p >
                <MdCall style={{ color: "midnightblue" }} />
                <a href="callto:9834390308" className="text-white mt-3">   9834390308
                </a>
              </p>
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
