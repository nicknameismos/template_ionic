angular.module('your_app_name.auth.controllers', [])

	.controller('AuthCtrl', function ($scope) {

	})

	.controller('WelcomeCtrl', function ($rootScope, $scope, $ionicModal, show_hidden_actions, $state, AuthService) {

		$scope.show_hidden_actions = show_hidden_actions;

		$scope.toggleHiddenActions = function () {
			$scope.show_hidden_actions = !$scope.show_hidden_actions;
		};
		$rootScope.$on('userLoggedIn', function (e, data) {
			AuthService.saveUser(data);
			// console.log(data);
			$state.go('app.feed');
		});

		$rootScope.$on('userLoggedInError', function (e, err) {
			// console.log(err);
			// $state.go('app.feed');
			alert(err.message);
		});
		// $scope.facebookSignIn = function () {
		// 	console.log("doing facebbok sign in");
		// 	$state.go('app.feed');
		// };

		$scope.authenticate = function () {
			AuthService.loginfacebook();
			// .then(function (response) {
			// 	alert('success');
			// 	$state.go('app.feed');
			// }, function (err) {
			// 	alert('err');
			// });
		}
		// $scope.doLogIn = function () {
		// 	console.log("doing log in");
		// 	$state.go('app.feed');
		// };

		$scope.googleSignIn = function () {
			console.log("doing google sign in");
			$state.go('app.feed');
		};

		$scope.twitterSignIn = function () {
			console.log("doing twitter sign in");
			$state.go('app.feed');
		};

		$ionicModal.fromTemplateUrl('views/app/legal/privacy-policy.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function (modal) {
			$scope.privacy_policy_modal = modal;
		});

		$ionicModal.fromTemplateUrl('views/app/legal/terms-of-service.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function (modal) {
			$scope.terms_of_service_modal = modal;
		});

		$scope.showPrivacyPolicy = function () {
			$scope.privacy_policy_modal.show();
		};

		$scope.showTerms = function () {
			$scope.terms_of_service_modal.show();
		};
	})

	.controller('LogInCtrl', function ($rootScope, $scope, $state, AuthService) {

		$rootScope.$on('userLoggedIn', function (e, data) {
			// console.log(data);
			$state.go('app.feed');
		});

		$rootScope.$on('userLoggedInError', function (e, err) {
			// console.log(data);
			// $state.go('app.feed');
			alert(err.message);
		});
		$scope.credentials = {}

		$scope.doLogIn = function (credentials) {
			window.localStorage.credential = credentials;
			var login = {
				username: credentials.username,
				password: credentials.password
			}
			AuthService.loginUser(login);
			// .then(function (response) {
			// 	console.log(response);
			// 	if (response["message"]) {
			// 		$scope.credentials = {}
			// 		alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
			// 	}
			// 	alert('success');
			// 	$state.go('app.feed');
			// });
		};
	})

	.controller('SignUpCtrl', function ($rootScope, $scope, $state, AuthService) {
		$rootScope.$on('userLoggedIn', function (e, data) {
			// console.log(data);
			$state.go('app.feed');
		});

		$rootScope.$on('userLoggedInError', function (e, err) {
			// console.log(data);
			// $state.go('app.feed');
			alert(err.message);
		});

		$scope.doSignUp = function (credentials) {
			alert('ok');
			AuthService.signupUser(credentials);
			// .then(function (response) {
			// 	console.log(response);
			// 	alert('success');
			// 	$state.go('app.feed');
			// });
		}
	})

	.controller('ForgotPasswordCtrl', function ($scope, $state) {
		$scope.requestNewPassword = function () {
			console.log("requesting new password");
			$state.go('app.feed');
		};
	})

	;
