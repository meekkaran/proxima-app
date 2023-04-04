import React from "react";
import FillContext from "./FillContext";
import SelectContacts from "./SelectContacts";
import VisualizeGeneratedQuestions from "./VisualizeGeneratedQuestions";

function SetUpFeedback() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
      <FillContext />
      <VisualizeGeneratedQuestions />
      <SelectContacts />
    </div>
  );
}

export default SetUpFeedback;
