// make the candidate rules table on right hand side
function generateTable(bongProbNumber) {

    // get array for this BP's candidate rules
    let data = rulesArray.filter((item) => item.BP == bongProbNumber);    
    shuffle(data);
    
    // Guard clause to handle empty arrays safely
    if (!data || data.length === 0) return;

    // Create table elements (excluding regular rows)
    const table = document.createElement('table');
    table.id = "rules-table";
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const headerRow = document.createElement('tr');

    // Extract and create headers dynamically using keys from the first object
    const keys = Object.keys(data[0]);  // all seven keys
    keys.forEach(key => {
        if ( ['A', 'B'].includes(key) ) {
            const th = document.createElement('th');
            th.textContent = 'AI rule for set '+key;
            headerRow.appendChild(th);
        }
    });
    thead.appendChild(headerRow);

    // Loop through array to create rows and cells
    data.forEach(item => {  // each json element (each row)
        const row = document.createElement('tr');
        let aContent = item['A']  !== undefined ? item['A']  : '';
        let bContent = item['B']  !== undefined ? item['B']  : '';
        let aToolTip = item['A1'];
        let bToolTip = item['B1'];
        [aContent,bContent].forEach(cellContent => {
            const cell = document.createElement('td');
            cell.textContent = cellContent; 
            cell.setAttribute('onclick', 'logCellText(this)');
            span = document.createElement("span");
            span.classList.add("ToolTip")
            if (cellContent==aContent) {
                if (aToolTip) {
                    span.textContent = aToolTip;
                    cell.appendChild(span)
                }
            } else if (cellContent==bContent) {
                if (bToolTip) {
                    span.textContent = bToolTip;
                    cell.appendChild(span)
                }
            }
            row.appendChild(cell);
        });    
        tbody.appendChild(row);
    });

    // Assemble and inject the complete table into the DOM
    table.appendChild(thead);
    table.appendChild(tbody);
    
    const container = document.getElementById('table-container');
    container.appendChild(table);


    // toast div for click-to-copy
    const toastDiv = document.createElement('div');
    toastDiv.id = 'toast';
    toastDiv.className = 'hidden-toast';
    toastDiv.innerText = 'copied to clipboard!';

    container.appendChild(toastDiv);

}


function logCellText(element) {

    // Clone the cell to avoid breaking the live page
    const clone = element.cloneNode(true);

    // Remove all child elements (spans etc)
    while (clone.firstElementChild) {
    clone.firstElementChild.remove();
    }

    const cleanText = clone.textContent.trim();
    console.log(cleanText);

    navigator.clipboard.writeText(cleanText);

    showToast();

}

function showToast() {
  const toast = document.getElementById("toast");
  
  toast.classList.add("show-toast");

  setTimeout(() => {
    toast.classList.remove("show-toast");
  }, 2000);
}
