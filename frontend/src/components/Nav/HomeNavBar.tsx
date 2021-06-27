import * as React from 'react';
import { Button, Container, Navbar, Nav } from 'react-bootstrap';
import { CloudUpload } from 'react-bootstrap-icons';
import { withRouter, RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps {
  onUploadClick: () => void;
}

/**
 * Navigation bar with upload button.
 */
const HomeNavBar = (props: Props): JSX.Element => {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="https://jeffreyca.github.io/spleeter-web/">Spleeter Web (Demo)</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link target="_blank" rel="noopener noreferrer" href="https://github.com/JeffreyCA/spleeter-web">
            GitHub
          </Nav.Link>
          <Nav.Link href="#">
            <img
              src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fjeffreyca.github.io%2Fspleeter-web%2F&count_bg=%23ACACAC&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=Hits&edge_flat=false"
              style={{ position: 'relative', top: '50%', transform: 'translateY(-50%)' }}
            />
          </Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="text-right">
          <Nav className="ml-auto">
            <Button onClick={props.onUploadClick} variant="success mr-3">
              Upload <CloudUpload />
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default withRouter(HomeNavBar);
