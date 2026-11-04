"use client";

import type { ReactNode } from "react";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

import type { Filter as FilterType } from "../_types";
import { isFilter } from "../_types";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const capacity = searchParams.get("capacity");
  const activeFilter: FilterType =
    capacity && isFilter(capacity) ? capacity : "all";

  function handleFilter(filter: FilterType) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="border border-primary-800 flex">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Show All
      </Button>
      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        1&mdash;3 guests
      </Button>
      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7 guests
      </Button>
      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

type ButtonProps = {
  filter: FilterType;
  activeFilter: FilterType;
  handleFilter: (filter: FilterType) => void;
  children: ReactNode;
};

function Button({ filter, activeFilter, handleFilter, children }: ButtonProps) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${filter === activeFilter ? `bg-primary-700 text-primary-50` : ``}`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
