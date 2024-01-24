/* eslint-disable no-unused-vars */
import React from 'react'
import { useTranslation } from "react-i18next";


const About = () => {

      const { t, i18n } = useTranslation();

      // eslint-disable-next-line no-unused-vars
      const changeLanguage = (language) => {
        i18n.changeLanguage(language);
      };

  return (
    <div>Hi I'm About</div>
  )
}

export default About