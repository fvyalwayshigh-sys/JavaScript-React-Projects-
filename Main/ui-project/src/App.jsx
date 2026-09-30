import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    {
      key: 1,
      img: "https://images.unsplash.com/photo-1773332598413-a6d5279d1ae8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "Satisfied",
    },
    {
      key: 2,
      img: "https://plus.unsplash.com/premium_photo-1663047305318-c6debe9f633c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "UnderBanked",
    },
    {
      key: 3,
      img: "https://plus.unsplash.com/premium_photo-1661766513512-c32d32da0c06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHwxfDB8fHww",
      intro: "",
      tag: "Underserved",
    },
  ];

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
