import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import { increment } from "@/store/slices/userSlice";
import { fetchData } from "@/store/thunks/fetchData";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  const count = useAppSelector((state) => state.users.value);
  const data = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  function handleClick() {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      //add class=dark in html element
      document.documentElement.classList.add("dark");
    } else {
      //remove class=dark in html element
      document.documentElement.classList.remove("dark");
    }

    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  }
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div>
      <div onClick={handleClick}>theme</div>
      <div>{count}</div>
      <Button onClick={handleIncrement}>trigger state</Button>
      <Button>
        <Link to={"/profile"}>click me</Link>
      </Button>
      {data.data.map((e) => (
        <div>{e.title}</div>
      ))}
      <Outlet />
    </div>
  );
};

export default Home;
