const mario = document.querySelector('.mario');
mario.addEventListener('mouseover', () => {
    // ADding animations on hover
    mario.classList.add('jump');
    document.querySelector('.block').classList.add('delayed_jump');
    document.querySelector('.question_mark').classList.add('delayed_rainbow')
    document.querySelector('.hidden_coin').classList.add('c_jump');

    // Removing animations after they have run their time and are done
    setTimeout(() => mario.classList.remove('jump'), 800)
    setTimeout(() => document.querySelector('.block').classList.remove('delayed_jump'), 950)
    setTimeout(() => document.querySelector('.question_mark').classList.remove('delayed_rainbow'), 1960)
    setTimeout(() => document.querySelector('.hidden_coin').classList.remove('c_jump'), 1175)

})