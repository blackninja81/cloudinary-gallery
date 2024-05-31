import React from "react";
import './layout.scss'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <React.Fragment><h2>NoGram</h2></React.Fragment>
      <React.Fragment>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </React.Fragment>
    </div>
  );
};

export default Navbar;
