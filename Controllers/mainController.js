var app = angular.module('myApp');

app.controller('mainController', function ($scope, $anchorScroll, appInfoConstant, $interval) {

    $scope.flag_scrollToTopBtn = false;
    $scope.flag_EN = true;
    $scope.appInfoArr = appInfoConstant;
    $scope.usingLangArr = ['HTML5', 'CSS3', 'JavaScript', 'AngularJS', 'Bootstrap', 'Less', 'jQuery', 'APIs', 'NodeJS', 'other'];

    $scope.changeLangToEN = function () {
        if(!$scope.flag_EN) {
            $scope.flag_EN = true;
        }
    };

    $scope.changeLangToRU = function (){
        if($scope.flag_EN) {
            $scope.flag_EN = false;
        }
    };

    $scope.showMenu = function () {
        $(".menu-md").slideToggle("slow");
    };

    $scope.showVideo = function (numberOfAppVideo) {
        var currentVideo = ".video" + numberOfAppVideo;
        $(currentVideo).slideDown("slow");
        $scope.appInfoArr[numberOfAppVideo - 1].appFlag = true;
        $scope.appInfoArr.forEach(function (item,i) {
            if(i != numberOfAppVideo - 1) {
                item.appFlag = false;
            }
        });
    };

    jQuery(function($){
        $(document).mouseup(function (e){
            // if ($("video").is(":visible")){
            var videoPlayer = $("video");
            if (!videoPlayer.is(e.target) && videoPlayer.has(e.target).length === 0) {
                $(".videoArea").slideUp("slow");
            }
            // }
        });
    });

    $scope.moveSlideRight = function () {
        $.fn.fullpage.moveSlideRight();
    };

    $scope.moveSlideLeft = function () {
        $.fn.fullpage.moveSlideLeft();
    };

    $interval(function () {
        $.fn.fullpage.moveSlideRight();
    }, 4000);

    $(document).ready(function() {
        $('#fullpage').fullpage({
            anchors:['About', 'DemoSlider', 'CalculatorApp', 'StickyNotesApp', 'CurrencyConverterApp', 'RecipeKeeperApp', 'CaloriesCalculatorApp', 'Contacts'],
            scrollingSpeed: 1000,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            paddingTop: '0',
            paddingBottom: '0',
            fixedElements: '#header, .footer',
            onLeave: function(index, nextIndex){
                if( $(".menu-sm").is(":visible")){
                    $(".menu-md").slideUp("slow");
                }
                if(index == 3) {
                    $('.motion-1').animate({
                        top: '-=60%'
                    }, 800);
                    $('.motion-2').animate({
                        top: '-=10%'
                    }, 800);
                    $('.motion-3').animate({
                        top: '-=40%'
                    }, 800);
                }
                if(index == 1){
                    $scope.flag_scrollToTopBtn = true;
                    $(".scrollToTopBtn").animate({opacity:'1'}, 1000);
                }
                if((index == 2 || index == 4 || index == 8 || index == 3 || index == 5 || index == 6 || index == 7) && nextIndex == 1) {
                    $(".scrollToTopBtn").animate({opacity: '0'}, 1000);
                    $scope.bgColor = 'bg1';
                }
                if((index == 1 || index == 4 || index == 8 || index == 3 || index == 5 || index == 6 || index == 7) && nextIndex == 2){
                    $scope.bgColor = 'bg2';

                }
                if((index == 1 || index == 2 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8) && nextIndex == 3){
                    $scope.bgColor = 'bg3';
                }
                if((index == 1 || index == 2 || index == 3 || index == 5 || index == 6 || index == 7 || index == 8) && nextIndex == 4){
                    $scope.bgColor = 'bg4';
                }
                if((index == 1 || index == 2 || index == 3 || index == 4 || index == 6 || index == 7 || index == 8) && nextIndex == 5){
                    $scope.bgColor = 'bg5';
                }
                if((index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 7 || index == 8) && nextIndex == 6){
                    $scope.bgColor = 'bg6';
                }
                if((index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 8) && nextIndex == 7){
                    $scope.bgColor = 'bg7';
                }
                if((index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7) && nextIndex == 8){
                    $scope.bgColor = 'bg7';
                    $('.contactsInfoWrapper').animate({
                        top: '-=30vh'
                    }, 1000);
                }
                if(index == 8){
                    $('.contactsInfoWrapper').animate({
                        top: '+=30vh'
                    }, 1000);
                }
            },
            afterLoad: function(anchorLink, index){
                if(index == 3){
                    $('.motion-1').animate({
                        top: '+=60%'
                    }, 800);
                    $('.motion-2').animate({
                        top: '+=10%'
                    }, 800);
                    $('.motion-3').animate({
                        top: '+=40%'
                    }, 800);
                }
                if(index == 1){
                    $scope.flag_scrollToTopBtn = false;
                }

            },
            afterRender: function(){},
            afterResize: function(){},
            afterResponsive: function(isResponsive){}
        });
    });
});



