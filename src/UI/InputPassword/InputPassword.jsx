import React, { useState } from "react";
import s from "./InputPassword.module.css";
import eyeOpen from "../../assets/icons/svg_pack/Black/Light/EyeSlash_light.svg";
import eyeClose from "../../assets/icons/svg_pack/Black/Light/Eye_light.svg";

function InputPassword({ value, handle }) {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState("password");

  const handleInputChange = (e) => {
    handle(e.target.value)
  };

  const handleShowPass = () => {
    setShowPassword(!showPassword);
    setInputType(showPassword ? "password" : "text");
  };

  return (
    <div className={s.InputPassword}>
      <input type={inputType} value={value} onChange={handleInputChange} />
      <img
        src={showPassword ? eyeClose : eyeOpen}
        alt="eyeIcon"
        id="eyeicon"
        onClick={handleShowPass}
      />
    </div>
  );
}

export default InputPassword;
