import { Outlet } from "react-router-dom";

import { MainNavigation } from "../../components";

const Root = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
