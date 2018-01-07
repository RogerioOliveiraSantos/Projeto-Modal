function editar(id) {

	$.ajax({
		url:'editar.php',
		type:'POST',
		data:{id:id}, 
		beforeSend:function() {
			$('#modal').find('.modal-body').html('Carregando...');
			$('#modal').modal('show');
		},
		success:function(html) {
			$('#modal').find('.modal-body').html(html);
			$('#modal').find('.modal-body').find('form').on('submit', salvar);
			$('#modal').modal('show');
		}
	});
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

function excluir() {

	$('#modal').modal('show'); 
}