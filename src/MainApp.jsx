// MAIN APPLICATION COMPONENT
import React from "react";
import UserForm from "./UserForm"; // CHANGED FROM "Form" TO "UserForm"

const MainApp = () => { // UPDATED COMPONENT NAME
  return (
    <div>
      <UserForm /> {/* UPDATED COMPONENT NAME */}
    </div>
  );
};

export default MainApp;
