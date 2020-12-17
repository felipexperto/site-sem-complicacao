import React from "react";

import Header from 'src/components/layout/header';
import Banner from 'src/components/layout/banner';
import Footer from 'src/components/layout/footer';
import { Container, ContainerFull } from 'styles';
import { isHome } from 'src/utils/helpers';

const App = ({ location, title, children, bgColor }) => {
  const headerHeight = '72px';
  
  return (
    <ContainerFull backgroundColor={bgColor}>
      <Header
        height={headerHeight}
        location={location}
        title={title}
      />
      {isHome() && <Banner paddingTop={headerHeight} />}
      <Container direction='column'>
        {children}
      </Container>
      <Footer />
    </ContainerFull>
  )
}

export default App;