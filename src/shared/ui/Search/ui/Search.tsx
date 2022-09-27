import React, { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import styles from "./Search.module.scss";

import { Input } from "../../Input";
import { Button } from "../../Button";

import { URLSearchParamsInit } from "react-router-dom";
import cn from "classnames";

export interface SearchProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  searchParam?: any;
  searchQuery: any;
  setSearchParam?: (
    nextInit: URLSearchParamsInit,
    navigateOptions?:
      | {
          replace?: boolean | undefined;
          state?: any;
        }
      | undefined
  ) => void;
}

export const Search: React.FC<SearchProps> = props => {
  const { className, searchParam, setSearchParam, searchQuery, ...attr } =
    props;
  const [searchValue, setSearchValue] = useState<string>(searchQuery);

  const goToSearch = () => {
    setSearchParam &&
      setSearchParam(
        { search: searchValue },
        {
          replace: true,
        }
      );
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      goToSearch();
    }
  };

  return (
    <div className={cn(className, styles.search)} {...attr}>
      <Button className={styles.searchButton} onClick={goToSearch}>
        <img
          src={`${process.env["PUBLIC"]}/images/icons/search.png`}
          alt="search"
        />
      </Button>
      <Input
        placeholder="Поиск"
        type="search"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
