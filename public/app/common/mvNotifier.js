angular.module('app').value('mvToastr', toastr);

angular.module('app').factory('mvNotifier', function(mvToastr){

    // Set toastr notifier options
    mvToastr.options = {
        tapToDismiss: true // (default)
        // neither worked less than 5 seconds?
        // hideDuration: 5000,
        // fadeAway: 5000
    }

    return{
        notify: function(msg){
            mvToastr.success(msg);
            console.log(msg);
        },

        error: function(msg){
            mvToastr.error(msg);
            console.log(msg);
        }
    }
})
