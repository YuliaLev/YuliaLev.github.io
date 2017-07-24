var app = angular.module('myApp');

app.constant('appInfoConstant', [
    {
        'appNumber': 1,
        'appFlag': false,
        'appSrc': 'calculatorAppVideo/calculatorAppDemo',
        'appName': 'Калькулятор',
        'appNameEN': 'Calculator App',
        'appDescription': 'Приложение-калькулятор с основными математическими функциями сложения, умножения, вычитания, деления, взятия процента, а также дополнительными функциями, такими как вычисление квадратного корня, факториала, некоторыми тригонометрическими функциям и возможностью использования скобок',
        'appDescriptionEN': 'This is the Calculator Application with basic mathematical functions such as addition, multiplication, subtraction, division, calculation of percentage and also with additional functions, such as calculating the square root, factorial, some trigonometric functions and with the possibility to use parentheses',
        'appSmallImgSrc': 'calculatorAppSmallImg'
    },
    {
        'appNumber': 2,
        'appFlag': false,
        'appSrc': 'stickyNotesAppVideo/stickyNotesAppDemo',
        'appName': 'Заметки',
        'appNameEN': 'Sticky Notes App',
        'appDescription': 'Приложение для создания заметок (напоминаний, заданий) на клейких стикерах, которые можно редактировать, удалять, изменять цвет стикера, перемещать в любую часть экрана и отмечать заметку (напоминание, задание) как выполненную',
        'appDescriptionEN': 'A simple Application for creating sticky notes (reminders, tasks), you can edit, delete, change the color of the note, move notes to any part of the screen and mark a note (reminder, task) as done',
        'appSmallImgSrc': 'stickyNotesAppSmallImg'
    },
    {
        'appNumber': 3,
        'appFlag': false,
        'appSrc': 'currencyConverterAppVideo/currencyConverterAppDemo',
        'appName': 'Конвертер валют',
        'appNameEN': 'Currency Converter App',
        'appDescription': 'Приложение представляет собой конвертер валют с использованием API получения официального курса белорусского рубля по отношению к иностранным валютам, устанавливаемого Национальным банком Республики Беларусь, включает 25 иностранных валют, а также статистику изменения курсов валют в виде графика за предшествующий период (неделя/месяц)',
        'appDescriptionEN': 'This is a Currency Converter Application with using the API to receive the official exchange rate of the Belarusian ruble against foreign currencies, set by the National Bank of the Republic of Belarus. The App includes 25 foreign currencies. You can also view statistics of changes in exchange rates in the form of a graph. This currency graph will show you a week or a month history',
        'appSmallImgSrc': 'currencyConverterAppSmallImg'
    },
    {
        'appNumber': 4,
        'appFlag': false,
        'appSrc': 'recipeKeeperAppVideo/recipeKeeperAppDemo',
        'appName': 'Кулинарная книга',
        'appNameEN': 'Recipe Keeper App',
        'appDescription': 'Приложение для записи кулинарных рецептов с возможностью просматривать видео рецепты на кулинарном канале YouTube (с использованием API YouTube), а также создавать список продуктов для похода в магазин. Рецепты можно добавлять, редактировать, удалять, отмечать как любимые, просматривать по категориям, искать и сортировать по различным параметрам. Все рецепты сохраняются в файл (с созданием серверной части приложения с применением NodeJS и фреймворка Express)',
        'appDescriptionEN': 'Recipe Keeper Book is an application for recording culinary recipes with the ability to view video recipes on the YouTube culinary channel (using the YouTube API), and create a shopping list. Recipes can be added, edited, deleted, marked as favorites, viewed by category, searched and sorted by various parameters. All recipes are saved to the file (with the creation of the server part of the application using NodeJS and the Express framework)',
        'appSmallImgSrc': 'recipeKeeperAppSmallImg'
    },
    {
        'appNumber': 5,
        'appFlag': false,
        'appSrc': 'caloriesCalculatorAppVideo/caloriesCalculatorAppDemo',
        'appName': 'Калькулятор калорий',
        'appNameEN': 'Calories Calculator App',
        'appDescription': 'Приложение-калькулятор калорий. Позволяет рассчитать количество питательных веществ и калорий в каждом приёме пищи и за весь день. Статитстика содержит все результаты, а также калькулятор расчета сжигания калорий при различных физических нагрузках',
        'appDescriptionEN': 'This is Calorie Calculator Application. Allows you to calculate the amount of nutrients and calories in each meal and the total amount for the whole day. The statistic contains all results, as well as the special calculator for calculating the burning of calories in dependence on the type of physical activity',
        'appSmallImgSrc': 'caloriesCalculatorAppSmallImg'
    }
]);