import React from "react";

interface SimilaritiesProps {
  visible: boolean;
}

const Similarities: React.FC<SimilaritiesProps> = ({ visible }) => {
  return (
    <div>
      {!visible && <p>Nothing to see yet...</p>}
      <div style={{ display: visible ? "block" : "none" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>
                Number
              </th>
              <th style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>
                English
              </th>
              <th style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>
                Italian
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((_, index) => (
              <tr key={index}>
                <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
                  {index + 1}
                </td>
                <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
                  Word{index + 1}
                </td>
                <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
                  Parola{index + 1}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Similarities;
