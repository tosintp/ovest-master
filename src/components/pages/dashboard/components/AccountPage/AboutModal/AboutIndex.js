import React from 'react'
import AboutOvest from '../AccountDetails/AboutOvest';

const AboutIndex = ({section,setSection}) =>
{
  let CurrentPage;
  switch ( section )
  {
    case 0:
      CurrentPage = <AboutOvest setSection ={setSection}/>
  }
  return (
    <div>
      {CurrentPage}
    </div>
  )
}

export default AboutIndex
