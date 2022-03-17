import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import http from "../http-common";
import GridElement from "../components/GridElement";
import "../styles/Grid.css";

function HomePage() {
  const dispatch = useDispatch();
  const tabs = useSelector((state: RootStateOrAny) => state.TabsReducer.tabs);
  const tabsList = tabs.map((tab: any) => (
    <GridElement key={tab.tab_id} element={tab} />
  ));

  useEffect(() => {
    http
      .get("/getTabs?sort=views")
      .then((response) => {
        dispatch({ type: "ADD_TABS", payload: response.data.data });
        dispatch({ type: "REMOVE_ERROR", payload: null });
      })
      .catch(() => {
        dispatch({ type: "ADD_ERROR", payload: "An eror occured!" });
      });
  }, []);

  const changeSort = (e: React.FormEvent<EventTarget>): void => {
    const target = e.target as HTMLInputElement;
    http
      .get("/getTabs?sort=" + target.value)
      .then((response) => {
        dispatch({ type: "ADD_TABS", payload: response.data.data });
        dispatch({ type: "REMOVE_ERROR", payload: null });
      })
      .catch(() => {
        dispatch({ type: "ADD_ERROR", payload: "An eror occured!" });
      });
  };

  return !tabs ? (
    <div>Loading</div>
  ) : (
    <>
      <div className="subNavigation">
        <select
          defaultValue="views"
          className="refreshButton"
          onChange={changeSort}
        >
          <option value="views">Views</option>
          <option value="latest">Latest</option>
        </select>
      </div>
      <div className="gridContainer">{tabsList}</div>
    </>
  );
}

export default HomePage;
