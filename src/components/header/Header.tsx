import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import useDebounce from "../../helpers/helpers";
import { getOrganisations } from "../../api/axios";
import githubIcon from "./../../assets/images/github.svg";

const Header = () => {
  // Состояние и сеттер состояния для поискового запроса
  const [searchTerm, setSearchTerm] = useState("");
  // Состояние и сеттер состояния для результатов поиска
  const [results, setResults] = useState([]);
  // Состояние для статуса поиска (есть ли ожидающий запрос API)
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  useEffect(() => {
    // Убедиться что у нас есть значение (пользователь ввел что-то)
    if (debouncedSearchTerm) {
      // Выставить состояние isSearching
      setIsSearching(true);
      // Сделать запрос к АПИ
      getOrganisations(debouncedSearchTerm).then((results) => {
        // Выставить состояние в false, так-как запрос завершен
        setIsSearching(false);
        // Выставит состояние с результатом
        // @ts-ignore
        setResults(results);
        console.log(results);
      });
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={githubIcon} alt="github" />
      <input className={styles.headerSearchInput} type="text" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search or jump to..."/>
    </header>
  );
};

export default Header;
