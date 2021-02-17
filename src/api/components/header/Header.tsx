import React from "react";
import styles from "./header.module.css";
import {useQuery} from "@apollo/client";
import {GET_ORGANIZATION} from "../../operations/queries/queries";

const Header = () => {
  const {data, loading, error} = useQuery(GET_ORGANIZATION, {
    variables: {
      login: "Auditoriums"
    }
  })
  if(!loading && !error) console.log(data)
  return (
    <header>
      <div className={styles.logo}></div>
      <input type="text" placeholder="search"/>
    </header>
  );
};

export default Header;
