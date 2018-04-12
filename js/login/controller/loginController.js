app.controller("loginCtrl", function($scope,$state){
alert("Login");
  window.fbAsyncInit = function() {
		  alert("Hi");
		    FB.init({
		      appId      : '1573316522781157',
		      cookie     : true,
		      xfbml      : true,
		      version    : 'v2.8'
		    });
		      
		    //FB.AppEvents.logPageView(); 
		    console.log("b4 login");
		    FB.login(function(response) {
		    	  // handle the response
		    	console.log("login response:::") ;
		    	console.log(response);
			    $scope.checkLoginState();
		    	}, {scope: 'public_profile,email'});
	};
	
	 (function(d, s, id){
		     var js, fjs = d.getElementsByTagName(s)[0];
		     if (d.getElementById(id)) {return;}
		     js = d.createElement(s); js.id = id;
		     js.src = "https://connect.facebook.net/en_US/sdk.js";
		     fjs.parentNode.insertBefore(js, fjs);
		   }(document, 'script', 'facebook-jssdk'));
		  
		   $scope.testAPI=function() {
		    console.log('Welcome!  Fetching your information.... ');
		    FB.api('/me',{ fields: 'id,name,first_name,last_name,gender,age_range,link,locale,email'}, function(response) {
		      console.log('Successful login for: ' + response.name);
			    console.log(response);
		      document.getElementById('status').innerHTML =
		        'Thanks for logging in, ' + response.name + '!';
		    });
		  };
		  
		  $scope.statusChangeCallback = function(response) {
			    console.log('statusChangeCallback');
			    console.log(response);
			    // The response object is returned with a status field that lets the
			    // app know the current login status of the person.
			    // Full docs on the response object can be found in the documentation
			    // for FB.getLoginStatus().
			    if (response.status === 'connected') {
			      // Logged into your app and Facebook.
			      $scope.testAPI();
			    } else {
			      // The person is not logged into your app or we are unable to tell.
			      document.getElementById('status').innerHTML = 'Please log ' +
			        'into this app.';
			    }
			  };
	
	$scope.checkLoginState = function() {
			    FB.getLoginStatus(function(response) {
			    	console.log("login status response");
			    	 console.log(response);
			      $scope.statusChangeCallback(response);
			    });
			};

		 
		   
		  
  
});
