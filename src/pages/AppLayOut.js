import { NavLink, Outlet } from "react-router-dom";

function AppLayOut() {
  return (
    <div className="h-screen border-s-4">
      <header className="bg-slate-50 h-10 flex  justify-start border-b-[1px] border-slate-300/80">
        <p className="text-red-600 font-semibold text-xl pl-10 input">
          Logo
        </p>
      </header>
      <section className="bg-red-100 h-full">
        <main className="w-3/4 m-auto">
          <div className="pl-6">
            <h3 className="mb-2.5 text-xl text-slate-800 font-bold tracking-widest input">
              Create Flashcard
            </h3>
            <section className=" flex gap-x-3 border-b-stone-400  pb-0 border-b-[1px]  ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 border-collapse pb-2 font-semibold tracking-wide border-b-red-600 -mb-0.5 border-b-[3px]"
                    : "font-semibold text-blue-600/100 tracking-wide"
                }
              >
                Creat New
              </NavLink>
              <NavLink
                to="/MyFlashCard"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 border-collapse pb-2 font-semibold tracking-wide border-b-red-600 -mb-0.5 border-b-[4px]"
                    : "font-semibold text-blue-600/100 tracking-wide"
                }
              >
                My Flashcard
              </NavLink>
            </section>
          </div>
          <Outlet />
        </main>
      </section>
    </div>
  );
}

export default AppLayOut;
