(function() {
        "use strict";
        angular
            .module("chocolate", ["ui.router"])
            .config(["$stateProvider", function($stateProvider) {
                $stateProvider
                    .state("chocolateMain", {
                        url: "/main",
                        templateUrl: "public/js/ng-views/main.html",
                        controller: "ChocolateMainController",
                        controllerAs: "vm"
                    })
                    .state("chocolateDirector", {
                        url: "/director",
                        templateUrl: "public/js/ng-views/director.html",
                        controller: "ChocolateDirectorController",
                        controllerAs: "vm"
                    })
                    .state("chocolateCharacter", {
                        url: "/character",
                        templateUrl: "public/js/ng-views/character.html",
                        controller: "ChocolateCharacterController",
                        controllerAs: "vm"
                    })
                    .state("chocolateContact", {
                        url: "/contact",
                        templateUrl: "public/js/ng-views/contact.html",
                        controller: "ChocolateContactController",
                        controllerAs: "vm"
                    })
                    .state("chocolatePartners", {
                        url: "/partners",
                        templateUrl: "public/js/ng-views/partners.html",
                        controller: "ChocolatePartnersController",
                        controllerAs: "vm"
                    })
                    .state("chocolateTrailer", {
                        url: "/trailer",
                        templateUrl: "public/js/ng-views/trailer.html",
                        controller: "ChocolateTrailerController",
                        controllerAs: "vm"
                    })
                    .state("chocolateGallery", {
                        url: "/gallery",
                        templateUrl: "public/js/ng-views/gallery.html",
                        controller: "ChocolateGalleryController",
                        controllerAs: "vm"
                    })
                    .state("chocolateAction", {
                        url: "/action",
                        templateUrl: "public/js/ng-views/action.html",
                        controller: "ChocolateActionController",
                        controllerAs: "vm"
                    })

            }])
            .controller("ChocolateMainController", [function main(){
              $('.what').hide()
            }])
            .controller("ChocolateDirectorController", [function(){
                  $('.what').show()
            }])
            .controller("ChocolateCharacterController", [function(){
                  $('.what').show()
            }])
            .controller("ChocolateContactController", [function(){
              $('.what').show()
            }])
            .controller("ChocolatePartnersController", [function(){
                  $('.what').show()
            }])
            .controller("ChocolateTrailerController", [function(){
                  $('.what').show()
            }])
            .controller("ChocolateGalleryController", [function(){
                  $('.what').show()
            }])
            .controller("ChocolateActionController", [function(){
                  $('.what').show()
            }])
    }
    ())
