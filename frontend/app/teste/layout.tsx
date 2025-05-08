import React from "react";

// if h is defined, in this case, body h-screen, the content's layout is the one that holds the overflow-auto class, not the children
// another way is to make the layout h-screen and then apply overflow-auto, it will scroll inside of the content, but since
// the body has min-h-screen, there need to be an offset on the size of THIS layout, so it accounts for the footer
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-auto container mx-auto bg-red-500">{children}</div>
  );
}
