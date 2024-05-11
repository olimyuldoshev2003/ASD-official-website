import React from "react";

const ForgetPassword = () => {
  return (
    <div>
      <div className="container_block flex justify-center items-center h-[81.5vh]">
        <form
          action=""
          className="bg-[green] w-[300px] flex flex-col items-center h-[330px] p-[14px_10px] gap-4 rounded-[15px]"
        >
          <h1 className="text-[#fff] text-[20px]">
            Having trouble logging in?
                  </h1>
                  

          <div className="label_input_email bg-[green] flex flex-col gap-[20px]">
            <label
              htmlFor="email_forget_password"
              className="cursor-pointer text-[#fff] text-[18px]"
            >
              Your Email
            </label>
            <input
              type="email"
              className="text-[#000] placeholder:text-[#000] outline-none p-[5px_10px] w-[260px] rounded-[20px]"
              name=""
              id="email_forget_password"
              placeholder="Enter your email"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
