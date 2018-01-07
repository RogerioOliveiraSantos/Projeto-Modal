function editar(obj) {

	var tr = $(obj).closest('tr');

	var nome = tr.attr('data-nome');
	var email = tr.attr('data-email');
	var senha = tr.attr('data-senha');
	var id = tr.attr('data-id');

	$('#modal-editar').find('.modal-body').find('input[name=nome]').val(nome);
	$('#modal-editar').find('.modal-body').find('input[name=email]').val(email);
	$('#modal-editar').find('.modal-body').find('input[name=senha]').val(senha); 
	$('#modal-editar').find('.modal-body').find('input[name=id]').val(id); 

	$('#modal-editar').find('.modal-body').find('form').on('submit', salvar);
	$('#modal-editar').modal('show');

}

function salvar(e) {
	e.preventDefault();

	var nome = $(this).find('input[name=nome]').val();
	var email = $(this).find('input[name=email]').val();
	var senha = $(this).find('input[name=senha]').val();
	var id = $(this).find('input[name=id]').val();

	$.ajax({
		url:'salvar.php',
		type:'POST',
		data:{nome:nome, email:email, senha:senha, id:id},
		success:function() {
			alert("Dados alterado com sucesso!");
			window.location.href = window.location.href; 
		}
	});
}

function excluir(id) {

	$('#modal').find('.modal-body').html('Tem certeza que deseja excluir o id '+id+'?</br><button onclick="excluirUsuario('+id+')">Sim</button><button onclick="fechar()">N�o</button>');
	$('#modal').modal('show');

}

function fechar() {
	$('#modal').modal('hide');
}

function excluirUsuario(id) {
	
	$.ajax({
		url:'excluir.php',
		type:'POST',
		data:{id:id},
		success:function() {
			alert("Usu�rio excluido com sucesso!");
			window.location.href = window.location.href; 
		}
	});	
}