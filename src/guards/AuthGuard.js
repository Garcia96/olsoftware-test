import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthGuard = ({ component }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [status, setStatus] = useState(false);

  useEffect(() => {
    checkUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [component]);

  const checkUser = () => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    } else {
      if (location.pathname === "/login") {
        navigate("/");
      }
    }

    setStatus(true);
  };

  return status ? (
    <React.Fragment>{component}</React.Fragment>
  ) : (
    <React.Fragment></React.Fragment>
  );
};

export default AuthGuard;
