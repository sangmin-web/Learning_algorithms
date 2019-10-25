let $result = document.querySelector("#result");
let $input = document.querySelector("input");
let $button = document.querySelector("button");
let $count = $result.querySelector("p");
let $list = $result.querySelector("ul");

function print(result) {
    let li = document.createElement("li");
    for (let i = 0; i < result.length; i++) {
        switch (result[i]) {
            case 'r':
                li.innerHTML += `<i class="fas fa-hand-rock"></i>`
                break;
            case 'p':
                li.innerHTML += `<i class="fas fa-hand-paper"></i>`
                break;
            case 's':
                li.innerHTML += `<i class="fas fa-hand-scissors"></i>`
                break;

            default:
                break;
        }
    }
    return li;
}

$button.addEventListener("click", (e) => {
    e.preventDefault();
    $list.innerHTML = "";
    $count.innerText = "총 갯수: ";
    const input = parseInt($input.value);
    const results = calc(parseInt(input));
    $count.innerText += results.length;
    results.forEach((v, i) => {
        if (i < 100) {
            $list.append(print(v));
        }
        return;
    })



})

let calc = function (rounds) {

    let results = [];
    const possibilites = ['r', 'p', 's'];

    function play(temp, rounds) {
        if (rounds === 0) {
            results.push(temp);
            return;
        }
        for (let i = 0; i < 3; i++) {
            play(temp + possibilites[i], rounds - 1);
        }
    }
    play("", rounds);
    return results;
}