document.addEventListener('DOMContentLoaded', function () {
    const wheels = document.querySelectorAll('.bus_wheel');
    const road = document.querySelector('.road');
    const bWheels = document.querySelector('.bus_wheels');
    const bus = document.querySelector('.bus');
    const person = document.querySelector('.person');

    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const enterBtn = document.getElementById('enterBtn');

    startBtn.addEventListener('click', function () {
        wheels.forEach(wheel => {
            wheel.style.animation = 'spin 2s linear infinite'; 
        });
        road.classList.add('road_animation');
        bus.style.animation = 'bounce 1s infinite';
        bWheels.style.animation = 'bounce 1s infinite';
    });

    stopBtn.addEventListener('click', function () {
        setTimeout(() => {
            road.classList.remove('road_animation');
            bus.style.animation = 'none';
            bWheels.style.animation = 'none';

            wheels.forEach(wheel => {
                wheel.style.animation = 'none'; 
            });
        }, 350);
    });

    enterBtn.addEventListener('click', function () {
        person.style.display = 'block'; 
        person.style.animation = 'none'; 
        void person.offsetWidth; 
        person.style.animation = 'fadeOut 4s forwards';
        setTimeout(() => {
            person.style.display = 'none'; 
        }, 600);
    });
});
