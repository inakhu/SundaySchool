
app.controller('iWitnessCtrl', function($scope,$localStorage, $stateParams , HTSServices,APP_SERVER, $ionicPopup,$ionicLoading,$state) {

    /*add*/
    $scope.data = {};
    $scope.data.post_type='iwitness';
    $scope.data.post_status='Draft';
    //$scope.data.post_image='video.jpg';
    $scope.data.post_image=$localStorage.filename;


    $scope.iWitnessForm = function () {
        $ionicLoading.show({template: 'processing...'});
        HTSServices.HezecomPostNewInfo('iwitness/api/add/'+APP_SERVER.apikey, $scope.data)
            .success(function (data) {
                if (data.errors) {
                    $ionicPopup.alert({
                        title: 'Information',
                        template: data.errors
                    });
                    $ionicLoading.hide();
                } else {
                    $ionicPopup.alert({
                        title: 'Success Message:',
                        template: data.message
                    });
                    $localStorage.filename='';
                    $state.go('app.iwitness');
                    $ionicLoading.hide();
                }
            });
    };
});