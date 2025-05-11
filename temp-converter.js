document.addEventListener('DOMContentLoaded', function() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const convertCtoF = document.getElementById('convert-c-to-f');
    const convertFtoC = document.getElementById('convert-f-to-c');

    // 섭씨를 화씨로 변환
    function celsiusToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    // 화씨를 섭씨로 변환
    function fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    // 섭씨 → 화씨 변환 버튼 클릭 이벤트
    convertCtoF.addEventListener('click', function() {
        if (celsiusInput.value !== '') {
            const celsius = parseFloat(celsiusInput.value);
            const fahrenheit = celsiusToFahrenheit(celsius);
            fahrenheitInput.value = fahrenheit.toFixed(1);
        }
    });

    // 화씨 → 섭씨 변환 버튼 클릭 이벤트
    convertFtoC.addEventListener('click', function() {
        if (fahrenheitInput.value !== '') {
            const fahrenheit = parseFloat(fahrenheitInput.value);
            const celsius = fahrenheitToCelsius(fahrenheit);
            celsiusInput.value = celsius.toFixed(1);
        }
    });

    // 섭씨 입력 필드 변경 이벤트
    celsiusInput.addEventListener('input', function() {
        if (this.value !== '') {
            const celsius = parseFloat(this.value);
            const fahrenheit = celsiusToFahrenheit(celsius);
            fahrenheitInput.value = fahrenheit.toFixed(1);
        } else {
            fahrenheitInput.value = '';
        }
    });

    // 화씨 입력 필드 변경 이벤트
    fahrenheitInput.addEventListener('input', function() {
        if (this.value !== '') {
            const fahrenheit = parseFloat(this.value);
            const celsius = fahrenheitToCelsius(fahrenheit);
            celsiusInput.value = celsius.toFixed(1);
        } else {
            celsiusInput.value = '';
        }
    });
}); 