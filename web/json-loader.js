"use strict";

import rules from './rules/mock-candidate-rules.json' with {type: 'json'};

// console.log(rules);
// console.log(typeof rules);


fetch('./rules/mock-candidate-rules.json')
  .then(response => response.json())
  .then(data => createTable(data))
  .catch(err => console.error("Error loading JSON:", err));




function createTable(data) {
    const table = document.getElementById("rules-table");

    // ---- Create header row ----
    const header = table.createTHead();
    const headerRow = header.insertRow();

    const keys = Object.keys(data[0]);
    keys.forEach(key => {
        const th = document.createElement("th");
        th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
        headerRow.appendChild(th);
    });

    // ---- Create table body ----
    const tbody = table.createTBody();

    data.forEach(item => {
        const row = tbody.insertRow();
        keys.forEach(key => {
            const cell = row.insertCell();
            cell.textContent = item[key];
        });
    });
}


