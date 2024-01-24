/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";

//For images
import imgS1 from "../../assets/1670644292863.jpg";

const Home = () => {
  const { t, i18n } = useTranslation();

  // eslint-disable-next-line no-unused-vars
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <section className="section_1 mt-[20px] flex flex-wrap md:justify-between items-center sm:justify-center gap-7">
        <div className="min_block_1_s_1 flex flex-col gap-4">
          <h1 className="text-[28px] max-w-[490px] font-[700] dark:text-[#fff]">
            Welcome To American Space Dushanbe
          </h1>
          <p className="text-[18px] font-[500] max-w-[470px] dark:text-[#fff]">
            The American Space Dushanbe aims to strengthen mutual understanding
            and deepen cultural, educational, and scientific exchanges between
            people from the United States, Tajikistan and around the world.
          </p>
        </div>
        <div className="min_block_2_s_1">
          <img
            src={imgS1}
            className="md:max-w-[400px] sm:max-w-[100%]"
            alt=""
          />
        </div>
      </section>
      <section className="section_2 mt-[40px]">
        <h1 className="text-[28px] font-[700] dark:text-[#fff] text-center">
          What do we offer?
        </h1>
        <div className="block_2_s_2 flex md:justify-between flex-wrap gap-[40px] sm:justify-center mt-[20px]">
          <div className="min_block_1_of_block_2_s_2">
            <p className="text-[16px] font-[500] max-w-[270px] dark:text-[#fff]">
              English Language Learning programs enhance your public speaking,
              critical thinking, and speaking skills.
            </p>
          </div>
          <div className="min_block_2_of_block_2_s_2">
            <p className="text-[16px] font-[500] max-w-[270px] dark:text-[#fff]">
              Free and accessible environment to study and develop your academic
              and professional skills.
            </p>
          </div>
          <div className="min_block_3_of_block_2_s_2">
            <p className="text-[16px] font-[500] max-w-[270px] dark:text-[#fff]">
              Innovative approaches to study, use up-to-date technology, and
              achieve you full potential.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
