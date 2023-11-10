import React, { useState } from "react";
import LoginView from "@/components/LoginView";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "@/services/firebase";
import { useRouter } from "next/router";
import { userController } from "@/services/http";

const Login = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const router = useRouter();

  const handleLogin = (e: any) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, emailAddress, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed in:", user.email);
        userController.getMyProfile().then((res: { data: any }) => {
          localStorage.setItem("currentUser", JSON.stringify(res.data));
          router.push("/home");
        });
      })
      .catch((error) => {
        // Handle errors
        setError(error.message);
      });
  };

  const handleEmailChange = (email: string) => {
    setEmailAddress(email);
  };

  const handlePasswordChange = (password: string) => {
    setPassword(password);
  };

  return (
    <LoginView
      emailAddress={emailAddress}
      password={password}
      isInvalid={isInvalid}
      handleLogin={handleLogin}
      setEmailAddress={handleEmailChange}
      setPassword={handlePasswordChange}
      error={error}
    />
  );
};

export default Login;
