import React from 'react'
import Portfolio from '../AccountDetails/Portfolio'

const PortfolioIndex = ( { section, setSection } ) =>
{
  let CurrentPage;
  switch (section) {
    case 0:
      CurrentPage = <Portfolio setSection={setSection} />;
  }
  return <div>{CurrentPage}</div>;
}

export default PortfolioIndex

