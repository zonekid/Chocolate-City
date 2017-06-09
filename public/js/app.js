(function() {
        "use strict";
        angular
            .module("chocolate", ["ui.router"])
            .config(["$stateProvider", RouterFunction])

            .controller("ChocolateMainController", [
                ChocolateMainControllerFunction
            ])

            .controller("ChocolateDirectorController", [
                ChocolateDirectorControllerFunction
            ])
            .controller("ChocolateCharacterController", [
                ChocolateCharacterControllerFunction
            ])
            .controller("ChocolateContactController", [
                ChocolateContactControllerFunction
            ])
            .controller("ChocolatePartnersController", [
                ChocolatePartnersControllerFunction
            ])
            .controller("ChocolateTrailerController", [
                ChocolateTrailerControllerFunction
            ])
            .controller("ChocolateGalleryController", [
                ChocolateGalleryControllerFunction
            ])
            .controller("ChocolateActionController", [
                ChocolateActionControllerFunction
            ])




        function RouterFunction($stateProvider) {
            $stateProvider
                .state("chocolateMain", {
                    url: "/welcome",
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
                    templateUrl: "public/js/ng-views/gallery.html",
                    controller: "ChocolateActionController",
                    controllerAs: "vm"
                })

        }
    }
    ())
