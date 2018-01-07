<?php  
	$pdo = new PDO("mysql:dbname=aula_modal;host=localhost", "root", "");
	$sql = $pdo->query("SELECT * FROM usuarios");
	$usuarios = $sql->fetchAll();	
?>
<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css">
	<link rel="stylesheet" href="style.css">
	<script type="text/javascript" src="jquery-3.2.1.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="script.js"></script>
</head>
<body>
	<h1>Usuários</h1>

	<table border="1" width="500">
	<?php foreach($usuarios as $usuario): ?>
		<tr>
			<td><?php echo $usuario['nome']; ?></td>
			<td><?php echo $usuario['email']; ?></td>
			<td><?php echo $usuario['senha']; ?></td>
			<td>
				<a href="javascript:;" onclick="editar('<?php echo $usuario['id']; ?>')">Editar</a>
				<a href="javascript:;" onclick="excluir('<?php echo $usuario['id']; ?>')">Excluir</a>	
			</td>
		</tr>
	<?php endforeach; ?>	
	</table>

	<div id="modal" class="modal fade" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-body">...</div>
			</div>
		</div>
	</div>
</body>
</html>