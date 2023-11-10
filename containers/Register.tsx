import RegisterView from "@/components/RegisterView";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebase";
import { useRouter } from "next/router";
import { getFirebaseError } from "@/utils/UserHelper";
import { userController } from "@/services/http";

const Register = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);

        const regUser = {
          email,
          fullName,
          username: userName,
        };
        console.log(regUser);

        userController.registerUser(regUser).then((res) => {
          console.log(res);
        });

        router.push("/login");
      })
      .catch((err) => {
        setEmail("");
        setFullName("");
        setUserName("");
        setPassword("");
        setError(getFirebaseError(err.message));
      });
  };

  return (
    <RegisterView
      email={email}
      fullName={fullName}
      userName={userName}
      password={password}
      setEmail={setEmail}
      setFullName={setFullName}
      setUserName={setUserName}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
};

export default Register;
