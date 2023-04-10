const input = document.querySelector('#myInput');
const datalist = document.querySelector('#data');

// build country selector field
Object.keys(regionData).forEach(key => {
  const option = document.createElement('option');
  option.value = key;
  datalist.appendChild(option);
});

// Check for user input into the country field and give suggestions based on data.js
input.addEventListener('input', (event) => {
  const value = event.target.value.toLowerCase();
  const filteredKeys = Object.keys(regionData).filter(key => key.toLowerCase().startsWith(value));
  datalist.innerHTML = '';
  filteredKeys.forEach(key => {
    const option = document.createElement('option');
    option.value = key;
    datalist.appendChild(option);
  });
});



function sendInfo() {
  // Get the values from the input fields
  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);
  const addressee = document.getElementById("addressee").value;
  const country = document.getElementById("myInput").value;
  const task = document.getElementById("task").value;

  console.log(typeof(age));

  // Check if any input fields are empty
  if (!name || !addressee || !country || !task) {
    alert("Please fill in all fields.");
    return;
  }
  if (isNaN(age)) {
    alert("The age field must be a number.");
    return;
  }  
  if (regionData[country] == null){
    alert("Region data error: please input a valid country name.");
    return;
  }

  // Create the URL with parameters
  const url = `https://callumbeaney.github.io/rejection-letter/result.html?n=${name}&a=${age}&p=${addressee}&c=${country}&t=${task}`;
  // const url = `file:///Users/---/---/rejection%20letter/result.html?n=${name}&a=${age}&p=${addressee}&c=${country}&t=${task}`;

  // Redirect to the URL
  window.location.href = url;
}

