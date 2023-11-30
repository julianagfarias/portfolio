function inserir() {
	let cod = document.forms["cadastrar"]["codigo"].value;
	let data = document.forms["cadastrar"]["data"].value;
	let tit = document.forms["cadastrar"]["titulo"].value;
	let dir = document.forms["cadastrar"]["diretor"].value;
	let gen = document.forms["cadastrar"]["radio"].value;
	let ator = document.forms["cadastrar"]["ator"].value;
	let imdb = document.forms["cadastrar"]["nota"].value;

	let insere = window.document.getElementById( "inserirTabela" );

	insere.innerHTML = `<th scope="row"> ${cod} </th>`;
	insere.innerHTML += `<td> ${tit} </td>`;
	insere.innerHTML += `<td> ${dir} </td>`;
	insere.innerHTML += `<td> ${data} </td>`;
	insere.innerHTML += `<td> ${gen} </td>`;
	insere.innerHTML += `<td> ${ator} </td>`;
	insere.innerHTML += `<td> ${imdb} </td>`;
}

// não está sendo utilizada \/
function validarForm() {

	// verifica código
	let validaCod = document.forms["cadastrar"]["codigo"].value;

	if (validaCod == "") {
		window.alert("O código deve ser preenchido");
		return false;
	}

	// verifica data
	let validaData = document.forms["cadastrar"]["data"].value;

	if (validaData == "") {
		window.alert("A data deve ser preenchida");
		return false;
	}

	// verifica titulo
	let validaTit = document.forms["cadastrar"]["titulo"].value;

	if (validaTit == "") {
		window.alert("O título deve ser preenchido");
		return false;
	}

	// verifica diretor
	let validaDir = document.forms["cadastrar"]["diretor"].value;

	if (validaDir == "") {
		window.alert("O diretor deve ser preenchido");
		return false;
	}

	// valida gênero
	let validaGen = document.forms["cadastrar"]["radio"].value;

	if (validaGen == "") {
		window.alert("O gênero deve ser selecionado");
		return false;
	}

	// valida atriz/ator principal
	let validaAtor = document.forms["cadastrar"]["ator"].value;

	if (validaAtor == "") {
		window.alert("O campo de ator/atriz principal deve ser preenchido");
		return false;
	}

	// valida IMDb
	let validaIMDb = document.forms["cadastrar"]["nota"].value;

	if (validaIMDb == "") {
		window.alert("A nota IMDb deve ser preenchida");
		return false;
	}
}