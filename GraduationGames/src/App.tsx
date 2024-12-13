import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Menu from "./components/Menu";
import DisallowedWords from "./components/DisallowedWords";
import Similarities from "./components/Similarities";
import AdminPage from "./components/AdminPage";

const AppContainer = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const VISIBILITY_KEY = "similaritiesVisibility";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("DisallowedWords");
  const [similaritiesVisible, setSimilaritiesVisible] = useState<boolean>(
    () => {
      // Load initial state from localStorage
      const savedVisibility = localStorage.getItem(VISIBILITY_KEY);
      return savedVisibility ? JSON.parse(savedVisibility) : false;
    }
  );

  useEffect(() => {
    // Store the current visibility in localStorage whenever it changes
    localStorage.setItem(VISIBILITY_KEY, JSON.stringify(similaritiesVisible));
  }, [similaritiesVisible]);

  const handleToggleVisibility = () => {
    setSimilaritiesVisible((prevVisibility) => !prevVisibility);
  };

  const renderComponent = () => {
    switch (currentPage) {
      case "DisallowedWords":
        return <DisallowedWords />;
      case "Similarities":
        return <Similarities visible={similaritiesVisible} />;
      case "AdminPage":
        return (
          <AdminPage
            onToggleVisibility={handleToggleVisibility}
            isVisible={similaritiesVisible}
          />
        );
      default:
        return <DisallowedWords />;
    }
  };

  return (
    <AppContainer>
      <Menu onSelect={setCurrentPage} />
      {renderComponent()}
    </AppContainer>
  );
};

export default App;
