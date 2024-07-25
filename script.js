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



    $('.download_plan').on('click', function (){
        var type = $(this).data('type');
        var mimeType = type === 'png' ? 'image/png': 'image/jpeg';
        var fileName = type === 'png' ? 'floor_plan.png': 'floor_plan.jpeg';
        var svg = document.getElementById('lin');
        var svgData = new XMLSerializer().serializeToString(svg);
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');

        var defaultWidth = 1920;
        var defaultHeight = 1080;
        var scaleFactor = 2;

        var svgWidth = svg.getAttribute('width') ? parseInt(svg.getAttribute('width')) * scaleFactor : defaultWidth;
        var svgHeight = svg.getAttribute('height') ? parseInt(svg.getAttribute('height')) * scaleFactor : defaultHeight;

        canvas.width = svgWidth;
        canvas.height = svgHeight;

        var img = new Image();
        img.onload = function() {
            ctx.fillStyle = '#fffaec';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.drawImage(img, 0, 0, svgWidth, svgHeight);
            var imgURL = canvas.toDataURL(mimeType);
            var dlLink = document.createElement('a');
            dlLink.download = fileName;
            dlLink.href = imgURL;
            document.body.appendChild(dlLink);
            dlLink.click();
            document.body.removeChild(dlLink);
        };

        img.onerror = function() {
            console.error("Error loading SVG as image.");
        };

        img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgData);
    });



    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropdown button')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
});

function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}