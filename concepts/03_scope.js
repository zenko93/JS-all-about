// область видимости
// доступность переменных в нашем коде
// глобальный scope (document, window) и локальный scope (в рамках функции)

function funcA() {
    let a = 1;

    function funcB() {
        let b = 2;

        function funcC() {
            let c = 3;

            console.log('funcC', a, b, c);
        }
        funcC();
        console.log('funcB', a, b);
    }
    funcB();
    console.log('funA', a);
}
funcA();
