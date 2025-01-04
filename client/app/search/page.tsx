"use client";
import React, { useState } from "react";
import { debounce } from "lodash";
import Header from "@/components/Header";
import { useSearchQuery } from "@/state/api";
import TaskCard from "@/components/taskCard";
import ProjectCard from "@/components/projectCard";
import UserCard from "@/components/userCard";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: searchResults,
    isLoading,
    isError,
  } = useSearchQuery(searchTerm, { skip: searchTerm.length < 3 });
  const handleSearch = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    },
    500,
  );
  return (
    <div className="p-8">
      <Header name="Search" />
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="w-1/2 rounded border p-3 shadow"
          onChange={handleSearch}
        />
      </div>
      <div className="p-5">
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error occurred while fetching search results.</div>}
        {!isLoading && !isError && searchResults && (
          <div>
            {searchResults.tasks && searchResults.tasks?.length > 0 && (
              <>
                <h2>Tasks</h2>
                {searchResults.tasks?.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </>
            )}
            {searchResults.projects && searchResults.projects?.length > 0 && (
              <>
                <h2>Projects</h2>
                {searchResults.projects?.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </>
            )}

            {searchResults.users && searchResults.users?.length > 0 && (
              <>
                <h2>Users</h2>
                {searchResults.users?.map((user) => (
                  <UserCard key={user.userId} user={user} />
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
