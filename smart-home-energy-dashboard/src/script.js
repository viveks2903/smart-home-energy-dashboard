// This file contains the JavaScript code for the Smart Home Energy Dashboard.
// It handles the logic for updating the energy budget, fetching energy data, and rendering the charts using Chart.js.

const ctx = document.getElementById('energyChart').getContext('2d');
let energyChart;
let energyData = [50, 60, 70, 80, 90]; // Sample energy data
let budget = 100; // Default budget

function initializeChart() {
    energyChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Energy Consumption (kWh)',
                data: energyData,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'kWh'
                    }
                }
            }
        }
    });
}

function updateBudget() {
    const budgetInput = document.getElementById('budgetInput').value;
    budget = parseInt(budgetInput);
    document.getElementById('alertMessage').innerText = `Energy budget set to ${budget} kWh.`;
    checkBudget();
}

function checkBudget() {
    const totalConsumption = energyData.reduce((a, b) => a + b, 0);
    if (totalConsumption > budget) {
        document.getElementById('alertMessage').innerText += ' Alert: Budget exceeded!';
    }
}

// Initialize the chart when the page loads
window.onload = function() {
    initializeChart();
};