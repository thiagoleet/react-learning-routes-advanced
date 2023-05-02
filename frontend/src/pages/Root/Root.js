import { Outlet } from "react-router-dom";

import { MainNavigation } from "../../components";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
