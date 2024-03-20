import { Container, Row } from "react-bootstrap";

export const Banner = () => {
  return (
    <div>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>{`Hi I'm webcoded`}</h1>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
