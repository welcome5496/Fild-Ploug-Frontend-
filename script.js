function calculatePloughing() {
  const fieldSize = document.getElementById("field-size").value;
  const tractorType = document.getElementById("tractor-type").value;
  const ploughType = document.getElementById("plough-type").value;

  // Ploughing time estimation (in hours per bigha)
  const timePerBigha = {
    small: 2,  // Small Tractor
    medium: 1.5, // Medium Tractor
    large: 1,   // Large Tractor
  };

  const ploughTimeMultiplier = {
    disc: 1,
    reversible: 0.8,
    harrow: 1.2,
  };

  if (fieldSize === "") {
    alert("Please enter a valid field size.");
    return;
  }

  // Calculate time to plough based on field size and tractor type
  const timeRequired = timePerBigha[tractorType] * fieldSize * ploughTimeMultiplier[ploughType];
  
  // Calculate estimated cost (a simple cost calculation based on tractor type and time)
  const costPerHour = {
    small: 500,  // Cost per hour for small tractor
    medium: 700, // Cost per hour for medium tractor
    large: 1000, // Cost per hour for large tractor
  };

  const estimatedCost = costPerHour[tractorType] * timeRequired;

  // Display results
  document.getElementById("ploughing-time").textContent = `Estimated Time: ${timeRequired.toFixed(2)} hours`;
  document.getElementById("cost-estimate").textContent = `Estimated Cost: ₹${estimatedCost.toFixed(2)}`;
}
