$(document).ready(function() {
    let currentOperation = '';
    let firstOperand = '';
    let secondOperand = '';

    $('.calc-button').on('click', function() {
        const display = $('#calc-display');
        let value = display.text();

        if ($(this).text() === '←') {
            display.text(value.slice(0, -1));
        } else if ($(this).text() === 'OK') {
            $('#number-box').text(value);
        } else if ($(this).hasClass('operator')) {
            firstOperand = value;
            currentOperation = $(this).text();
            display.text('');
        } else {
            display.text(value + $(this).text());
        }
    });

    $('#clear-display').on('click', function() {
        $('#calc-display').text('');
        $('#number-box').text('');
        firstOperand = '';
        secondOperand = '';
        currentOperation = '';
    });

    $('#openCalculator').on('click', function () {
        $('#calculator').show();
        $('#closeCalculator').show();
        $('#openCalculator').hide();
    });

    $('#closeCalculator').on('click', function () {
        $('#calculator').hide();
        $('#closeCalculator').hide();
        $('#openCalculator').show();
    });

    $('.calc-button.equals-to').on('click', function() {
        if (currentOperation) {
            secondOperand = $('#calc-display').text();
            let result;

            switch (currentOperation) {
                case '+':
                    result = parseFloat(firstOperand) + parseFloat(secondOperand);
                    break;
                case '-':
                    result = parseFloat(firstOperand) - parseFloat(secondOperand);
                    break;
                case '*':
                    result = parseFloat(firstOperand) * parseFloat(secondOperand);
                    break;
                case '/':
                    result = parseFloat(firstOperand) / parseFloat(secondOperand);
                    break;
                default:
                    result = 'Error';
            }

            $('#calc-display').text(result);
            $('#number-box').text(result);
            firstOperand = result;
            secondOperand = '';
            currentOperation = '';
        }
    });
});