<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Market Calculator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 30px;
      max-width: 400px;
      margin: auto;
    }
    label, input {
      display: block;
      margin-bottom: 10px;
      width: 100%;
    }
    input[type="number"] {
      padding: 5px;
    }
    .results {
      margin-top: 20px;
      background-color: #f2f2f2;
      padding: 15px;
      border-radius: 5px;
    }
  </style>
</head>
<body>

  <h2>Market Calculator</h2>

  <label for="price">Price per Item ($):</label>
  <input type="number" id="price" step="0.01">

  <label for="quantity">Quantity Sold:</label>
  <input type="number" id="quantity">

  <label for="cost">Cost per Item ($):</label>
  <input type="number" id="cost" step="0.01">

  <button onclick="calculate()">Calculate</button>

  <div class="results" id="results">
    <p><strong>Total Revenue:</strong> $<span id="revenue">0.00</span></p>
    <p><strong>Total Cost:</strong> $<span id="totalCost">0.00</span></p>
    <p><strong>Profit:</strong> $<span id="profit">0.00</span></p>
  </div>

  <script>
    function calculate() {
      const price = parseFloat(document.getElementById('price').value) || 0;
      const quantity = parseInt(document.getElementById('quantity').value) || 0;
      const cost = parseFloat(document.getElementById('cost').value) || 0;

      const revenue = price * quantity;
      const totalCost = cost * quantity;
      const profit = revenue - totalCost;

      document.getElementById('revenue').textContent = revenue.toFixed(2);
      document.getElementById('totalCost').textContent = totalCost.toFixed(2);
      document.getElementById('profit').textContent = profit.toFixed(2);
    }
  </script>
<script>
  function calculate() {
    try {
      const price = parseFloat(document.getElementById('price').value);
      const quantity = parseInt(document.getElementById('quantity').value);
      const cost = parseFloat(document.getElementById('cost').value);

      if (isNaN(price) || isNaN(quantity) || isNaN(cost)) {
        throw new Error("All fields must be valid numbers.");
      }

      const revenue = price * quantity;
      const totalCost = cost * quantity;
      const profit = revenue - totalCost;

      document.getElementById('revenue').textContent = revenue.toFixed(2);
      document.getElementById('totalCost').textContent = totalCost.toFixed(2);
      document.getElementById('profit').textContent = profit.toFixed(2);
    } catch (error) {
      alert("Error: " + error.message);
    }
  }
</script>

</body>
</html>
