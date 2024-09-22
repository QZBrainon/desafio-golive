import React from "react";

export default function page() {
  return (
    <div className="flex">
      <div className="sidebar">
        <div className="nav-item">Home</div>
        <div className="nav-item">Profile</div>
        <div className="nav-item">Messages</div>
        <div className="nav-item">Settings</div>
      </div>
      <div className="content flex-1">
        <h1>Hello, world!</h1>
        <p>Welcome to your new web page.</p>
        <p>
          To add a new page, simply add a new file to the{" "}
          <code>app/page.tsx</code> file.
        </p>
        <p>Welcome to your new web page.</p>
        <p>
          To add a new page, simply add a new file to the{" "}
          <code>app/page.tsx</code> file.
        </p>
      </div>
    </div>
  );
}
