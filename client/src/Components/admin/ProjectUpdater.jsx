import React from "react";

const ProjectUpdater = () => {
  return (
    <>
      <div>
        <div>
          <p>Project Title</p>
          <input type="text" placeholder="Prject Title" />
        </div>
        <div>
          <p>Project Description</p>
          <input type="text" placeholder="Prject Description" />
        </div>
        <div>
          <input type="file" />
        </div>
        <div>
          <input type="button" value="Update" />
        </div>
      </div>
    </>
  );
};

export default ProjectUpdater;
