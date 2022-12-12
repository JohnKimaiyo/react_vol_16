import React from "react";

export default function Submit() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("React Developer Kimaiyo");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="Submit">Submit</button>
    </form>
  );
}
