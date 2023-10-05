document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById("convert-btn");
    const amountInput = document.getElementById("amount");
    const currencySelect = document.getElementById("currency");
    const convertedAmount = document.getElementById("converted-amount");

    convertBtn.addEventListener("click", function () {
        // Get the amount entered by the user
        const amount = parseFloat(amountInput.value);

        if (!isNaN(amount)) {
            // Get the selected currency conversion direction
            const selectedCurrency = currencySelect.value;

            // Define exchange rates (as an example)
            const exchangeRates = {
                sar_to_usd: 0.2666, // 1 SAR = 0.2666 USD
                usd_to_sar: 3.75,   // 1 USD = 3.75 SAR
            };

            // Perform the conversion based on the selected currency
            let result;
            if (selectedCurrency === "sar") {
                result = (amount * exchangeRates.sar_to_usd).toFixed(2);
                convertedAmount.textContent = `${amount} SAR is approximately ${result} USD`;
            } else if (selectedCurrency === "usd") {
                result = (amount * exchangeRates.usd_to_sar).toFixed(2);
                convertedAmount.textContent = `${amount} USD is approximately ${result} SAR`;
            }
        } else {
            convertedAmount.textContent = "Please enter a valid amount.";
        }
    });
});
