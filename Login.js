window.onload = function(){
	
};

function Emp(account,password,nickname){
	this.account = account;
	this.password = password;
	this.nickname = nickname;
};

//登录

function login(){
	//获取账号信息
	let account = window.document.getElementById("username").value;
	//获取秘密啊信息
	let password = window.document.getElementById("password").value;
    
	if(account.lenght == 0){
		window.document.getElementById("username").focus();
	}
	else if(password.length == 0){
		window.document.getElementById("password").focus();
	}
	else{
		let emp = new Emp(accout,password,"田蔚然");
		sessionStorage.setItem("op",JSON.stringify(emp));
		window.location.replace("main.html");
	}
};