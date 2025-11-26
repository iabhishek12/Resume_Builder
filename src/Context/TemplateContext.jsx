import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export let TemplateContextAPI = createContext();
const TemplateContext = ({ children }) => {
  let [all_templates, setAll_templates] = useState(null);
  let [selectedTemplate, setSelectedTemplate] = useState(null);

  // ? Getting all templates form the db

  let getTemplatesFromDB = async () => {
    let { data } = await axios.get("http://localhost:5000/All_templates");
    setAll_templates(data);
  };

  useEffect(() => {
    getTemplatesFromDB();
  }, []);

 

  return (
    <TemplateContextAPI.Provider
      value={{ all_templates, selectedTemplate, setSelectedTemplate }}
    >
      {children}
    </TemplateContextAPI.Provider>
  );
};

export default TemplateContext;
