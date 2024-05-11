import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Layout.css";

import { useSelector, useDispatch } from "react-redux";

//For Images and Videos
import logoHeader from "../assets/ASD logo.png";
import logoHeaderProfile from "../assets/Profile-image.png";

import Switcher from "../components/Switch UI/Switcher";
import { Box, Modal } from "@mui/material";
import { useTranslation } from "react-i18next";
import { setModalSignIn, setModalSignUp } from "../reducers/ASDstates";

function Layout() {
  const location = useLocation();
  const dispatch = useDispatch();

  //States from Redux
  const modalSignUp = useSelector((store) => store.ASDstates.modalSignUp);
  const modalSignIn = useSelector((store) => store.ASDstates.modalSignIn);

  // const [modalSignIn, setModalSignIn] = useState(false);
  const [burger_class, setBurgerClass] = useState("burger_bar unclicked");
  const [menu_class, setMenuClass] = useState("menu_for_mobile_size hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  //For hiding and showing the login password
  const [typePasswordInputLogin, setTypePasswordLogin] = useState("password");
  const [checkboxCheckLogin, setCheckboxCheckLogin] = useState(false);
  const [textHideAndShowLogin, setTextHideAndShowLogin] = useState("Hidden");

  const [typePasswordInputSignUp, setTypePasswordSignUp] =
    useState("password");
  const [checkboxCheckSignUp, setCheckboxCheckSignUp] = useState(false);
  const [textHideAndShowSignUp, setTextHideAndShowSignUp] =
    useState("Hidden");

  const [typePasswordInputSignUpConfirm, setTypePasswordSignUpConfirm] =
    useState("password");
  const [checkboxCheckSignUpConfirm, setCheckboxCheckSignUpConfirm] =
    useState(false);
  const [textHideAndShowSignUpConfirm, setTextHideAndShowSignUpConfirm] =
    useState("Hidden");

  //For SignUping
  // const [modalSignUp, setModalSignUp] = useState(false);

  //States for Sign In
  const [emailSignIn, setEmailSignIn] = useState("");
  const [passwordSignIn, setPasswordSignIn] = useState("");

  //States for Sign Up
  const [forChangingImgSignUp, setForChangingImgSignUp] = useState(null);
  const [firstNameSignUp, setFirstNameSignUp] = useState("")
  const [lastNameSignUp, setLastNameSignUp] = useState("")
  const [emailSignUp, setEmailSignUp] = useState("");
  const [genderSignUp, setGenderSignUp] = useState("")
  const [numberPhoneSignUp, setNumberPhoneSignUp] = useState("")
  const [dateOfBirthdaySignUp, setDateOfBirthdaySignUp] = useState("")
  const [aboutYourselfSignUp, setAboutYourselfSignUp] = useState("")
  const [addressSignUp, setAdressSignUp] = useState("")
  const [listOfJobsSignUp, setListOfJobsSignUp] = useState([])
  const [passwordSignUp, setPasswordSignUp] = useState("");
  const [confirmPasswordSignUp, setConfirmPasswordSignUp] = useState("")

  //Handle Change of image
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        console.log(event.target.result);
        setForChangingImgSignUp(event.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  //For translating
  const { t, i18n } = useTranslation();

  // eslint-disable-next-line no-unused-vars
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  function openModalSignIn() {
    dispatch(setModalSignIn(true));
  }

  function handleCloseModalSignIn() {
    dispatch(setModalSignIn(false));
  }

  function handleCloseModalSignUp() {
    dispatch(setModalSignIn(false));
    dispatch(setModalSignUp(false));
  }

  function closeModalSignIn() {
    dispatch(setModalSignIn(false));
  }

  function closeModalSignUp() {
    dispatch(setModalSignIn(false));
    dispatch(setModalSignUp(false));
  }

  function changeMenu() {
    if (!isMenuClicked) {
      setBurgerClass("clicked");
      setMenuClass("links_visible");
    } else {
      setBurgerClass("unclicked");
      setMenuClass("links_hidden");
    }

    setIsMenuClicked(!isMenuClicked);
  }

  function showingThePasswordLogin() {
    if (!checkboxCheckLogin) {
      setTypePasswordLogin("text");
      setTextHideAndShowLogin("Showed");
    } else {
      setTypePasswordLogin("password");
      setTextHideAndShowLogin("Hidden");
    }

    setCheckboxCheckLogin(!checkboxCheckLogin);
  }

  function showingThePasswordSignUp() {
    if (!checkboxCheckSignUp) {
      setTypePasswordSignUp("text");
      setTextHideAndShowSignUp("Showed");
    } else {
      setTypePasswordSignUp("password");
      setTextHideAndShowSignUp("Hidden");
    }

    setCheckboxCheckSignUp(!checkboxCheckSignUp);
  }

  function showingThePasswordSignUpConfirm() {
    if (!checkboxCheckSignUpConfirm) {
      setTypePasswordSignUpConfirm("text");
      setTextHideAndShowSignUpConfirm("Showed");
    } else {
      setTypePasswordSignUpConfirm("password");
      setTextHideAndShowSignUpConfirm("Hidden");
    }

    setCheckboxCheckSignUpConfirm(!checkboxCheckSignUpConfirm);
  }

  function openModalSignUp() {
    dispatch(setModalSignUp(true));
  }

  return (
    <div className="p-[30px_100px] sm:p-[30px_10px] bg-[#fff] dark:bg-[#333333]">
      <header className="header flex flex-col gap-6">
        <div className="big_block_1 flex justify-between">
          <div className="block_1">
            <Link to="/">
              <img
                src={logoHeader}
                alt=""
                className="w-[60px] h-[60px] rounded-full"
              />
            </Link>
          </div>
          <ul className="block_2 md:flex md:items-center md:gap-5 sm:hidden">
            <li>
              <Link
                to="/"
                className={
                  location.pathname === "/"
                    ? " dark:text-[#b6b6b6] text-[16px] font-[700] underline"
                    : "text-[16px] font-[700] text-[#000] dark:text-[#fff] dark:hover:text-[#b6b6b6] hover:underline"
                }
              >
                {t("header.t1")}
              </Link>
            </li>
            <li>
              <Link
                to="/volunteers"
                className={
                  location.pathname === "/volunteers"
                    ? "dark:text-[#b6b6b6] text-[16px] font-[700] underline"
                    : "text-[16px] font-[700] text-[#000] dark:text-[#fff] dark:hover:text-[#b6b6b6] hover:underline"
                }
              >
                {t("header.t2")}
              </Link>
            </li>
            <li>
              <Link
                to="/location"
                className={
                  location.pathname === "/location"
                    ? "dark:text-[#b6b6b6] text-[16px] font-[700] underline"
                    : "text-[16px] font-[700] text-[#000] dark:text-[#fff] dark:hover:text-[#b6b6b6] hover:underline"
                }
              >
                {t("header.t3")}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={
                  location.pathname === "/about"
                    ? "dark:text-[#b6b6b6] text-[16px] font-[700] underline"
                    : "text-[16px] font-[700] text-[#000] dark:text-[#fff] dark:hover:text-[#b6b6b6] hover:underline"
                }
              >
                {t("header.t13")}
              </Link>
            </li>
          </ul>
          <div className="block_3 flex items-center justify-end gap-3">
            <div className="for_dark_mode">
              <Switcher />
            </div>
            <select
              name=""
              id=""
              className="outline-none bg-transparent text-[#333] dark:text-[#fff] sm:hidden md:block"
              onChange={(event) => changeLanguage(event.target.value)}
            >
              <option value="" className="dark:bg-[#000]">
                {t("lang")}
              </option>
              <option value="en" className="dark:bg-[#000]">
                {t("en")}
              </option>
              <option value="ru" className="dark:bg-[#000]">
                {t("ru")}
              </option>
              <option value="tj" className="dark:bg-[#000]">
                {t("tj")}
              </option>
            </select>
            <div className="for_btn_login">
              <button
                className="p-[5px_40px] bg-[green] shadow-2xl text-[white] rounded-[20px] outline-none"
                onClick={() => openModalSignIn()}
              >
                Login
              </button>
            </div>
            <div className="btn_menu_for_mobile_size sm:block md:hidden">
              <div className="burger_menu" onClick={changeMenu}>
                <div
                  className={`${burger_class} cols bg-[#333333] dark:bg-[#fff]`}
                ></div>
                <div
                  className={`${burger_class} cols bg-[#333333] dark:bg-[#fff]`}
                ></div>
                <div
                  className={`${burger_class} cols bg-[#333333] dark:bg-[#fff]`}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${menu_class} menu_for_mobile_size text-[#fff] md:hidden`}
        >
          <nav className="navbars">
            <ul className="navbar flex flex-col items-start gap-[10px] text-[18px] text-[#000] dark:text-[#fff]">
              <li>
                <Link
                  to="/"
                  className={
                    location.pathname === "/"
                      ? " dark:text-[#b6b6b6] text-[16px] font-[700] underline"
                      : "text-[16px] font-[700] text-[#000] dark:text-[#fff] dark:hover:text-[#b6b6b6] hover:underline"
                  }
                >
                  {t("header.t1")}
                </Link>
              </li>
              <li>
                <Link
                  to="/volunteers"
                  className={
                    location.pathname === "/volunteers"
                      ? "dark:text-[#b6b6b6] text-[16px] font-[700] underline"
                      : "text-[16px] font-[700] text-[#000] dark:text-[#fff] dark:hover:text-[#b6b6b6] hover:underline"
                  }
                >
                  {t("header.t2")}
                </Link>
              </li>
              <li>
                <Link
                  to="/location"
                  className={
                    location.pathname === "/location"
                      ? "dark:text-[#b6b6b6] text-[16px] font-[700] underline"
                      : "text-[16px] font-[700] text-[#000] dark:text-[#fff] dark:hover:text-[#b6b6b6] hover:underline"
                  }
                >
                  {t("header.t3")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={
                    location.pathname === "/about"
                      ? "dark:text-[#b6b6b6] text-[16px] font-[700] underline"
                      : "text-[16px] font-[700] text-[#000] dark:text-[#fff] dark:hover:text-[#b6b6b6] hover:underline"
                  }
                >
                  {t("header.t13")}
                </Link>
              </li>
            </ul>
          </nav>
          <div className="for_select_and_dark_mode flex items-center gap-[10px] mt-[10px]">
            <select
              name=""
              id=""
              className="outline-none bg-transparent text-[#333] dark:text-[#fff] sm:block md:hidden"
              onChange={(event) => changeLanguage(event.target.value)}
            >
              <option value="" className="dark:bg-[#000]">
                {t("lang")}
              </option>
              <option value="en" className="dark:bg-[#000]">
                {t("en")}
              </option>
              <option value="ru" className="dark:bg-[#000]">
                {t("ru")}
              </option>
              <option value="tj" className="dark:bg-[#000]">
                {t("tj")}
              </option>
            </select>
          </div>
        </div>

        <Modal
          open={modalSignIn}
          onClose={handleCloseModalSignIn}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="flex justify-center items-center"
        >
          <Box className="rounded-[20px] p-[2px_8px] pb-[30px] outline-none bg-[green] text-[#fff]">
            <div className="for_closing_the_registration_modal flex justify-end text-[50px]">
              <button onClick={closeModalSignIn} className="cursor-pointer">
                &times;
              </button>
            </div>
            <form action="" className="flex flex-col items-center gap-[20px]">
              <h2 className="text-[36px] ">Sign In</h2>
              <div className="for_inputs flex flex-col gap-7 mt-3">
                <div className="email_input flex flex-col gap-2">
                  <label htmlFor="email" className="text-[18px]">
                    Email
                  </label>
                  <input
                    type="email"
                    name=""
                    id="email"
                    className="outline-none border-[1px] border-[solid] border-[#000] p-[5px_20px] rounded-[20px] placeholder:text-[#000] shadow-2xl border-none text-[#000]"
                    placeholder="Enter your email"
                    value={emailSignIn}
                    onChange={(event) => setEmailSignIn(event.target.value)}
                  />
                </div>
                <div className="password_input flex flex-col gap-2">
                  <label htmlFor="password">Password</label>
                  <input
                    type={typePasswordInputLogin}
                    name=""
                    id="password"
                    className="outline-none border-[1px] border-[solid] border-[#000] p-[5px_20px] rounded-[20px] placeholder:text-[#000] border-none text-[#000] shadow-2xl"
                    placeholder="Enter your password"
                    value={passwordSignIn}
                    onChange={(event) => setPasswordSignIn(event.target.value)}
                  />
                  <div className="block_show_password_and_forget_password flex justify-between mt-[7px]">
                    <div className="block_show_and_hide flex items-center gap-2">
                      <label htmlFor="CheckoxPasswordLogin">
                        {textHideAndShowLogin}
                      </label>
                      <input
                        type="checkbox"
                        className="outline-none"
                        checked={checkboxCheckLogin}
                        onChange={() => showingThePasswordLogin()}
                        name=""
                        id="CheckoxPasswordLogin"
                      />
                    </div>
                    <Link to="/forgetPassword" className="underline">
                      Forget Password
                    </Link>
                  </div>
                  <div className="for_SignUping mt-[10px]">
                    <h2 className="flex items-center gap-1 flex-wrap max-w-[280px]">
                      If you don't have any account please
                      <span
                        className="underline cursor-pointer"
                        onClick={openModalSignUp}
                      >
                        sign up
                      </span>
                      to be one of us.
                    </h2>
                  </div>
                </div>
              </div>
              <button className="p-[5px_40px] bg-[blue] text-[#fff] rounded-[50px]">
                Sign In
              </button>
            </form>
          </Box>
        </Modal>
        <Modal
          open={modalSignUp}
          onClose={handleCloseModalSignUp}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="flex justify-center items-center"
        >
          <Box className="rounded-[20px] p-[2px_20px] pb-[30px] outline-none bg-[green] text-[#fff] sm:w-[290px] md:w-[auto] sm:h-[500px] md:h-[100vh] sm:overflow-auto md:overflow-auto">
            <div className="for_closing_the_registration_modal flex justify-end text-[50px]">
              <button onClick={closeModalSignUp} className="cursor-pointer">
                &times;
              </button>
            </div>
            <form action="" className="flex flex-col gap-[20px]">
              <h2 className="text-[36px] text-center">Sign Up</h2>
              <main className="main">
                <div className="firts_block flex items-start md:justify-between flex-wrap sm:justify-center gap-6">
                  <div className="for_img_and_changing_it flex flex-col gap-5 items-start">
                    {forChangingImgSignUp ? (
                      <img
                        src={forChangingImgSignUp}
                        alt="Selected Image"
                        className="img w-[250px] object-fill"
                      />
                    ) : (
                      <>
                        <h1 className="text-[22px]">Please choose an image</h1>
                        <img
                          src={logoHeaderProfile}
                          alt="Selected Image"
                          className="img w-[250px] object-fill"
                        />
                      </>
                    )}
                    <input
                      type="file"
                      name=""
                      id=""
                      onChange={handleImageChange}
                      className="rounded-[30px] max-w-[280px] outline-none"
                      required={true}
                    />
                  </div>
                  <div className="inputs flex flex-col gap-8">
                    <div className="label_input_first_name flex flex-col items-start gap-3">
                      <label htmlFor="firstName">First name</label>
                      <input
                        type="text"
                        id="firstName"
                        name=""
                        className="firstName outline-none border-none p-[5px_30px] text-[#000] placeholder:text-[#000] rounded-[20px]"
                        placeholder="Enter your first name"
                        required={true}
                        value={firstNameSignUp}
                        onChange={(event) =>
                          setFirstNameSignUp(event.target.value)
                        }
                      />
                    </div>
                    <div className="label_input_last_name flex flex-col items-start gap-3">
                      <label htmlFor="lastName">Last name</label>
                      <input
                        type="text"
                        id="lastName"
                        className="lastName outline-none border-none p-[5px_30px] text-[#000] placeholder:text-[#000] rounded-[20px]"
                        placeholder="Enter your last name"
                        required={true}
                        value={lastNameSignUp}
                        onChange={(event) =>
                          setLastNameSignUp(event.target.value)
                        }
                      />
                    </div>
                    {/* <div className="label_input_last_name flex flex-col items-start gap-3">
                      <label htmlFor="fatherName">Father name</label>
                      <input
                        type="text"
                        id="fatherName"
                        className="lasttName outline-none border-none p-[5px_30px] text-[#000] placeholder:text-[#000] rounded-[20px]"
                        placeholder="Enter your father name"
                        required={true}
                      />
                    </div> */}
                    <div className="label_input_email flex flex-col items-start gap-3">
                      <label htmlFor="Email">Email</label>
                      <input
                        type="email"
                        id="Email"
                        className="email outline-none border-none p-[5px_30px] text-[#000] placeholder:text-[#000] rounded-[20px]"
                        placeholder="Enter your email"
                        required={true}
                        value={emailSignUp}
                        onChange={(event) => setEmailSignUp(event.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="second_block mt-[30px] flex items-start md:justify-between flex-wrap sm:justify-center gap-6">
                  <div className="first_group_inputs flex flex-col gap-8">
                    {/* <div className="label_select_gender flex flex-col items-start gap-3">
                      <label htmlFor="maritalStatus">Marital status</label>
                      <select
                        name=""
                        id="maritalStatus"
                        className="outline-none border-none p-[5px_30px] text-[#000] placeholder:text-[#000] rounded-[20px]"
                        required={true}
                      >
                        <option value="">Marital status</option>
                        <option value="">Single</option>
                        <option value="">Married</option>
                      </select>
                    </div> */}
                    <div className="label_select_gender flex flex-col items-start gap-3">
                      <label htmlFor="gender">Gender</label>
                      <select
                        name=""
                        id="gender"
                        className="outline-none border-none p-[5px_30px] text-[#000] placeholder:text-[#000] rounded-[20px]"
                        required={true}
                        // value={genderSignUp}
                        onChange={(event) =>
                          setGenderSignUp(event.target.value)
                        }
                      >
                        <option value="">---Gender---</option>
                        <option value="">Male</option>
                        <option value="">Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="second_group_input_and_select flex flex-col gap-8">
                    <div className="label_input_email flex flex-col items-start gap-3">
                      <label htmlFor="numberPhone">Number phone</label>
                      <input
                        type="number"
                        id="numberPhone"
                        className="numberPhone outline-none border-none p-[5px_30px] text-[#000] placeholder:text-[#000] rounded-[20px]"
                        placeholder="Enter your number phone"
                        required={true}
                        value={numberPhoneSignUp}
                        onChange={(event) =>
                          setNumberPhoneSignUp(event.target.value)
                        }
                      />
                    </div>
                    <div className="label_input_date_of_birthday flex flex-col items-start gap-3">
                      <label htmlFor="dateOfBirth">Date of birthday</label>
                      <input
                        type="date"
                        name=""
                        id="dateOfBirth"
                        className="outline-none border-none p-[5px_30px] text-[#000] placeholder:text-[#000] rounded-[20px]"
                        required={true}
                        value={dateOfBirthdaySignUp}
                        onChange={(event) =>
                          setDateOfBirthdaySignUp(event.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="third_block flex flex-col gap-6  mt-[30px]">
                  <div className="label_textarea_about_yourself flex flex-col items-start gap-3">
                    <label htmlFor="aboutYourself">About yourself</label>
                    <textarea
                      name=""
                      id="aboutYourself"
                      className="outline-none border-none p-[5px_30px] text-[#000] placeholder:text-[#000] rounded-[20px] w-[100%]"
                      cols="30"
                      rows="10"
                      placeholder="Tell us about yourself"
                      required={true}
                      value={aboutYourselfSignUp}
                      onChange={(event) =>
                        setAboutYourselfSignUp(event.target.value)
                      }
                    ></textarea>
                  </div>

                  <div className="label_textarea_adress flex flex-col items-start gap-3">
                    <label htmlFor="address">Address</label>
                    <textarea
                      name=""
                      id="address"
                      className="outline-none border-none p-[5px_30px] text-[#000] placeholder:text-[#000] rounded-[20px] w-[100%]"
                      cols="30"
                      rows="10"
                      placeholder="Your address"
                      required={true}
                      value={addressSignUp}
                      onChange={(event) => setAdressSignUp(event.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="fourth_block flex items-start md:justify-between flex-wrap sm:justify-center gap-6 mt-[30px]">
                  <div className="first_min_block_of_fourth_block">
                    <div className="label_input_checkboxes mt-[20px] flex flex-col gap-3">
                      <div className="label_input_checkbox_1 flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="checkbox_1"
                          className="email outline-none border-none p-[5px_30px] text-[#000] placeholder:text-[#000] rounded-[20px]"
                          required={true}
                        />
                        <label htmlFor="checkbox_1" className="max-w-[220px]">
                          Using Computers
                        </label>
                      </div>
                      <div className="label_input_checkbox_2 flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="checkbox_2"
                          className="email outline-none border-none p-[5px_30px] text-[#000] placeholder:text-[#000] rounded-[20px]"
                          required={true}
                        />
                        <label htmlFor="checkbox_2">Using Computers</label>
                      </div>
                      <div className="label_input_checkbox_3 flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="checkbox_3"
                          className="email outline-none border-none p-[5px_30px] text-[#000] placeholder:text-[#000] rounded-[20px]"
                          required={true}
                        />
                        <label htmlFor="checkbox_3">Using Computers</label>
                      </div>
                      <div className="label_input_checkbox_4 flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="checkbox_4"
                          className="email outline-none border-none p-[5px_30px] text-[#000] placeholder:text-[#000] rounded-[20px]"
                          required={true}
                        />
                        <label htmlFor="checkbox_4">Using Computers</label>
                      </div>
                      <div className="label_input_checkbox_5 flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="checkbox_5"
                          className="email outline-none border-none p-[5px_30px] text-[#000] placeholder:text-[#000] rounded-[20px]"
                          required={true}
                        />
                        <label htmlFor="checkbox_5">Using Computers</label>
                      </div>
                      <div className="label_input_checkbox_6 flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="checkbox_6"
                          className="email outline-none border-none p-[5px_30px] text-[#000] placeholder:text-[#000] rounded-[20px]"
                          required={true}
                        />
                        <label htmlFor="checkbox_6">Using Computers</label>
                      </div>
                      <div className="label_input_checkbox_7 flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="checkbox_7"
                          className="email outline-none border-none p-[5px_30px] text-[#000] placeholder:text-[#000] rounded-[20px]"
                          required={true}
                        />
                        <label htmlFor="checkbox_7">Using Computers</label>
                      </div>
                    </div>
                  </div>
                  <div className="second_min_block_of_fourth_block flex flex-col items-start gap-6">
                    <div className="label_input_password flex flex-col items-start gap-3">
                      <label htmlFor="Password">Password</label>
                      <input
                        type={typePasswordInputSignUp}
                        id="Password"
                        className="email outline-none border-none p-[5px_30px] text-[#000] placeholder:text-[#000] rounded-[20px]"
                        placeholder="Enter your password"
                        required={true}
                        value={passwordSignUp}
                        onChange={(event) =>
                          setPasswordSignUp(event.target.value)
                        }
                      />
                      <div className="block_show_and_hide flex items-center gap-2">
                        <label htmlFor="CheckboxPasswordSignUp">
                          {textHideAndShowSignUp}
                        </label>
                        <input
                          type="checkbox"
                          className="outline-none"
                          checked={checkboxCheckSignUp}
                          onChange={() => showingThePasswordSignUp()}
                          name=""
                          id="CheckboxPasswordSignUp"
                        />
                      </div>
                    </div>
                    <div className="label_input_confirm_password flex flex-col items-start gap-3">
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <input
                        type={typePasswordInputSignUpConfirm}
                        id="confirmPassword"
                        className="email outline-none border-none p-[5px_30px] text-[#000] placeholder:text-[#000] rounded-[20px]"
                        placeholder="Enter your password again"
                        required={true}
                        value={confirmPasswordSignUp}
                        onChange={(event) =>
                          setConfirmPasswordSignUp(event.target.value)
                        }
                      />
                      <div className="block_show_and_hide flex items-center gap-2">
                        <label htmlFor="CheckboxConfPasswordSignUp">
                          {textHideAndShowSignUpConfirm}
                        </label>
                        <input
                          type="checkbox"
                          className="outline-none"
                          checked={checkboxCheckSignUpConfirm}
                          onChange={() => showingThePasswordSignUpConfirm()}
                          name=""
                          id="CheckboxConfPasswordSignUp"
                        />
                      </div>
                    </div>
                    <div className="btn_submit_SignUp">
                      <button className="p-[5px_40px] bg-[blue] text-[#fff] rounded-[50px]">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
              </main>
            </form>
          </Box>
        </Modal>
      </header>
      <Outlet />
      <footer className="footer"></footer>
    </div>
  );
}

export default Layout;
