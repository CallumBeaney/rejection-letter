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
  
  document.getElementById("rejectionDiv").innerHTML += text;
}();
