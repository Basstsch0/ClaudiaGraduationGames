import React, { useState } from "react";
import styled from "styled-components";

interface AdminPageProps {
  onToggleVisibility: () => void;
  isVisible: boolean;
}

const Button = styled.button<{ isVisible: boolean }>`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: ${({ isVisible }) => (isVisible ? "#d9534f" : "#5cb85c")};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const AdminPage: React.FC<AdminPageProps> = ({
  onToggleVisibility,
  isVisible,
}) => {
  const [pin, setPin] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);

  const verifyPin = () => {
    if (pin === "1234") {
      setAccessGranted(true);
    } else {
      alert("Invalid PIN");
    }
  };

  return (
    <div>
      {!accessGranted ? (
        <div>
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Enter PIN"
            style={{ marginBottom: "10px", padding: "5px" }}
          />
          <Button onClick={verifyPin} isVisible={false}>
            Enter
          </Button>
        </div>
      ) : (
        <div>
          <Button onClick={onToggleVisibility} isVisible={isVisible}>
            {isVisible ? "Hide Similarities" : "Show Similarities"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
