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

    $("#download_plan_json").on('click', function () {
        const history = localStorage.getItem('history');

        if (!history) {
            alert('No data found');
            return;
        }

        const jsonObject = JSON.parse(history);
        let floorPlan = jsonObject[jsonObject.length - 1];

        if (floorPlan?.objData?.length === 0
            && floorPlan?.wallData?.length === 0
            && floorPlan?.roomData?.length === 0) {
            alert('Nothing to download, Floor plan is empty');
            return;
        }

        const blob = new Blob([floorPlan], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'floor_plan.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    $('#jsonFileUpload').on('change', function(event) {
        const file = event.target.files[0];
        if (file && file.type === 'application/json') {
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const jsonContent = JSON.stringify([e.target.result]);
                    localStorage.setItem('history', jsonContent);
                    setTimeout(function () {
                        load(0, true);
                    }, 1000);
                } catch (error) {
                    alert('Invalid JSON file. Please upload a valid JSON file.');
                }
            };
            reader.readAsText(file);
        } else {
            alert('Please upload a valid JSON file.');
        }
    });


});