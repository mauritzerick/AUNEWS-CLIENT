import React from "react";
import logo from "./images/favicon.ico";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>
              <img class="logo" src={logo} /> BNPM NEWS
            </Heading>
            <FooterLink>
              <h4 style={{ marginLeft: "10px" }}>
                {" "}
                BNPM News is a public news service in Australia produced by the
                News and Current Affairs division of the AU News. The division is responsible for all news-gathering
                and production of news output for BNPM television, radio and
                online services
              </h4>
            </FooterLink>
          </Column>

          <Column>
            <Heading>Sections</Heading>
            <FooterLink href="/news/general">GENERAL</FooterLink>
            <FooterLink href="/news/business">BUSINESS</FooterLink>
            <FooterLink href="/news/sports">SPORTS</FooterLink>
            <FooterLink href="/weather">WEATHER</FooterLink>
            <FooterLink href="/news/entertainment">ENTERTAINMENT</FooterLink>
            <FooterLink href="/news/science" className="newsSection">
              SCIENCE
            </FooterLink
>            <FooterLink href="/crypto">CRYTPTO</FooterLink>
            <FooterLink href="/chart">CHART</FooterLink>
            <FooterLink href="/justin">JUSTIN</FooterLink>
          </Column>

          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  data-component="Facebook"
                  class="_2iH5w _23HBT"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M9.668 21h3.335v-8.996h2.502L16 9.194h-2.997V7.157c0-.759.309-1.346 1.26-1.346h1.494V3h-2.088c-3.24.013-4 1.99-3.995 3.937l-.006 2.257H8v2.81h1.668V21z"
                  ></path>
                </svg>
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  data-component="Instagram"
                  class="_2iH5w _23HBT"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M12.986 3c.997.002 1.5.008 1.942.022l.187.006.595.025c.958.044 1.612.196 2.185.419.591.23 1.093.537 1.594 1.038.5.5.808 1.002 1.038 1.594.222.572.374 1.227.418 2.184l.025.595.007.187c.013.443.02.945.021 1.943l.001.713v1.26c-.003.997-.009 1.5-.022 1.942l-.007.187c-.006.187-.015.373-.025.595-.044.958-.196 1.612-.418 2.184a4.41 4.41 0 0 1-1.038 1.595c-.5.5-1.003.808-1.594 1.038-.573.222-1.227.374-2.185.418l-.595.025-.187.007c-.443.013-.945.02-1.942.021l-.714.001h-1.259a66.95 66.95 0 0 1-1.943-.022l-.187-.007a65.575 65.575 0 0 1-.594-.025c-.958-.044-1.613-.196-2.185-.418a4.41 4.41 0 0 1-1.594-1.038 4.41 4.41 0 0 1-1.038-1.595c-.223-.572-.375-1.226-.419-2.184l-.025-.595-.006-.187c-.014-.443-.02-.945-.022-1.942v-1.973c.002-.998.008-1.5.022-1.943l.006-.187.025-.595c.044-.957.196-1.612.419-2.184A4.412 4.412 0 0 1 4.51 4.51c.5-.5 1.002-.808 1.594-1.038.572-.223 1.227-.375 2.185-.419l.594-.025.187-.006c.443-.014.945-.02 1.943-.022h1.973zm-.45 1.621h-1.315l-.432.001a44.248 44.248 0 0 0-2.427.051c-.877.04-1.354.187-1.67.31-.42.163-.72.358-1.036.673-.315.315-.51.615-.673 1.035-.123.317-.27.794-.31 1.671-.034.76-.047 1.094-.05 2.427l-.002.432v1.556l.001.432c.004 1.334.017 1.668.051 2.427.04.877.187 1.354.31 1.671.163.42.358.72.673 1.035.315.315.615.51 1.035.673.317.123.794.27 1.671.31.76.035 1.094.047 2.427.051l.432.001h1.988a44.337 44.337 0 0 0 2.427-.052c.877-.04 1.354-.186 1.671-.31.42-.163.72-.358 1.035-.673.315-.315.51-.615.673-1.035.123-.317.27-.794.31-1.671l.022-.512.007-.19a53.6 53.6 0 0 0 .022-1.725l.001-.431v-1.989a56.217 56.217 0 0 0-.023-1.725l-.007-.19a69.007 69.007 0 0 0-.022-.512c-.04-.877-.186-1.354-.31-1.67a2.788 2.788 0 0 0-.673-1.036 2.789 2.789 0 0 0-1.035-.673c-.317-.123-.794-.27-1.671-.31a44.25 44.25 0 0 0-2.427-.05l-.431-.002h-.241zm-.52 2.737a4.622 4.622 0 1 1 0 9.243 4.622 4.622 0 0 1 0-9.243zm0 1.621a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm4.781-2.872a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16z"
                  ></path>
                </svg>
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  data-component="Twitter"
                  class="_2iH5w _23HBT"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M20.516 5.31c-.494.321-1.628.787-2.187.787v.001A3.476 3.476 0 0 0 15.794 5c-1.937 0-3.507 1.592-3.507 3.554 0 .273.03.538.088.794-2.627-.07-5.5-1.405-7.23-3.69-1.063 1.866-.143 3.941 1.064 4.697-.413.032-1.174-.048-1.532-.402-.024 1.239.564 2.88 2.706 3.475-.413.224-1.143.16-1.46.112.11 1.046 1.555 2.412 3.134 2.412-.563.66-2.68 1.857-5.057 1.476A10.433 10.433 0 0 0 9.486 19c5.658 0 10.053-4.648 9.816-10.382l-.001-.02.001-.044-.002-.052a6.097 6.097 0 0 0 1.7-1.82c-.286.16-1.145.48-1.945.56.513-.281 1.273-1.2 1.461-1.931z"
                  ></path>
                </svg>
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  data-component="Youtube"
                  class="_2iH5w _23HBT"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M12.312 6c.59.003 1.95.014 3.397.06l.485.016.243.009.483.02c.48.022.95.049 1.381.081.352.043 1.12.047 1.804.783.54.561.715 1.835.715 1.835l.004.033c.026.227.176 1.593.176 2.959l-.001 1.597a29.206 29.206 0 0 1-.175 2.764l-.004.032-.007.05c-.04.24-.232 1.29-.708 1.785-.685.737-1.452.74-1.804.783-.576.043-1.217.076-1.865.102l-.486.018c-1.778.062-3.486.071-3.87.073h-.092c-.26-.003-4.71-.048-6.108-.186-.4-.077-1.3-.053-1.985-.79-.54-.56-.715-1.835-.715-1.835l-.004-.032A28.69 28.69 0 0 1 3 13.197l.001-1.596c.013-1.299.15-2.548.175-2.764l.004-.033s.176-1.274.715-1.835c.685-.736 1.452-.74 1.804-.783.432-.032.9-.059 1.381-.08l.483-.021c1.7-.067 3.438-.082 4.13-.085h.619zM10.09 9.673v5.088L15 12.226l-4.91-2.553z"
                  ></path>
                </svg>
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>

          <Column>
            <Heading>More From BNPM</Heading>
            <FooterLink>Contact BNPM News: </FooterLink>
            <FooterLink href="#">Bhavya</FooterLink>
            <FooterLink href="#">Nelly</FooterLink>
            <FooterLink href="#">Priyanka</FooterLink>
            <FooterLink href="#">Mauritz</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
