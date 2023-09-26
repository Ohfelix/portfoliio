import React from "react";

const page = () => {
  return (
    <>
      <div className="flex-1 pt-36 padding-x">
        <main className="grid-2">
          <div className="flex justify-start p-3">
            <p>Name:</p> <br />
            <input type="text" className="bg-gray-200 rounded-xl p-2" />
          </div>
          <div className="flex justify-start p-3">
            <p>Contact:</p> <br />
            <input type="text" className="bg-gray-200 rounded-xl p-2" />
          </div>
        </main>
      </div>
    </>
  );
};

export default page;
