async function GetUsers()
{
	let url = 'https://randomuser.me/api/?results=10'
	let promise = await fetch(url);

	//ЗАгрузка
	// const loaded = promise.body.getReader();
	// let load = document.querySelector('.load');
	// const contentLength = +promise.headers.get('Content-Length');
	//
	// while(true){
	// 	const {done, value} = await loaded.read();
	//
	// 	if (done) {
	// 		break;
	// 	}
	//
	// 	load.innerHTML+=`${value.length} из ${contentLength}`;
	// }


	if (!(promise.ok)){
		alert("Ошибка HTTP: " + promise.status);
		return alert("Ошибка HTTP: " + promise.status);
	}

	let json = await promise.json();
	console.log(json["results"]);

	let list = document.querySelector('.list');


	//forEach - использует функции в скобках для каждого  елемента.
	json["results"].forEach(element => {
	        console.log(element);
	        list.innerHTML+=`
	        <div class="card mb-3" style="width: 18rem;  margin: 4px;">
	        	<img  src="${element['picture']['large']}" alt="Картинка" class="card-img-top">
		        <div class="card-body" >
				  <h5 class="card-title" id="UserName">${element['name']['first']} ${element['name']['last']}</h5>
				  <ul class="list-group list-group-flush">
					  <li class="list-group-item" id="gender">Gender: ${element['gender']}</li>
					  <li class="list-group-item" id="Adress">Adress: ${element['location']['country']} ${element['location']['city']} ${element['location']['street']['name']}</li>
					  <li class="list-group-item" id="Email">${element['email']}</li>
					  <li class="list-group-item" id="Telephone">${element['phone']}</li>
			      </ul>
				</div>
			</div>`
});
	let clicl = document.querySelector('.clicl');
	clicl.innerHTML+=` еще 10`;
}