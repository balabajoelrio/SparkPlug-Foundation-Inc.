// Donation
let totalAmount = 0;
const donationTypes = { PayPal: 0, GCash: 0, BPI: 0, Metrobank: 0, PNB: 0, UBP: 0, BDO: 0 };

function recordDonation() {
    const donorName = document.getElementById('donorName').value;
    const donationAmount = parseFloat(document.getElementById('donationAmount').value);
    const donationType = document.getElementById('donationType').value;

    if (donorName && !isNaN(donationAmount) && donationAmount >= 0) {
        totalAmount += donationAmount;
        donationTypes[donationType] += donationAmount;

        updateReport();

        // Record donation in the sidebar iframe
        const donationRecord = `${donorName} donated $${donationAmount.toFixed(2)} via ${donationType}.<br>`;
        document.getElementById('donationFrame').contentDocument.body.innerHTML += donationRecord;

        // Clear form
        document.getElementById('donorName').value = '';
        document.getElementById('donationAmount').value = '';
        document.getElementById('donationType').value = 'PayPal';
    } else {
        alert('Please enter valid information for donor name and donation amount.');
    }
}

function updateReport() {
    // Update total amount
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);

    // Update donation types
    const donationTypesList = document.getElementById('donationTypes');
    donationTypesList.innerHTML = '';
    for (const type in donationTypes) {
        if (donationTypes[type] > 0) {
            const listItem = document.createElement('li');
            listItem.textContent = `${type}: $${donationTypes[type].toFixed(2)}`;
            donationTypesList.appendChild(listItem);
        }
    }
}
