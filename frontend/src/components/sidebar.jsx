import React from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "../store";

export const Sidebar = () => {
  // here I have used Link component, it take multiple props
  //* 1. replace: this will remove the routing history
  //* 2. to="/" : takes to this path
  //* 3. reloadDocument: this will reload entire page on click by default react-router only conditionaly renders content.

  const navigate = useNavigate();

  const dispatch = useDispatch()

  return (
    <div className="flex flex-col h-screen p-3 bg-white shadow w-60 sticky top-0">
      <div className="space-y-3">
        <div className="flex items-center">
          <h2 className="text-xl font-bold">Dashboard / { }</h2>
        </div>
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <NavLink
              end
              style={(isActive) => {
                return isActive ? { color: "black" } : {};
              }}
              to="/routes/nested/reactrouterdom"
              state="thisisstate"
            >
              <li className="rounded-sm">
                <div className="flex items-center p-2 space-x-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span>
                    {" "}
                    React Router Dom{" "}
                  </span>
                </div>
              </li>
            </NavLink>
            <NavLink
              end
              style={(isActive) => {
                return isActive ? { color: "black" } : {};
              }}
              to="/routes/nested/customhooks"
            >
              <li className="rounded-sm">
                <div className="flex items-center p-2 space-x-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  <span>
                    {" "}
                    custom Hooks{" "}
                  </span>
                </div>
              </li>
            </NavLink>
            <NavLink
              end
              style={(isActive) => {
                return isActive ? { color: "black" } : {};
              }}
              to="/routes/nested/useeffect"
            >
              <li className="rounded-sm">
                <div className="flex items-center p-2 space-x-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <span>
                    {" "}
                    use Effect{" "}
                  </span>
                </div>
              </li>
            </NavLink>
            <NavLink
              end
              NavLink
              style={(isActive) => {
                return isActive ? { color: "black" } : {};
              }}
              to="/routes/nested/usestate"
            >
              <li className="rounded-sm">
                <div className="flex items-center p-2 space-x-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>
                    {" "}
                    use State{" "}
                  </span>
                </div>
              </li>
            </NavLink>
            <NavLink
              end
              NavLink
              style={(isActive) => {
                return isActive ? { color: "black" } : {};
              }}
              to="/routes/nested/usecontext-usestate"
            >
              <li className="rounded-sm">
                <div className="flex items-center p-2 space-x-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>
                    {" "}
                    useContext
                  </span>
                </div>
              </li>
            </NavLink>
            <NavLink
              end
              style={(isActive) => {
                return isActive ? { color: "black" } : {};
              }}
              to="/routes/nested/usereducer"
            >
              <li className="rounded-sm">
                <div className="flex items-center p-2 space-x-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <span>
                    {" "}

                    use Reducer{" "}
                  </span>
                </div>
              </li>
            </NavLink>
            <NavLink
              end
              style={(isActive) => {
                return isActive ? { color: "black" } : {};
              }}
              to="/routes/nested/statemanager"
            >
              <li className="rounded-sm">
                <div className="flex items-center p-2 space-x-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <span>
                    Custom State Manager
                  </span>
                </div>
              </li>
            </NavLink>
            <NavLink
              end
              style={(isActive) => {
                return isActive ? { color: "black" } : {};
              }}
              to="/routes/nested/rickandmorty"
            >
              <li className="rounded-sm">
                <div className="flex items-center p-2 space-x-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>
                    {" "}

                    Rick and Morty{" "}
                  </span>
                </div>
              </li>
            </NavLink>
            <NavLink
              end
              style={(isActive) => {
                return isActive ? { color: "black" } : {};
              }}
              to="/routes/nested/blogs"
            >
              <li className="rounded-sm">
                <div className="flex items-center p-2 space-x-3 rounded-md">
                  <i class="fas fa-blog"></i>
                  <span>
                    {" "}

                    Blogs{" "}
                  </span>
                </div>
              </li>
            </NavLink>
            <li className="rounded-sm">
              <div className="flex items-center p-2 space-x-3 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                <button
                  onClick={() => {
                    dispatch({ type: "REMOVE_LOGGINED_USER" })
                    localStorage.removeItem('token')
                    navigate("/login");
                  }}
                >
                  Logout
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
