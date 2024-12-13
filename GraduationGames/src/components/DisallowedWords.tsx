import React from "react";

const DisallowedWords: React.FC = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Number</th>
          <th>English</th>
          <th>Italian</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Word1</td>
          <td>Parola1</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Word2</td>
          <td>Parola2</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Word3</td>
          <td>Parola3</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Word4</td>
          <td>Parola4</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DisallowedWords;
