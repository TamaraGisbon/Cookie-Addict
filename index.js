const element = document.getElementById('cookie_button');
const cookies = document.getElementById('cookie_count');
const IcingInjection = document.getElementById('IcingInjection');
const chips = document.getElementById('chips');
const InjectionCountElement = document.getElementById('InjectionCount');

let count = 0;
let cost = 10;
let InjectionCount = 0;
disableCheck();

element.addEventListener('click', function () {
    count++;
    cookies.innerText = count;

    element.classList.add('big-cookie');
    setTimeout(()=> element.classList.remove('big-cookie'), 100);
    disableCheck();
})


function disableCheck (){
    if (count < cost){
        IcingInjection.setAttribute('disabled', true);
        }
        else if(count >= cost){
            IcingInjection.removeAttribute('disabled');
        }
    }

IcingInjection.addEventListener('click', function () {
    count -= cost;
    cookies.innerText = count;
    setInterval(function () {
        count += 1;
        cookies.innerText = count;
        disableCheck();
    },
        1000);
    cost +=10;
    InjectionCount +=1;
    InjectionCountElement.innerText = InjectionCount;
    chips.innerText = cost;
    disableCheck();
})
