import GeneralCuriosities from "@molecules/GeneralCuriosities";
import styles from "./styles.module.scss";
import React from "react";
import Background from "@atoms/Background";
import Heading from "@atoms/Heading";
import Header from "@organisms/Header";
import LineTop from "@atoms/Line";

export default function GeneralCuriositiesPage() {
  return (
    <>
    <Header/>
    <LineTop/>
    <div className={styles[`GeneralCuriositiesPage__Content`]}>
      <header className={styles[`GeneralCuriositiesPage__Header`]}>
        <Heading
          level="1"
          className={styles[`GeneralCuriositiesPage__Content--text`]}
          color="black"
          style="italic"
        >
          {" "}
          Animal's Curiosities{" "}
        </Heading>
      </header>
      <div className={styles[`GeneralCuriositiesPage__Container`]}>
        <GeneralCuriosities></GeneralCuriosities>
      </div>
      <span className={styles[`GeneralCuriositiesPage__Background`]}>
        <Background />
      </span>
    </div>
    </>
  );
}
