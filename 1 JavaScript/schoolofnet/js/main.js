// Para teste, criado uma array com "produtos"
var list = [
	{"desc":"rice","amount":"1","value":"5.40"},
	{"desc":"teste2","amount":"12","value":"1.99"},
	{"desc":"teste3","amount":"1","value":"15.00"},
];
// Função, percorre a lista, soma as quantidades e valores
function getTotal(list) { //getTotal recebe list
	var total = 0;
	for (var key in list){
		total += list[key].value * list[key].amount;
	}
	document.getElementById("totalValue").innerHTML = formatValue(total); // Imprime no html, no container com span id totalValue, a variável total formatada
	// return total; (inutilizado)
}
// Função cria as linhas e colunas da tabela
function setList(list){
	var table = '<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead><tbody>';
	for(var key in list) {
		table += '<tr> <td>'+formatDesc(list[key].desc)+'</td> <td>'+formatAmount(list[key].amount)+'</td><td>'+formatValue(list[key].value)+'</td> <td><button class="btn btn-default" onclick="setUpdate('+key+');">Edit</button> <button class="btn btn-default" onclick="deleteData('+key+');">Delete</button></td></tr>';
		// Ex.: Onde estava "list[key].desc" passou para "formatDesc(list[key].desc)". Desta forma começou a preencher os valores segundo a formatação criada na função chamada 
	}
	table+= '<tbody>';
	document.getElementById("listTable").innerHTML = table;
	getTotal(list); // Chama a função getTotal para ser exibido após a lista
	saveListStorage(list);
}
// Formatando a descrição
function formatDesc(desc){
	var str = desc.toLowerCase(); // Primeiro, coloca todo o texto em minusculo
	str = str.charAt(0).toUpperCase() + str.slice(1); 
	// str.charAt(0).toUpperCase() - Traz o primeiro caracter da string e coloca maiusculo
	// + srt.slice(1); - Chama e concatena os demais caracteres da string
	return str;
}
// Formatando os valores, impedindo que valores incorretos sejam inseridos no formulário
function formatAmount(amount){
	return parseInt(amount);
} 

// Formatando os valores
function formatValue(value){
	var str = parseFloat(value).toFixed(2)+"";
	// parseFloat(value) - Transforma a string 'value' em float 
	// toFixed(2) - informa que este float possui duas duas decimais 
	// "" - Por fazer isso, ele converte este float em string novamente
	str = str.replace(".",","); //Transforma, onde estiver ponto para virgula
	str = "$ " + str; // Aqui adiciono o cifrão antes do valor automaticamente
	return str;
} 
// Criando função para o botão de adicionar do formulário html
function addData(){
	if(!validation()){ // Chama a função de validação antes de inserir os dados 
		return;
	}
	var desc = document.getElementById("desc").value;
	var amount = document.getElementById("amount").value;
	var value = document.getElementById("value").value;
	// Puxando do documento html, com id desc e criamos as variaveris com os dados doe formulário
	list.unshift({"desc":desc , "amount":amount , "value":value});
	// unshift() - Adiciona o elemento por primeiro na lista, adicionando os itens descritos dentro
	setList(list); //Chama função setlist
}	
// Função para atualizar os campos
function setUpdate(id){ // setUpdate recebe uma id
	var obj = list[id]; // obj recebe a lista com os ids das variáveis e coloca nos campos para adição
	document.getElementById("desc").value = obj.desc;
	document.getElementById("amount").value = obj.amount;
	document.getElementById("value").value = obj.value;
	// no documento html, com ID desc e seu valor, recebe as alterações do objeto desta função
	document.getElementById("btnUpdate").style.display = "inline-block"; // Chama o span com os botões de edição
	document.getElementById("btnAdd").style.display = "none"; // esconde o botão de adição de valores

	document.getElementById("inputIDUpdate").innerHTML = '<input id="idUpdate" type="hidden" name="" value="'+id+'">';
	// Para criar o input no html

}
// Função para ação do botão cancelar do formulário
function resetForm(){
	document.getElementById("desc").value = ""; // Limpa os campos
	document.getElementById("amount").value = "";
	document.getElementById("value").value = "";
	document.getElementById("btnUpdate").style.display = "none"; // Esconde o span
	document.getElementById("btnAdd").style.display = "inline-block"; // Exibe o botão Add

	document.getElementById("inputIDUpdate").innerHTML = ""; // Limpa o campo
	document.getElementById("errors").style.display = "none"; // Após aparecer, ocultando a msg de erro quando houver um reset do formulário
}
// Função para atulizar os dados
function updateData(){
	if(!validation()){ // Chama a função de validação antes de inserir os dados 
		return;
	}
	var id = document.getElementById("idUpdate").value; // Pega o ID da variável para identificar quem deve ser modificado
	var desc = document.getElementById("desc").value;
	var amount = document.getElementById("amount").value
	var value = document.getElementById("value").value;
	list[id] = {"desc":desc, "amount": amount, "value":value};
	resetForm(); // Após atualização, limpa os campos de edição
	setList(list); // E lista novamente o formulário
}
// Função botão deletar
function deleteData(id){
	if(confirm("Delete this item?")){
		if(id === list.length - 1){
			list.pop(); // Deleta o último item do array
		} else if(id === 0){
			list.shift(); // Deleta o primeiro item do array
		} else {
			var arrayAuxIni = list.slice(0,id); // Pega o primeiro array até o Id
			var arrayAuxEnd = list.slice(id + 1); // pega o id e soma 1
			list = arrayAuxIni.concat(arrayAuxEnd); //concatena o primeiro e o ultimo
		}
		setList(list);
	}
}
// Validando os itens preenchidos no formulário
function validation(){
	var desc = document.getElementById("desc").value;
	var amount = document.getElementById("amount").value;
	var value = document.getElementById("value").value;
	var errors = "";
	document.getElementById("errors").style.display = "none"; // Ao validar o formulário, após um erro e não havendo erro mais, a msg de erro sai

	if (desc === ""){ // Se descrição estiver vasio, informa o erro
		errors += '<p>Fill out description</p>'
	}
	if (amount === ""){ // Se quantidade estiver vazio ou não for inteiro, informa erro
		errors += '<p>Fill out quantity</p>'
	} else if(amount != parseInt(amount)){
		errors += '<p>Fill out a valid amount</p>'
	}
	if (value === ""){ // Se valor estiver vazio ou não for float, informa erro
		errors += '<p>Fill out value</p>'
	} else if(value != parseFloat(value)){
		errors += '<p>Fill out a valid value</p>'
	}

	if(errors != ""){ // Formatando o estilo do box de erro
		document.getElementById("errors").style.display = "block";
		document.getElementById("errors").style.backgroundColor = "rgba(85,85,85,0.3)"; //background-color (ele não aceita traço, então trata desta forma que aceita: backgroundColor)
		document.getElementById("errors").style.color = "white";
		document.getElementById("errors").style.padding = "10px";
		document.getElementById("errors").style.margin = "10px";
		document.getElementById("errors").style.borderRadius = "13px";

		document.getElementById("errors").innerHTML = "<h3>Error: </h3>"+errors; // Imprime msg de erro com os erros informados acima
		return 0;
	}else{
		return 1;
	}
}

// Função deleta todos os campos da lista
function deleteList(){
	if(confirm("Delete this list?")){ // Confirma se deleta a lista
		list = []; // Pega nosso array list e insere tudo vazio
		setList(list); // Chama a função setList
	}
}

// Função salvar lista no localstorage
function saveListStorage(List){ // Função pega a nossa array lista
	var jsonStr = JSON.stringify(list); // Cria variável jsonStr e chama a função JSON.stringify que transforma nossa array em string no formato json
	localStorage.setItem("list",jsonStr); // Chama a função localstorage e seta as informações recebidas no jsonStr
}

function initListStorage(){ // Inicia a lista no storage
	var testList = localStorage.getItem("list"); // Verifica se salvou, se não deixará como nulo (?)
	if(testList){
		list = JSON.parse(testList);
	}
	setList(list);
}

initListStorage();
// setList(list); // Lista tabela ao carregar o site (inutilizado)
// console.log(getTotal(list)); (inutilizado)