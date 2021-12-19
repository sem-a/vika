let pageSlider = new Swiper('.page', {
    
    // Свои классы 
    wrapperClass: "page__wrapper",
    slideClass: "page__screen",

    // Вертикальные слайдер 
    direction: 'vertical',

    // Количество слайдов для показа
    slidesPerView: 'auto',

    // Включаем параллакс 
    parallax: true,


    // управление клавиатурой 
    keyboard: {
        // включить/выключить
        enabled: true,
        // включить/выключить
        // только когда слайдер 
        // в пределах вьюпорта
        onlyInViewport: true,
        // включить/выключить
        // управление клавиатурой
        // pageUp, pageDown 
        pageUpDown: true,
    },

    // управление колесом мыши 
    mousewheel: {
        // чувствительность колеса мыши
        sensitivity: 1,
        // класс объекта на котором 
        // будет срабатывать прокрутка мышью
        //eventsTarget: ".image-slider"
    },

    // отключения функционала
    // если слайдой меньше чем нужно
    watchOverflow: true,
    

    // скорость 
    speed: 800, 

    // обновить свайпер
    // при изменении элементами слайдера
    observer: true,

    // обновить свайпер 
    // при изменении родительских 
    // элементов слайдера
    observeParents: true, 

    // обновить свайпер 
    // при изменении дочерних
    // элементов слайдера 
    observeSlideChildren: true,



    // навигация 
    // Буллет, текущие положения, прогрессбар
    pagination: {
    el: '.page__pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: "page__bullet",
    bulletActiveClass: "page__bullet_active",
    },
    
    // Скролл 
    scrollbar: {
        el: '.page__scroll',
        dragClass: "page__drag-scroll",
        // возможность перетаскивать скролл
        draggable: true
    },


})