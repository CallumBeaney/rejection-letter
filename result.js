!function main() {
  
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const name = urlParams.get('n');
  const age = urlParams.get('a');
  const addressee = urlParams.get('p');
  const country = urlParams.get('c');
  const task = urlParams.get('t');

  const continent = regionData[country].region;
  const lifespan = regionData[country].age;
  const remainingLifespan = (lifespan - age).toFixed(1);

  let text = "";

  text += `<p>Dear ${addressee},</p>`;
  text += `<p>I am writing to apologize for my inability to complete the following task requested of me:</p><p>　　　${task}</p>`;
  text += `<p>Being a citizen of ${country}, ${continent}, which has an average life expectancy of ${lifespan}, I only have a predicted ${remainingLifespan} years of life left to live.</p>`;
  text += `<p>As much as I would like to assist you, I must prioritize my limited time and resources to other endeavors that are most critical for me to accomplish before my passing. Please understand that this decision was not easy for me, but one that I had to make given my current circumstances.</p>`;
  text += `<p>I truly regret any inconvenience this may have caused and I hope that you can find an alternate solution to your needs. Thank you for considering me for the task and please accept my apologies for any disappointment or inconvenience caused.</p>`;
  text += `<p>Sincerely,</p>`;
  text += `<p>${name}</p><br><br>`;
  


//   Dear [Recipient],

// I am writing to apologize for my inability to complete the task that you have assigned me. Unfortunately, I must decline your request as it would require a significant amount of time and effort that I am simply unable to provide.

// As much as I would like to assist you, I must prioritize my limited time and resources to other endeavors that are most critical for me to accomplish before my passing. Please understand that this decision was not easy for me, but one that I had to make given my current circumstances.

// I truly regret any inconvenience this may have caused and I hope that you can find an alternate solution to your needs. Thank you for considering me for the task and please accept my apologies for any disappointment or inconvenience caused.

// Sincerely,

// [Your Name]

  
  document.getElementById("rejectionDiv").innerHTML += text;
}();


// console.log(name)
// console.log(addressee)
// console.log(country)
// console.log(task)

// example.html?name=John&age=25

//  const url = `file:///Users/beaneyc/Developer/rejection%20letter/result.html?name=${name}&addressee=${addressee}&country=${country}&task=${task}`;
