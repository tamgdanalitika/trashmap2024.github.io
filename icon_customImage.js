ymaps.ready(function() {
    // Создаём макет содержимого.
    function Legend() {
        var content = YMaps.jQuery('КП - Контейнерная площадка');

        content.css({
            position: "absolute",
            zIndex: YMaps.ZIndex.CONTROL
        });

        this.onAddToMap = function(map, position) {
            content.appendTo(map.getContainer());
            position = position || new YMaps.ControlPosition(YMaps.ControlPosition.BOTTOM_RIGHT, new YMaps.Point(5, 50));
            position.apply(content);
        };

        this.onRemoveFromMap = function() {
            content.remove();
        };
    };
    MyiconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        KP1pm = new ymaps.Placemark([55.63198142395086, 37.48414845767075], {
            //iconContent: '<div style="color: blue; background-color:white;">1',
            balloonContent: '<div>Площадка переполнена. С контейнеров слезает краска. Контейнерами такого типа неудобно пользоваться и они выглядят неэстетично</div><img src="КП 1.jpeg" height="403">',
            ImageWithContent: 'КП 1.jpeg'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'КП 1 icon.jpeg',
            // Размеры метки.
            iconImageSize: [49, 67],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            //iconContentOffset: [25, 43],
            // Макет содержимого.
            //iconContentLayout: My//iconContentLayout
        });
    KP2pm = new ymaps.Placemark([55.630079, 37.484944], {
        //iconContent: '<div style="color: blue; background-color:white;">2</div>',
        balloonContent: '<div>Площадка переполнена. С контейнеров слезает краска, от одного из них оторвана дверца. Контейнерами такого типа неудобно пользоваться и они выглядят неэстетично</div><img src="КП 2.jpeg" height="403">',
        ImageWithContent: 'КП 2.jpeg'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'КП 2 icon.jpeg',
        // Размеры метки.
        iconImageSize: [49, 67],
        // Смещение левого верхнего угла иконки относительно
        iconImageOffset: [-24, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        //iconContentOffset: [25, 43],
        // Макет содержимого.
        //iconContentLayout: My//iconContentLayout
    });
    KP4pm = new ymaps.Placemark([55.632458, 37.485617], {
        //iconContent: '<div style="color: blue; background-color:white;">4</div>',
        balloonContent: '<div>Площадку закрыли и не демонтируют</div><img src="КП 4.jpg" width="450" height="200">',
        ImageWithContent: 'КП 4.jpg'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'КП 4 icon.jpg',
        // Размеры метки.
        iconImageSize: [67, 49],
        // Смещение левого верхнего угла иконки относительно
        iconImageOffset: [-33, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        //iconContentOffset: [34, 25],
        // Макет содержимого.
        //iconContentLayout: My//iconContentLayout
    });
    KP3pm = new ymaps.Placemark([55.632406, 37.485799], {
        //iconContent: '<div style="color: blue; background-color:white;">3</div>',
        balloonContent: '<div>Мусорные контейнеры всегда переполнены, вокруг свален мусор, мебель</div><img src="КП 3.jpeg" height="403"><img src="КП 3_2.jpeg" height="403">',
        ImageWithContent: 'КП 3.jpeg',
        ////iconContent: '<div style="color: blue; background-color:white;"><div style="color:#00FF00">КП 3</div>'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'КП 3 icon.jpeg',
        // Размеры метки.
        iconImageSize: [45, 60],
        // Смещение левого верхнего угла иконки относительно
        iconImageOffset: [-22, -30],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        //iconContentOffset: [23, 30],
        // Макет содержимого.
        //iconContentLayout: My//iconContentLayout
    });
    KP14pm = new ymaps.Placemark([55.630481, 37.479715], {
        //iconContent: '<div style="color: blue; background-color:white;">14</div>',
        balloonContent: '<img src="КП 14.jpg" height="403"><img src="КП 14_2.jpg" height="403">',
        ////iconContent: '<div style="color: blue; background-color:white;"><div style="color:#00FF00">КП 3</div>'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'КП 14.jpg',
        // Размеры метки.
        iconImageSize: [48, 64],
        // Смещение левого верхнего угла иконки относительно
        iconImageOffset: [-24, -32],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        //iconContentOffset: [24, 32],
        // Макет содержимого.
        //iconContentLayout: My//iconContentLayout
    });
    KP8pm = new ymaps.Placemark([55.63006093078069, 37.48610784424967], {
        //iconContent: '<div style="color: blue; background-color:white;">8</div>',
        balloonContent: '<div>Обычно площадка завалена мусором, баки в стороне стоят, вонь ужасная</div><img src="КП 8.jpeg" height="403">',
        ImageWithContent: 'КП 8.jpeg'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'КП 8 icon.jpeg',
        // Размеры метки.
        iconImageSize: [48, 64],
        // Смещение левого верхнего угла иконки относительно
        iconImageOffset: [-24, -32],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        //iconContentOffset: [24, 32],
        // Макет содержимого.
        //iconContentLayout: My//iconContentLayout
    });
    KP6pm = new ymaps.Placemark([55.633655275376896, 37.51680723082664], {
        //iconContent: '<div style="color: blue; background-color:white;">6</div>',
        balloonContent: '<div>Количество контейнеров не совпадает с количеством мусора, который туда приносят. Эта точка на пути следования к метро, многим удобнее выкинуть мусор</div><img src="КП 6.jpg" height="403">',
        ImageWithContent: 'КП 6.jpg'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'КП 6 icon.jpg',
        // Размеры метки.
        iconImageSize: [60, 45],
        // Смещение левого верхнего угла иконки относительно
        iconImageOffset: [-30, -22],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        //iconContentOffset: [30, 23],
        // Макет содержимого.
        //iconContentLayout: My//iconContentLayout
    });
    KP11pm = new ymaps.Placemark([55.6436, 37.473853], {
        //iconContent: '<div style="color: blue; background-color:white;">11</div>',
        balloonContent: '<div>Контейнерной площадкой не удобно пользоваться. Объём площадки недостаточен - вокруг неё регулярно образуется свалка</div><img src="КП 11.jpeg" height="403">',
        ImageWithContent: 'КП 11.jpeg'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'КП 11 icon.jpeg',
        // Размеры метки.
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        // Макет содержимого.
        //iconContentLayout: My//iconContentLayout
    });
    KP10pm = new ymaps.Placemark([55.644837, 37.47613], {
        //iconContent: '<div style="color: blue; background-color:white;">10</div>',
        balloonContent: '<div>Контейнерная площадка обычно закрыта, неудобно пользоваться. За контейнерами регулярно сваливают мусор, 11.04.2023г. он горел, пожарные тушили</div><img src="КП 10.jpeg" height="403"><img src="КП 10_2.jpeg" height="403">',
        ImageWithContent: 'КП 10.jpeg'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'КП 10 icon.jpeg',
        // Размеры метки.
        iconImageSize: [59, 44],
        // Смещение левого верхнего угла иконки относительно
        iconImageOffset: [-29, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        //iconContentOffset: [30, 24],
        // Макет содержимого.
        //iconContentLayout: My//iconContentLayout
    });
    KP5pm = new ymaps.Placemark([55.643395, 37.476457], {
        //iconContent: '<div style="color: blue; background-color:white;">5</div>',
        balloonContent: '<div>Контейнеры часто переполнены и закрыты, открывать их негигиенично, отверстие для мусора маленькое</div><img src="КП 5.jpeg" height="403">',
        ImageWithContent: 'КП 5.jpeg'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'КП 5 icon.jpeg',
        // Размеры метки.
        iconImageSize: [56, 42],
        // Смещение левого верхнего угла иконки относительно
        iconImageOffset: [-28, -21],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        //iconContentOffset: [28, 21],
        // Макет содержимого.
        //iconContentLayout: My//iconContentLayout
    });
    KP7pm = new ymaps.Placemark([55.62953214286366, 37.4767416296381], {
        //iconContent: '<div style="color: blue; background-color:white;">7</div>',
        balloonContent: '<div>Контейнеры ржавые, сломанные, неудобные - требуют замены</div><img src="КП 7.jpeg" height="403"><img src="КП 7_2.jpeg" height="403">',
        ImageWithContent: 'КП 7.jpeg'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'КП 7 icon.jpeg',
        // Размеры метки.
        iconImageSize: [48, 64],
        // Смещение левого верхнего угла иконки относительно
        iconImageOffset: [-24, -32],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        //iconContentOffset: [24, 32],
        // Макет содержимого.
        //iconContentLayout: My//iconContentLayout
    });
    KP12pm = new ymaps.Placemark([55.644983, 37.477967], {
        //iconContent: '<div style="color: blue; background-color:white;">12</div>',
        balloonContent: '<div>Контейнерной площадкой неудобно пользоваться. Контейнеры часто стоят за пределами площадки</div><img src="КП 12.jpeg" height="403">',
        ImageWithContent: 'КП 12.jpeg'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'КП 12 icon.jpeg',
        // Размеры метки.
        iconImageSize: [59, 44],
        // Смещение левого верхнего угла иконки относительно
        iconImageOffset: [-29, -22],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        //iconContentOffset: [30, 22],
        // Макет содержимого.
        //iconContentLayout: My//iconContentLayout
    });
    KP13pm = new ymaps.Placemark([55.64342, 37.47851], {
        //iconContent: '<div style="color: blue; background-color:white;">13</div>',
        balloonContent: '<div>Контейнерная площадка неудобна в использовании: маленькие отверстия, необходимость открывать крышки - всё это неудобно. Контейнеры регулярно не убирают внутрь площадки</div><img src="КП 13.jpeg" height="403">',
        ImageWithContent: 'КП 13.jpeg'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'КП 13 icon.jpeg',
        // Размеры метки.
        iconImageSize: [59, 44],
        // Смещение левого верхнего угла иконки относительно
        iconImageOffset: [-29, -22],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        //iconContentOffset: [30, 22],
        // Макет содержимого.
        //iconContentLayout: My//iconContentLayout
    });
    KP9pm = new ymaps.Placemark([55.62883, 37.48414], {
        //iconContent: '<div style="color: blue; background-color:white;">9</div>',
        balloonContent: '<div>Контейнерной площадкой данного типа неудобно пользоваться</div><img src="КП 9.jpeg" height="403">',
        ImageWithContent: 'КП 9.jpeg'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'КП 9 icon.jpeg',
        // Размеры метки.
        iconImageSize: [48, 64],
        // Смещение левого верхнего угла иконки относительно
        iconImageOffset: [-24, -32],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        //iconContentOffset: [24, 32],
        // Макет содержимого.
        //iconContentLayout: My//iconContentLayout
    });
    KP15pm = new ymaps.Placemark([55.632458, 37.485617], {
        //iconContent: '<div style="color: blue; background-color:white;">15</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, Площадку закрыли и не демонтируют, несмотря на неоднократные обращения жителей в ГБУ "Жилищник"</div><img src="https://lh3.googleusercontent.com/d/1p5_s7avJ1OFpu3ZL00T-8jdSbOMSNM_s" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1p5_s7avJ1OFpu3ZL00T-8jdSbOMSNM_s',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP16pm = new ymaps.Placemark([55.631857, 37.484127], {
        //iconContent: '<div style="color: blue; background-color:white;">16</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, Площадка повреждена, Мусорными контейнерами неудобно пользоваться, Мусорные контейнеры всегда переполнены, С контейнеров слезает краска.</div><img src="https://lh3.googleusercontent.com/d/1a0Le5Hdr2sOUsPXQn3iok7-H5XWmHjN-" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1a0Le5Hdr2sOUsPXQn3iok7-H5XWmHjN-',
        iconImageSize: [48, 64],
        iconImageOffset: [-24, -32],
        //iconContentOffset: [24, 32],
        //iconContentLayout: My//iconContentLayout
    });
    KP17pm = new ymaps.Placemark([55.630079, 37.484944], {
        //iconContent: '<div style="color: blue; background-color:white;">17</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, Площадка повреждена, Мусорными контейнерами неудобно пользоваться, Мусорные контейнеры всегда переполнены, От одного из контейнеров оторвана дверца</div><img src="https://lh3.googleusercontent.com/d/18UzTswHjivdoE4Nozuz54e5WLV_1yf3V" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/18UzTswHjivdoE4Nozuz54e5WLV_1yf3V',
        iconImageSize: [48, 64],
        iconImageOffset: [-24, -32],
        //iconContentOffset: [24, 32],
        //iconContentLayout: My//iconContentLayout
    });
    KP18pm = new ymaps.Placemark([55.632406, 37.485799], {
        //iconContent: '<div style="color: blue; background-color:white;">18</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, Площадка повреждена, Мусорными контейнерами неудобно пользоваться, Мусорные контейнеры всегда переполнены, вокруг свален мусор, мебель, контейнеры проржавели и с них слезает краска, от одного из контейнеров оторвана дверца</div><img src="https://lh3.googleusercontent.com/d/1330rrRKLplPmaVE5cQWqnuMNf6QIaHuq" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1330rrRKLplPmaVE5cQWqnuMNf6QIaHuq',
        iconImageSize: [48, 64],
        iconImageOffset: [-24, -32],
        //iconContentOffset: [24, 32],
        //iconContentLayout: My//iconContentLayout
    });
    KP19pm = new ymaps.Placemark([55.643395, 37.476457], {
        //iconContent: '<div style="color: blue; background-color:white;">19</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, Площадка повреждена, Мусорными контейнерами неудобно пользоваться, Контейнеры часто закрыты, открывать их не гигиенично, отверстие для мусора маленькое, контейнеры часто переполнены. Вообще практически все площадки в 9мкр.находятся в плохом состоянии</div><img src="https://lh3.googleusercontent.com/d/1LdDmChzm2vgiYw_Wxdjbwe0kQN7yHNnD" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1LdDmChzm2vgiYw_Wxdjbwe0kQN7yHNnD',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP20pm = new ymaps.Placemark([55.632164, 37.514427], {
        //iconContent: '<div style="color: blue; background-color:white;">20</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, Площадка повреждена, Мусорные контейнеры размещены с нарушением норм, Количество контейнеров не совпадает с количеством мусора, который туда приносят. Эта точка на пути следования к метро, мгогим удобнее выкинуть мусор по дороге. Но установить большее количество контейнеров нельзя, т.к. всё рассчитывается по количеству прописанных людей</div><img src="https://lh3.googleusercontent.com/d/1gIMjpXdruYFDRl-EXRlFdMzs1qS3EBab" height="403"><img src="https://lh3.googleusercontent.com/d/1L5I8YWKwAAphLEt9wvC_vD4gwyawffwQ" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1gIMjpXdruYFDRl-EXRlFdMzs1qS3EBab',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP21pm = new ymaps.Placemark([55.633703, 37.488172], {
        //iconContent: '<div style="color: blue; background-color:white;">21</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, мусорными контейнерами неудобно пользоваться </div><img src="https://lh3.googleusercontent.com/d/1orSG1kuNbQWksfKZQp0E-VbEPcHWUXRb" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1orSG1kuNbQWksfKZQp0E-VbEPcHWUXRb',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP22pm = new ymaps.Placemark([55.632622, 37.487904], {
        //iconContent: '<div style="color: blue; background-color:white;">22</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, площадка повреждена, мусорными контейнерами неудобно пользоваться</div><img src="https://lh3.googleusercontent.com/d/1-ln4AzwV5o2uYRuM_Z4AKrCWlxIvHIpO" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1-ln4AzwV5o2uYRuM_Z4AKrCWlxIvHIpO',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP23pm = new ymaps.Placemark([55.632184, 37.487347], {
        //iconContent: '<div style="color: blue; background-color:white;">23</div>',
        balloonContent: '<div>Площадка повреждена, мусорными контейнераи неудобно пользоваться</div><img src="https://lh3.googleusercontent.com/d/1ICjDcsGvubfru2QeU_a9uqsqe-unU-Jm" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1ICjDcsGvubfru2QeU_a9uqsqe-unU-Jm',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP24pm = new ymaps.Placemark([55.631105, 37.486202], {
        //iconContent: '<div style="color: blue; background-color:white;">24</div>',
        balloonContent: '<div>Мусорные контейнеры размещены с нарушением норм, Нет полноценного ограждения вокруг бункера</div><img src="https://lh3.googleusercontent.com/d/11IEzlT3jaBEIPucKKgQZOr6ca0SNVoDR" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/11IEzlT3jaBEIPucKKgQZOr6ca0SNVoDR',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP25pm = new ymaps.Placemark([55.629566, 37.476742], {
        //iconContent: '<div style="color: blue; background-color:white;">25</div>',
        balloonContent: '<div>Площадка повреждена, площадкой неудобно пользоваться, Контейнеры ржавые, сломанные, неудобные - требуют замены</div><img src="https://lh3.googleusercontent.com/d/17NEkL7NeWbLp_y_EpjS5bshySZ2Hn2u4 height="403"> <img src="https://lh3.googleusercontent.com/d/1XqXJ9i-5GrgGSIKqIt8tbiCqw6XdDQ4h" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/17NEkL7NeWbLp_y_EpjS5bshySZ2Hn2u4',
        iconImageSize: [48, 64],
        iconImageOffset: [-24, -32],
        //iconContentOffset: [24, 32],
        //iconContentLayout: My//iconContentLayout
    });
    KP26pm = new ymaps.Placemark([55.630253, 37.485978], {
        //iconContent: '<div style="color: blue; background-color:white;">26</div>',
        balloonContent: '<div>Площадка повреждена, Мусорные контейнеры размещены с нарушением норм, Контейнерная площадка обычно завалена мусором, баки стоят в стороне, неприятный запах</div><img src="https://lh3.googleusercontent.com/d/1dte2ObNgLbAx8q35FyFD9rsXrfCobCjk" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1dte2ObNgLbAx8q35FyFD9rsXrfCobCjk',
        iconImageSize: [48, 64],
        iconImageOffset: [-24, -32],
        //iconContentOffset: [24, 32],
        //iconContentLayout: My//iconContentLayout
    });
    KP27pm = new ymaps.Placemark([55.628830, 37.484140], {
        //iconContent: '<div style="color: blue; background-color:white;">27</div>',
        balloonContent: '<div>Мусорными контейнерами неудобно пользоваться, Контейнеры грязные</div><img src="https://lh3.googleusercontent.com/d/1MWqh5otgkPHZYxHqMc21vqtcnWj6uqME" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1MWqh5otgkPHZYxHqMc21vqtcnWj6uqME',
        iconImageSize: [48, 64],
        iconImageOffset: [-24, -32],
        //iconContentOffset: [24, 32],
        //iconContentLayout: My//iconContentLayout
    });
    KP28pm = new ymaps.Placemark([55.644837, 37.476130], {
        //iconContent: '<div style="color: blue; background-color:white;">28</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, Площадка повреждена, Мусорными контейнерами неудобно пользоваться, Крышки контейнеров обычно закрыты, неудобно пользоваться. За контейнерами регулярно сваливают мусор, 11.04.2023г. он горел, пожарные тушили</div><img src="https://lh3.googleusercontent.com/d/1_vjjy9C6H-ocYKAYFnwKbfT6ccafXISl" height="403"> <img src="https://lh3.googleusercontent.com/d/1AiApIjt7TC_mzqgHQKUTNVuzZ8xDIteq" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1_vjjy9C6H-ocYKAYFnwKbfT6ccafXISl',
        iconImageSize: [48, 64],
        iconImageOffset: [-24, -32],
        //iconContentOffset: [24, 32],
        //iconContentLayout: My//iconContentLayout
    });
    KP29pm = new ymaps.Placemark([55.643600, 37.473853], {
        //iconContent: '<div style="color: blue; background-color:white;">29</div>',
        balloonContent: '<div>Мусорными контейнерами неудобно пользоваться. Объём площадки недостаточен - вокруг неё регулярно образуется свалка</div><img src="КП 11.jpeg" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'КП 11.jpeg',
        iconImageSize: [48, 64],
        iconImageOffset: [-24, -32],
        //iconContentOffset: [24, 32],
        //iconContentLayout: My//iconContentLayout
    });
    KP30pm = new ymaps.Placemark([55.644983, 37.477967], {
        //iconContent: '<div style="color: blue; background-color:white;">30</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, Площадка повреждена, Мусорными контейнерами неудобно пользоваться. Контейнеры часто стоят за пределами площадки</div><img src="https://lh3.googleusercontent.com/d/17z7pIKgkIaruSMS9wxMZAghvWvZNhDQ7" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/17z7pIKgkIaruSMS9wxMZAghvWvZNhDQ7',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP31pm = new ymaps.Placemark([55.643420, 37.478510], {
        //iconContent: '<div style="color: blue; background-color:white;">31</div>',
        balloonContent: '<div>Мусорными контейнерами неудобно пользоваться, Контейнерная площадка неудобна в использовании: маленькие отверстия, необходимость открывать крышки - всё это неудобно. Контейнеры регулярно не убирают внутрь площадки</div><img src="https://lh3.googleusercontent.com/d/1vVRWNaLcAxPyFKgQyYiMjqTzs3MJQluW" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1vVRWNaLcAxPyFKgQyYiMjqTzs3MJQluW',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP32pm = new ymaps.Placemark([55.630029, 37.479571], {
        //iconContent: '<div style="color: blue; background-color:white;">32</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, Площадка повреждена, Мусорными контейнерами неудобно пользоваться, Бункер переполнен, От одного из контейнеров оторвана дверца</div><img src="https://lh3.googleusercontent.com/d/1tOeYC8PaVssSGpIT3rlVkNyeVNKs9tUb" height="403"> <img src="https://lh3.googleusercontent.com/d/1cB_WnwBFwO5e7ZhxZsNSpr8Tvq5ZLHF-" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1tOeYC8PaVssSGpIT3rlVkNyeVNKs9tUb',
        iconImageSize: [48, 64],
        iconImageOffset: [-24, -32],
        //iconContentOffset: [24, 32],
        //iconContentLayout: My//iconContentLayout
    });
    KP33pm = new ymaps.Placemark([55.634979, 37.516342], {
        //iconContent: '<div style="color: blue; background-color:white;">33</div>',
        balloonContent: '<div>Площадка повреждена, Мусорными контейнерами неудобно пользоваться, Контейнеры стоят за пределами площадки</div><img src="https://lh3.googleusercontent.com/d/1JyD7qjaxdlyf9JfxmLhKTaP_K6VjR7U1" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1JyD7qjaxdlyf9JfxmLhKTaP_K6VjR7U1',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP34pm = new ymaps.Placemark([55.618808, 37.499497], {
        //iconContent: '<div style="color: blue; background-color:white;">34</div>',
        balloonContent: '<div>Площадка опечатана. Внутри лежит мусор</div><img src="https://lh3.googleusercontent.com/d/1320j4_Vqj9bk99_LblCa49LNqi20tpxI" height="403"> <img src="https://lh3.googleusercontent.com/d/1v31xtwdZv9blkaFqD6iMG6sDa0xxx-re" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1320j4_Vqj9bk99_LblCa49LNqi20tpxI',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP35pm = new ymaps.Placemark([55.614828, 37.493869], {
        //iconContent: '<div style="color: blue; background-color:white;">35</div>',
        balloonContent: '<div>Площадка не убрана или переполнена</div><img src="https://lh3.googleusercontent.com/d/1fj6ef5ABeQLaV0PZPH4hAboAyV9ZNcvb" height="403"> <img src="https://lh3.googleusercontent.com/d/1Xn_pMxtOCSRy9-zZQ9PGhQUb2K5tuyrt" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1fj6ef5ABeQLaV0PZPH4hAboAyV9ZNcvb',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP36pm = new ymaps.Placemark([55.614121, 37.492611], {
        //iconContent: '<div style="color: blue; background-color:white;">36</div>',
        balloonContent: '<div>Площадка не убрана или переполнена</div><img src="https://lh3.googleusercontent.com/d/1TR-63OJ1TQtQ5PN0RcyPiivjtFnhak6l" height="403"> <img src="https://lh3.googleusercontent.com/d/14IMqrszX2l7NA9RoaoQesD5g8iJCxwio" height="403"> <img src="https://lh3.googleusercontent.com/d/1HnftwSwvaG3NXAPge4p84jITvk8OYDcs" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1TR-63OJ1TQtQ5PN0RcyPiivjtFnhak6l',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP37pm = new ymaps.Placemark([55.623818, 37.504815], {
        //iconContent: '<div style="color: blue; background-color:white;">37</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, Площадка повреждена, Мусорными контейнерами неудобно пользоваться</div><img src="https://lh3.googleusercontent.com/d/1B19hEFGcLdtvBWln3kyz4OosqBR0Gstt" height="403"> <img src="https://lh3.googleusercontent.com/d/1ECr-K6Y1hqfmuwiXx5FUeh7Hll09G5OQ" height="403"> <img src="https://lh3.googleusercontent.com/d/1v2mLMya0JfNCwMPdjHEwluklmzLc3lHq" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1B19hEFGcLdtvBWln3kyz4OosqBR0Gstt',
        iconImageSize: [48, 64],
        iconImageOffset: [-24, -32],
        //iconContentOffset: [24, 32],
        //iconContentLayout: My//iconContentLayout
    });
    KP38pm = new ymaps.Placemark([55.623879, 37.504833], {
        //iconContent: '<div style="color: blue; background-color:white;">38</div>',
        balloonContent: '<div>Контейнеров внутри нет</div><img src="https://lh3.googleusercontent.com/d/1SjQr3ZvAY9wstMzAEoNFQbhqxtdx-SrC" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1SjQr3ZvAY9wstMzAEoNFQbhqxtdx-SrC',
        iconImageSize: [48, 64],
        iconImageOffset: [-24, -32],
        //iconContentOffset: [24, 32],
        //iconContentLayout: My//iconContentLayout
    });
    KP39pm = new ymaps.Placemark([55.615427, 37.491984], {
        //iconContent: '<div style="color: blue; background-color:white;">39</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, Площадка повреждена</div><img src="https://lh3.googleusercontent.com/d/1CSvFIViFVpoKs6KFcJVWKF7TviW09CO_" height="403"><img src = "https://lh3.googleusercontent.com/d/1BJqdht9kfzro7DEftK7dE0rJ0JKKtH0L"  height="403"><img src = "https://lh3.googleusercontent.com/d/1hqzXUCSgbxwnZZu4F76WWG1U6Q0HFrkD" height="403"><img src = "https://lh3.googleusercontent.com/d/1Sxg4gN2DWeY6sgu_vF5aaiw1zWOjpc63" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1CSvFIViFVpoKs6KFcJVWKF7TviW09CO_',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP40pm = new ymaps.Placemark([55.620801, 37.500928], {
        //iconContent: '<div style="color: blue; background-color:white;">40</div>',
        balloonContent: '<div>Мусорные контейнеры размещены с нарушением норм, Редко вывозят мусор, с нарушением графика (рано утром или поздно вечером). Сломана дверца. Не заперт, а подперт камнем</div><img src="https://lh3.googleusercontent.com/d/124xyKKhn5gulq_D6XUnx1-_xLPkbPMoi" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/124xyKKhn5gulq_D6XUnx1-_xLPkbPMoi',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP41pm = new ymaps.Placemark([55.624206, 37.505124], {
        //iconContent: '<div style="color: blue; background-color:white;">41</div>',
        balloonContent: '<div>Площадка не убрана или переполнена</div><img src="https://lh3.googleusercontent.com/d/16DDthX4WlRefCed4zRPbNLhSYA_AfHo6" height="403"> <img src="https://lh3.googleusercontent.com/d/1vI7sSIshe0MAjZJ3eL0dl-2-54qS5Zys" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/16DDthX4WlRefCed4zRPbNLhSYA_AfHo6',
        iconImageSize: [48, 64],
        iconImageOffset: [-24, -32],
        //iconContentOffset: [24, 32],
        //iconContentLayout: My//iconContentLayout
    });
    KP42pm = new ymaps.Placemark([55.615924, 37.493320], {
        //iconContent: '<div style="color: blue; background-color:white;">42</div>',
        balloonContent: '<div>Площадка не убрана или переполнена</div><img src="https://lh3.googleusercontent.com/d/1OZyBcpVS9cCgeVpaI4QcfJdDTogoPmfy" height="403"> <img src="https://lh3.googleusercontent.com/d/1eFr7HJECPbzxW--D686E1VgAOgWWKEAb" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1OZyBcpVS9cCgeVpaI4QcfJdDTogoPmfy',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP43pm = new ymaps.Placemark([55.623727, 37.506059], {
        //iconContent: '<div style="color: blue; background-color:white;">43</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, Мусорные контейнеры размещены с нарушением норм, Нет информационного щита </div><img src="https://lh3.googleusercontent.com/d/1sksaVDrzk_w4Q4iJtu9mx2G0uiz2G9iL" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1sksaVDrzk_w4Q4iJtu9mx2G0uiz2G9iL',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [24, 32],
        //iconContentLayout: My//iconContentLayout
    });
    KP44pm = new ymaps.Placemark([55.620820, 37.501180], {
        //iconContent: '<div style="color: blue; background-color:white;">44</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, Площадка повреждена, Мусорными контейнерами неудобно пользоваться, Ржавчина, искривлен металл</div><img src="https://lh3.googleusercontent.com/d/1GHlPqiAe-M5r_C3nhBUbtKlna_TYbc1A" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1GHlPqiAe-M5r_C3nhBUbtKlna_TYbc1A',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [24, 32],
        //iconContentLayout: My//iconContentLayout
    });
    KP45pm = new ymaps.Placemark([55.623784, 37.506085], {
        //iconContent: '<div style="color: blue; background-color:white;">45</div>',
        balloonContent: '<div>Площадка не убрана или переполнена</div><img src="https://lh3.googleusercontent.com/d/11Zpl84SoGWgljugPj5ZVYirQkpgOTKv0" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/11Zpl84SoGWgljugPj5ZVYirQkpgOTKv0',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP46pm = new ymaps.Placemark([55.615687, 37.491495], {
        //iconContent: '<div style="color: blue; background-color:white;">46</div>',
        balloonContent: '<div>Площадка повреждена, Некачественная покраска - без зачистки, Коррозия металла</div><img src="https://lh3.googleusercontent.com/d/1dugpkNdrrX0LvzERe3-CLqlev8rWvhe2" height="403"><img src="https://lh3.googleusercontent.com/d/1Tdglz_-1k5gtcinkv_wvR6uvhoVk40Ao" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1dugpkNdrrX0LvzERe3-CLqlev8rWvhe2',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP47pm = new ymaps.Placemark([55.625043, 37.507603], {
        //iconContent: '<div style="color: blue; background-color:white;">47</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, Площадка повреждена</div><img src="https://lh3.googleusercontent.com/d/1PEL2wFE9uWklKkiipq6CwL4AcWOnj-fQ" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1PEL2wFE9uWklKkiipq6CwL4AcWOnj-fQ',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP48pm = new ymaps.Placemark([55.620113, 37.499508], {
        //iconContent: '<div style="color: blue; background-color:white;">48</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, Проржавела , отрывается табличка </div><img src="https://drive.google.com/drive/u/0/folders/1mANnzBpFpduKCwEV7ycaeTZMWI48b0w87ue5H-v9di7w6tPKr1iFy2TGsBZxWIqRDRjPfKbJ" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://drive.google.com/drive/u/0/folders/1mANnzBpFpduKCwEV7ycaeTZMWI48b0w87ue5H-v9di7w6tPKr1iFy2TGsBZxWIqRDRjPfKbJ',
        iconImageSize: [48, 64],
        iconImageOffset: [-24, -32],
        //iconContentOffset: [24, 32],
        //iconContentLayout: My//iconContentLayout
    });
    KP49pm = new ymaps.Placemark([55.616238, 37.490959], {
        //iconContent: '<div style="color: blue; background-color:white;">49</div>',
        balloonContent: '<div>Площадка повреждена</div><img src="https://lh3.googleusercontent.com/d/1dnJYOIpVfhLYgeOQXjQeXNifE1SIgfxc" height="403"><img src="https://lh3.googleusercontent.com/d/1rZY7YTw7TqIFiwV73-UQIgNSQDYqeCby" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1dnJYOIpVfhLYgeOQXjQeXNifE1SIgfxc',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP50pm = new ymaps.Placemark([55.625693, 37.508441], {
        //iconContent: '<div style="color: blue; background-color:white;">50</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, Мусорными контейнерами неудобно пользоваться</div><img src="https://lh3.googleusercontent.com/d/10pEbBf95TEiK1hdcw4Dv0T3K6PG282gW" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/10pEbBf95TEiK1hdcw4Dv0T3K6PG282gW',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP51pm = new ymaps.Placemark([55.616767, 37.492105], {
        //iconContent: '<div style="color: blue; background-color:white;">51</div>',
        balloonContent: '<div>Площадка повреждена</div><img src="https://lh3.googleusercontent.com/d/12_Z13pkWMCKe6821MXeqfz0kppAerBYi" height="403"><img src="https://lh3.googleusercontent.com/d/143RypErr8aH6bb2q25ZssnyhvndiKZ9O" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/12_Z13pkWMCKe6821MXeqfz0kppAerBYi',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP52pm = new ymaps.Placemark([55.625634, 37.507579], {
        //iconContent: '<div style="color: blue; background-color:white;">52</div>',
        balloonContent: '<div>Площадка повреждена, Механические повреждения </div><img src="https://lh3.googleusercontent.com/d/1A1vqqYWUgioRNQ1OHzGVCgIlkSLTRRy0" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1A1vqqYWUgioRNQ1OHzGVCgIlkSLTRRy0',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP53pm = new ymaps.Placemark([55.620113, 37.499508], {
        //iconContent: '<div style="color: blue; background-color:white;">53</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, Разбросан мусор. Выломаны дверцы синих бункеров. Не запираются - в серых бункерах. Синие бункеры опечатаны</div><img src="https://lh3.googleusercontent.com/d/1bpt9-5Hp6YbI918pdqNgZvg9QmlGsSOf" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1bpt9-5Hp6YbI918pdqNgZvg9QmlGsSOf',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP54pm = new ymaps.Placemark([55.617533, 37.491445], {
        //iconContent: '<div style="color: blue; background-color:white;">54</div>',
        balloonContent: '<div>Площадка повреждена, Мусорные контейнеры размещены с нарушением норм, Нет нормального номера площадки (выцвел), ворота не закрываются. 2 бака вообще не стоят под навесом.</div><img src="https://lh3.googleusercontent.com/d/1FUw_D0XmSAhnXOFsolvB6BrOyzniH0iT" height="403"><img src="https://lh3.googleusercontent.com/d/1nPr2wj3BdAr2UnnLEXHyylN818Hu3i7u" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1FUw_D0XmSAhnXOFsolvB6BrOyzniH0iT',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP55pm = new ymaps.Placemark([55.626711, 37.50747], {
        //iconContent: '<div style="color: blue; background-color:white;">55</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, площадка повреждена, мусорными контейнерами неудобно пользоваться</div><img src="https://lh3.googleusercontent.com/d/1VCTnGRl3WNIQq2fVzzXZ6PJgBMMx8lw1" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1VCTnGRl3WNIQq2fVzzXZ6PJgBMMx8lw1',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP56pm = new ymaps.Placemark([55.626655, 37.508755], {
        //iconContent: '<div style="color: blue; background-color:white;">56</div>',
        balloonContent: '<div>Площадка не убрана или переполнена</div><img src="https://lh3.googleusercontent.com/d/1C7ggnZLhfEspmSlefK_dBCbrAMf4og0_" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1C7ggnZLhfEspmSlefK_dBCbrAMf4og0_',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP57pm = new ymaps.Placemark([55.616998, 37.489492], {
        //iconContent: '<div style="color: blue; background-color:white;">57</div>',
        balloonContent: '<div>Площадка повреждена, мусорными контейнерами неудобно пользоваться, Дверцы открыты</div><img src="https://lh3.googleusercontent.com/d/1U01k5aPytU71TupoI6L_NyOZy5q0o_t0" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1U01k5aPytU71TupoI6L_NyOZy5q0o_t0',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP58pm = new ymaps.Placemark([55.619493, 37.497368], {
        //iconContent: '<div style="color: blue; background-color:white;">58</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, Площадка повреждена, Мусорными контейнерами неудобно пользоваться, Дверцы синего бункера искривлены.Дверцы синего бункера не заперты </div><img src="https://lh3.googleusercontent.com/d/1GR4HRhEDBd-3YDCFy-W_FOSeb4Yr4g8i" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1GR4HRhEDBd-3YDCFy-W_FOSeb4Yr4g8i',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP59pm = new ymaps.Placemark([55.616989, 37.489342], {
        //iconContent: '<div style="color: blue; background-color:white;">59</div>',
        balloonContent: '<div>Площадка повреждена, Заварены шкафы</div><img src="https://lh3.googleusercontent.com/d/1OMkmtnIwGxo3xXylL534Pul0lTSoPdWy" height="403"><img src="https://lh3.googleusercontent.com/d/1zTuSOa61r3pJYhnvEqt_tON9CLL3aDff" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1OMkmtnIwGxo3xXylL534Pul0lTSoPdWy',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP60pm = new ymaps.Placemark([55.625866, 37.510490], {
        //iconContent: '<div style="color: blue; background-color:white;">60</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, Один контейнер стоит просто на улице </div><img src="https://lh3.googleusercontent.com/d/1KTWZgpVBoW5DsUukRk9Ay-BZYy2MWuAM" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1KTWZgpVBoW5DsUukRk9Ay-BZYy2MWuAM',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP61pm = new ymaps.Placemark([55.618040, 37.488379], {
        //iconContent: '<div style="color: blue; background-color:white;">61</div>',
        balloonContent: '<div>Мусорные контейнеры размещены с нарушением норм</div><img src="https://lh3.googleusercontent.com/d/1tufztnnDyLG1oDE_1oa1tcO-P48Kv44K" height="403"><img src="https://lh3.googleusercontent.com/d/1jpClbRJ90PaA895LzksdNOLDcgpuDF1h" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1tufztnnDyLG1oDE_1oa1tcO-P48Kv44K',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP62pm = new ymaps.Placemark([55.619827, 37.496744], {
        //iconContent: '<div style="color: blue; background-color:white;">62</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, Не заперты дверцы обоих бункеров. Ободранные таблички</div><img src="https://lh3.googleusercontent.com/d/1OnCHBUV1gt1IqGbxl-nG3rIMBMxM4aKb" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1OnCHBUV1gt1IqGbxl-nG3rIMBMxM4aKb',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP63pm = new ymaps.Placemark([55.618152, 37.490012], {
        //iconContent: '<div style="color: blue; background-color:white;">63</div>',
        balloonContent: '<div>Площадка повреждена, Искривлена металлическая обшивка площадки</div><img src="https://lh3.googleusercontent.com/d/1UqdmytAjMWbepmjjPWltOCoWJ3G-dWlv" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1UqdmytAjMWbepmjjPWltOCoWJ3G-dWlv',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP64pm = new ymaps.Placemark([55.628438, 37.512074], {
        //iconContent: '<div style="color: blue; background-color:white;">64</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, Мусорные контейнеры размещены с нарушением норм, Нет информационного щита, два контейнера стоят под открытым небом </div><img src="https://lh3.googleusercontent.com/d/1h5eY9ImJYRE4eukiU3Eu78YB91duLD_Y" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1h5eY9ImJYRE4eukiU3Eu78YB91duLD_Y',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP65pm = new ymaps.Placemark([55.617840, 37.489269], {
        //iconContent: '<div style="color: blue; background-color:white;">65</div>',
        balloonContent: '<div>Мусорные контейнеры размещены с нарушением норм, Нет синего бака</div><img src="https://lh3.googleusercontent.com/d/1_A5VyUmBG_OhJXzJWvYXWV6Treu6_7pf" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1_A5VyUmBG_OhJXzJWvYXWV6Treu6_7pf',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP66pm = new ymaps.Placemark([55.629102, 37.510739], {
        //iconContent: '<div style="color: blue; background-color:white;">66</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, Нет номера </div><img src="https://lh3.googleusercontent.com/d/1joZvXGLuG8tzPYwc9Hv_lRebZkNG1Jgt" height="403"><img src="https://lh3.googleusercontent.com/d/1q2aE22MCQwPr03Y2mXl9rN7_QvuDgKZb" height="403"><img src="https://lh3.googleusercontent.com/d/11LuLUNzXFkYIJkcj4W5ry1pMC5vu70DK" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1joZvXGLuG8tzPYwc9Hv_lRebZkNG1Jgt',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP67pm = new ymaps.Placemark([55.618492, 37.489827], {
        //iconContent: '<div style="color: blue; background-color:white;">67</div>',
        balloonContent: '<div>Заваренные 2 шкафа. Но так площадка очень чистая и открыты люки. Очень хорошо. Единственно она почему-то стоит на люке…</div><img src="https://lh3.googleusercontent.com/d/1sxl_-p7GE73y6gC9gHXYAHQbafNmaPhp" height="403"><img src="https://lh3.googleusercontent.com/d/1v0HX2S11KnOquoAR_XR3YawHIXZYUv4V" height="403"><img src="https://lh3.googleusercontent.com/d/1_I_UMatt5sDa-EAei0Semmz3Aj_65FQu" height="403"><img src="https://lh3.googleusercontent.com/d/1d63t-sZl7DyjIlID6kijlTQ6v9EFmT4K" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1sxl_-p7GE73y6gC9gHXYAHQbafNmaPhp',
        iconImageSize: [48, 64],
        iconImageOffset: [-24, -32],
        //iconContentOffset: [24, 32],
        //iconContentLayout: My//iconContentLayout
    });
    KP68pm = new ymaps.Placemark([55.627970, 37.509487], {
        //iconContent: '<div style="color: blue; background-color:white;">68</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, Нет информационного щита</div><img src="https://lh3.googleusercontent.com/d/1872ZZRKhbQd4vLUMcG1KGxAWIKaSrCep" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1872ZZRKhbQd4vLUMcG1KGxAWIKaSrCep',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP69pm = new ymaps.Placemark([55.628079, 37.509362], {
        //iconContent: '<div style="color: blue; background-color:white;">69</div>',
        balloonContent: '<div>Площадка не убрана или переполнена</div><img src="https://lh3.googleusercontent.com/d/1wSPZIKcarT1MZieQ7iUk-jdvXRjeY46S" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1wSPZIKcarT1MZieQ7iUk-jdvXRjeY46S',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP70pm = new ymaps.Placemark([55.621903, 37.497487], {
        //iconContent: '<div style="color: blue; background-color:white;">70</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, Погнутые дверцы</div><img src="https://lh3.googleusercontent.com/d/1bwHoNRYSL2tITlsnTLQDkuVcjQ5NjoQm" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1bwHoNRYSL2tITlsnTLQDkuVcjQ5NjoQm',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP71pm = new ymaps.Placemark([55.627259, 37.509413], {
        //iconContent: '<div style="color: blue; background-color:white;">71</div>',
        balloonContent: '<div>Площадка не убрана или переполнена</div><img src="https://lh3.googleusercontent.com/d/1ASRjkxm2tM7oJPSlhSeVHyC1rd7YBzKy" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1ASRjkxm2tM7oJPSlhSeVHyC1rd7YBzKy',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP72pm = new ymaps.Placemark([55.619327, 37.490670], {
        //iconContent: '<div style="color: blue; background-color:white;">72</div>',
        balloonContent: '<div>Площадка такого типа нуждается в замене</div><img src="https://lh3.googleusercontent.com/d/1sx8tUllnoy1tUitLjMTS0n0ASzDnmLtK" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1sx8tUllnoy1tUitLjMTS0n0ASzDnmLtK',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP73pm = new ymaps.Placemark([55.625180, 37.506367], {
        //iconContent: '<div style="color: blue; background-color:white;">73</div>',
        balloonContent: '<div>Площадка не убрана или переполнена</div><img src="https://lh3.googleusercontent.com/d/1Z4SC6JauF1Kxgn9JHxjBGeHmOU5-FwiP" height="403"><img src="https://lh3.googleusercontent.com/d/1mcgGRDbHp_BTg4s0PFMejLDToGoc9PC9" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1Z4SC6JauF1Kxgn9JHxjBGeHmOU5-FwiP',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP74pm = new ymaps.Placemark([55.621510, 37.496108], {
        //iconContent: '<div style="color: blue; background-color:white;">74</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, Дверцы сломаны и проржавели</div><img src="https://lh3.googleusercontent.com/d/11WDnhpfvU8LtByIzeEGPpOCptZL7ZRSs" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/11WDnhpfvU8LtByIzeEGPpOCptZL7ZRSs',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP75pm = new ymaps.Placemark([55.620456, 37.490866], {
        //iconContent: '<div style="color: blue; background-color:white;">75</div>',
        balloonContent: '<div>Площадка не убрана или переполнена</div><img src="https://lh3.googleusercontent.com/d/12E651gUv6lUBQ2idcPl9D2z1ngtRnQts" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/12E651gUv6lUBQ2idcPl9D2z1ngtRnQts',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP76pm = new ymaps.Placemark([55.621224, 37.495368], {
        //iconContent: '<div style="color: blue; background-color:white;">76</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, Открыты дверцы серого бункера, покорежены дверцы; ржавчина, трещина в стенке</div><img src="https://lh3.googleusercontent.com/d/1S4Pm5HFMFtiZo8LimIhTm9N-WGE2WyYW" height="403"><img src="https://lh3.googleusercontent.com/d/1hFOsxFA7eKW93svVbn-w_lqaV9fvVPwc" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1S4Pm5HFMFtiZo8LimIhTm9N-WGE2WyYW',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP77pm = new ymaps.Placemark([55.620882, 37.489854], {
        //iconContent: '<div style="color: blue; background-color:white;">77</div>',
        balloonContent: '<div>Площадка не убрана или переполнена</div><img src="https://lh3.googleusercontent.com/d/17LHuF3uccOp0Hu3G4WPMMu9AGFYLHv_F" height="403"><img src="https://lh3.googleusercontent.com/d/1mcWR-nqzoXb-lnuyJ9PsFAXzXGhD7ZZQ" height="403"><img src="https://lh3.googleusercontent.com/d/1-QXP1XbO6y3XnPR4ZggXeHlykS4-MoiC" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/17LHuF3uccOp0Hu3G4WPMMu9AGFYLHv_F',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP78pm = new ymaps.Placemark([55.619566, 37.487087], {
        //iconContent: '<div style="color: blue; background-color:white;">78</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, Приварены петли</div><img src="https://lh3.googleusercontent.com/d/1YZfEofouDVT6e80QKU48wq01wQhUMQhw" height="403"><img src="https://lh3.googleusercontent.com/d/1iTDqvUxKDid1vxYLlmwAnAQuXG7Ps8NQ" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1YZfEofouDVT6e80QKU48wq01wQhUMQhw',
        iconImageSize: [48, 64],
        iconImageOffset: [-24, -32],
        //iconContentOffset: [24, 32],
        //iconContentLayout: My//iconContentLayout
    });
    KP79pm = new ymaps.Placemark([55.619230, 37.497032], {
        //iconContent: '<div style="color: blue; background-color:white;">79</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, Дверцы погнуты, одна дверца открыта</div><img src="https://lh3.googleusercontent.com/d/1tlnTFaupeoVKBv8dx9kKIlzNdO0-dsW4" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1tlnTFaupeoVKBv8dx9kKIlzNdO0-dsW4',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP80pm = new ymaps.Placemark([55.620145, 37.486026], {
        //iconContent: '<div style="color: blue; background-color:white;">80</div>',
        balloonContent: '<div>Мусорные контейнеры размещены с нарушением норм, Заварены 3 шкафа, а синий контейнер стоит на улице</div><img src="https://lh3.googleusercontent.com/d/16d3rouZWTmTOg7hHP9xlXbHuUUxxMZvv" height="403"><img src="https://lh3.googleusercontent.com/d/1q3qKYdpB6kufhXEKqAzcyxfkApYezazD" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/16d3rouZWTmTOg7hHP9xlXbHuUUxxMZvv',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP81pm = new ymaps.Placemark([55.618890, 37.487309], {
        //iconContent: '<div style="color: blue; background-color:white;">81</div>',
        balloonContent: '<div>Мусорные контейнеры размещены с нарушением норм, Синий контейнер стоит под открытым небом</div><img src="https://lh3.googleusercontent.com/d/1Cydoe7riPCzLOR_x1c1Yg-jddZZFq7kS" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1Cydoe7riPCzLOR_x1c1Yg-jddZZFq7kS',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP82pm = new ymaps.Placemark([55.618764, 37.488154], {
        //iconContent: '<div style="color: blue; background-color:white;">82</div>',
        balloonContent: '<div>Мусорные контейнеры размещены с нарушением норм, Синий контейнер стоит под открытым небом</div><img src="https://lh3.googleusercontent.com/d/1XDurhjkuxXtJzgNgcMCFgihfJ0f62BXQ" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1XDurhjkuxXtJzgNgcMCFgihfJ0f62BXQ',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP83pm = new ymaps.Placemark([55.619422, 37.488339], {
        //iconContent: '<div style="color: blue; background-color:white;">83</div>',
        balloonContent: '<div>Площадка не убрана или переполнена, 2 шкафа заварено. На месте синего навален мусор</div><img src="https://lh3.googleusercontent.com/d/1suQ8RAh3nlaTZHoIZzBR8lM1GRm94Xbo" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1suQ8RAh3nlaTZHoIZzBR8lM1GRm94Xbo',
        iconImageSize: [64, 48],
        iconImageOffset: [-32, -24],
        //iconContentOffset: [32, 24],
        //iconContentLayout: My//iconContentLayout
    });
    KP84pm = new ymaps.Placemark([55.633652, 37.488213], {
        //iconContent: '<div style="color: blue; background-color:white;">84</div>',
        balloonContent: '<div>Площадка повреждена, Ржавчина, плохо окрашены серым</div><img src="https://lh3.googleusercontent.com/d/1677mi5guAosxHdajVxckEFAJag-560iK" height="403"><img src="https://lh3.googleusercontent.com/d/1TuwVEdmVZarxeCe5WHm2LLxv1fzoyFM7" height="403"><img src="https://lh3.googleusercontent.com/d/1BGMVwN3-4XQdYlISy1KMXrOmy-SI435A" height="403"><img src="https://lh3.googleusercontent.com/d/1GmRYbo2d3GbNqmBUBGT44Nb0N3WwdV_7" height="403"><img src="https://lh3.googleusercontent.com/d/16R2ZONElNHUXT24NWgeQat1ZCy4sxg2V" height="403"><img src="https://lh3.googleusercontent.com/d/1UjIcOMbmcqrKuh5zjmXXMG03EYw1co0A" height="403">',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'https://lh3.googleusercontent.com/d/1677mi5guAosxHdajVxckEFAJag-560iK',
        iconImageSize: [48, 64],
        iconImageOffset: [-24, -32],
        //iconContentOffset: [24, 32],
        //iconContentLayout: My//iconContentLayout
    });
    var myMap = new ymaps.Map('map', {
            center: [55.62883, 37.48414],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }).geoObjects
        .add(KP1pm)
        .add(KP2pm)
        .add(KP3pm)
        .add(KP4pm)
        .add(KP8pm)
        .add(KP5pm)
        .add(KP7pm)
        .add(KP8pm)
        .add(KP9pm)
        .add(KP10pm)
        .add(KP11pm)
        .add(KP12pm)
        .add(KP13pm)
        .add(KP6pm)
        .add(KP14pm)
        .add(KP15pm)
        .add(KP16pm)
        .add(KP17pm)
        .add(KP18pm)
        .add(KP19pm)
        .add(KP20pm)
        .add(KP21pm)
        .add(KP22pm)
        .add(KP23pm)
        .add(KP24pm)
        .add(KP25pm)
        .add(KP26pm)
        .add(KP27pm)
        .add(KP28pm)
        .add(KP29pm)
        .add(KP30pm)
        .add(KP31pm)
        .add(KP32pm)
        .add(KP33pm)
        .add(KP34pm)
        .add(KP35pm)
        .add(KP36pm)
        .add(KP37pm)
        .add(KP38pm)
        .add(KP39pm)
        .add(KP40pm)
        .add(KP41pm)
        .add(KP42pm)
        .add(KP43pm)
        .add(KP44pm)
        .add(KP45pm)
        .add(KP46pm)
        .add(KP47pm)
        .add(KP48pm)
        .add(KP49pm)
        .add(KP50pm)
        .add(KP51pm)
        .add(KP52pm)
        .add(KP53pm)
        .add(KP54pm)
        .add(KP55pm)
        .add(KP56pm)
        .add(KP57pm)
        .add(KP58pm)
        .add(KP59pm)
        .add(KP60pm)
        .add(KP61pm)
        .add(KP62pm)
        .add(KP63pm)
        .add(KP64pm)
        .add(KP65pm)
        .add(KP66pm)
        .add(KP67pm)
        .add(KP68pm)
        .add(KP69pm)
        .add(KP70pm)
        .add(KP71pm)
        .add(KP72pm)
        .add(KP73pm)
        .add(KP74pm)
        .add(KP75pm)
        .add(KP76pm)
        .add(KP77pm)
        .add(KP78pm)
        .add(KP79pm)
        .add(KP80pm)
        .add(KP81pm)
        .add(KP82pm)
        .add(KP83pm)
        .add(new Legend(), new YMaps.ControlPosition(YMaps.ControlPosition.BOTTOM_LEFT, new YMaps.Point(5, 50)))
});