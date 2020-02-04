onDeviceReady();
function onDeviceReady(){
	var db = window.openDatabase("Database", "1.0", "TicketMobile", 200000);
	db.transaction(iniciaDB, errorCB, successCB);
	console.log(db);
} 

function iniciaDB(tx){
	var db = window.openDatabase("Database", "1.0", "TicketMobile", 200000);
	//tx.executeSql('DROP TABLE IF EXISTS Boleto');
	tx.executeSql('CREATE TABLE IF NOT EXISTS Boleto (idabajo integer primary key AUTOINCREMENT,idBoleto integer UNIQUE, nom_empleado text , strQr text, strBarcode text UNIQUE, idCli interger, id_descuento integer,idLocB integer,nombreHISB text,documentoHISB text,strEstado text , hora_ingreso text , identComprador integer , valor text)');
	// tx.executeSql('DROP TABLE IF EXISTS Ingreso');
	tx.executeSql('CREATE TABLE IF NOT EXISTS Ingreso (id integer primary key AUTOINCREMENT,idBoleto integer, strQr text, strBarcode text, idCli interger, id_descuento integer,idLocB integer,nombreHISB text,documentoHISB text,strEstado text)');
	// tx.executeSql('DROP TABLE IF EXISTS Usuario');
	tx.executeSql('CREATE TABLE IF NOT EXISTS Usuario (id integer primary key AUTOINCREMENT,idUsuario integer, strNombreU text, strMailU text, strContrasena text, strCedula text,strPerfil text,nombreHISB text,strEstadoU text)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS auditoria (id integer primary key AUTOINCREMENT,idBoleto integer, estado text, fecha text)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS concieto (id integer primary key AUTOINCREMENT,id_con integer , nombre_c text , es_para_feria integer)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS control_feria (id integer primary key AUTOINCREMENT,strBarcode text , estado integer)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS localidad (id integer primary key AUTOINCREMENT,id_con integer,id_loc integer , nombre text)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS empleado (id integer primary key AUTOINCREMENT, nombre text , perfil text)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS errores (id integer primary key AUTOINCREMENT, nombre text , estado integer )');
	tx.executeSql('CREATE TABLE IF NOT EXISTS descuentos (id integer primary key AUTOINCREMENT, id_desc integer UNIQUE, nombre text , precio text , localidad integer , tipo integer )');
	tx.executeSql('CREATE TABLE IF NOT EXISTS tickets_entregados (id integer primary key AUTOINCREMENT, id_loc integer , id_desc integer , cantidad text)');
	
	
	
	
	tx.executeSql('CREATE TABLE IF NOT EXISTS video (id integer primary key AUTOINCREMENT,id_video integer , nombre text , ruta text , icono text )');
	
}
llenaVideo();
function llenaVideo(){
	var db = window.openDatabase("Database", "1.0", "TicketMobile", 200000);
	db.transaction(function(tx){
		
		tx.executeSql("INSERT OR IGNORE INTO video (id,id_video,nombre,ruta,icono) VALUES (?,?,?,?,?)",['1','1','(Everything I Do) I Do It For You','videos/(Everything I Do) I Do It For You.mp4','img/(Everything I Do) I Do It For You.jpg']);
		tx.executeSql("INSERT OR IGNORE INTO video (id,id_video,nombre,ruta,icono) VALUES (?,?,?,?,?)",['2','2','please for give me','videos/please for give me.mp4','img/please for give me.jpg']);
		
		tx.executeSql("INSERT OR IGNORE INTO video (id,id_video,nombre,ruta,icono) VALUES (?,?,?,?,?)",['3','3','Aerosmith - I Dont Want to Miss a Thing','videos/Aerosmith - I Dont Want to Miss a Thing.mp4','img/please for give me.jpg']);
		tx.executeSql("INSERT OR IGNORE INTO video (id,id_video,nombre,ruta,icono) VALUES (?,?,?,?,?)",['4','4','Air Supply - Making Love Out Of Nothing At All','videos/Air Supply - Making Love Out Of Nothing At All.mp4','img/please for give me.jpg']);
		tx.executeSql("INSERT OR IGNORE INTO video (id,id_video,nombre,ruta,icono) VALUES (?,?,?,?,?)",['5','5','Backstreet Boys - I Want It That Way','videos/Backstreet Boys - I Want It That Way.mp4','img/please for give me.jpg']);
		tx.executeSql("INSERT OR IGNORE INTO video (id,id_video,nombre,ruta,icono) VALUES (?,?,?,?,?)",['6','6','Bon Jovi - Bed Of Roses','videos/Bon Jovi - Bed Of Roses.mp4','img/please for give me.jpg']);
		tx.executeSql("INSERT OR IGNORE INTO video (id,id_video,nombre,ruta,icono) VALUES (?,?,?,?,?)",['7','7','Bon Jovi - Im ll Be There For You','videos/Bon Jovi - Im ll Be There For You.mp4','img/please for give me.jpg']);
		tx.executeSql("INSERT OR IGNORE INTO video (id,id_video,nombre,ruta,icono) VALUES (?,?,?,?,?)",['8','8','Bon Jovi  Livin On A Prayer','videos/Bon Jovi  Livin On A Prayer.mp4','img/please for give me.jpg']);
		tx.executeSql("INSERT OR IGNORE INTO video (id,id_video,nombre,ruta,icono) VALUES (?,?,?,?,?)",['9','9','Bon Jovi You give love a bad name','videos/Bon Jovi You give love a bad name.mp4','img/please for give me.jpg']);
		tx.executeSql("INSERT OR IGNORE INTO video (id,id_video,nombre,ruta,icono) VALUES (?,?,?,?,?)",['10','10','Bonny Tyler Total eclipse of the heart','videos/Bonny Tyler Total eclipse of the heart.mp4','img/please for give me.jpg']);
		tx.executeSql("INSERT OR IGNORE INTO video (id,id_video,nombre,ruta,icono) VALUES (?,?,?,?,?)",['11','11','Bryan Adams - Heaven','videos/Bryan Adams - Heaven.mp4','img/please for give me.jpg']);
		tx.executeSql("INSERT OR IGNORE INTO video (id,id_video,nombre,ruta,icono) VALUES (?,?,?,?,?)",['12','12','Charice Pempengco - All By Myself','videos/Charice Pempengco - All By Myself.mp4','img/please for give me.jpg']);
		tx.executeSql("INSERT OR IGNORE INTO video (id,id_video,nombre,ruta,icono) VALUES (?,?,?,?,?)",['13','13','George Michael - Careless Whisper','videos/George Michael - Careless Whisper.mp4','img/please for give me.jpg']);
		tx.executeSql("INSERT OR IGNORE INTO video (id,id_video,nombre,ruta,icono) VALUES (?,?,?,?,?)",['14','14','Joan Jett I hate myself for loving you','videos/Joan Jett I hate myself for loving you.mp4','img/please for give me.jpg']);
		tx.executeSql("INSERT OR IGNORE INTO video (id,id_video,nombre,ruta,icono) VALUES (?,?,?,?,?)",['15','15','Mariah Carey - Without you','videos/Mariah Carey - Without you.mp4','img/please for give me.jpg']);
		tx.executeSql("INSERT OR IGNORE INTO video (id,id_video,nombre,ruta,icono) VALUES (?,?,?,?,?)",['16','16','Whitney Houston - I Have Nothing','videos/Whitney Houston - I Have Nothing.mp4','img/please for give me.jpg']);
		
	},errorCB,successCB);
}
function errorCB(err){
	console.log("Error processing SQL: "+err.message);
}

function successCB() {
	console.log("success!");
}

function login(){
	/*var username = $('#username').val();
	var pass = $('#pass').val();
	if((username == '') && (pass == '')){
		$('#alerta').modal('show');
		$('#username').val('');
		$('#pass').val('');
	}else{
		$('#botones').fadeOut('slow');
		$('#loading').delay(600).fadeIn('slow');
		$.get("https://www.ticketfacil.ec/ticket2/controlAccesos/loginMovil.php?user="+username+"&pass="+pass).done(function(response){
			if(response != 'error'){
				
				var content = '<table>'
				
				var objDatos = jQuery.parseJSON(response);
		
				for(i=0; i <= (objDatos.Boletos.length -1); i++){
					var id = objDatos.Boletos[i].idBoleto; 
					var qr = objDatos.Boletos[i].qr;
					var barcode = objDatos.Boletos[i].barcode;
					var cliente = objDatos.Boletos[i].cliente;
					var concierto = objDatos.Boletos[i].concierto;
					var local = objDatos.Boletos[i].local;
					var nombre = objDatos.Boletos[i].nombre;
					var cedula = objDatos.Boletos[i].cedula;
					var estado = objDatos.Boletos[i].estado;
					var identComprador = objDatos.Boletos[i].identComprador;
					
					content += '<tr class="dataBoleto">\
									<td><input type="hidden" class="id" value="'+id+'" /></td>\
									<td><input type="hidden" class="qr" value="'+qr+'" /></td>\
									<td><input type="hidden" class="barcode" value="'+barcode+'" /></td>\
									<td><input type="hidden" class="cliente" value="'+cliente+'" /></td>\
									<td><input type="hidden" class="concierto" value="'+concierto+'" /></td>\
									<td><input type="hidden" class="local" value="'+local+'" /></td>\
									<td><input type="hidden" class="nombre" value="'+nombre+'" /></td>\
									<td><input type="hidden" class="cedula" value="'+cedula+'" /></td>\
									<td><input type="hidden" class="estado" value="'+estado+'" /></td>\
									<td><input type="hidden" class="identComprador" value="'+identComprador+'" /></td>\
								</tr>';
				}
				content += '</table>';
				
				$('#boletos').html(content);
				var idurl = 1;
				// insertarDatos(idurl);*/
				window.location='subpages/ingreso.html';
			/*}else{
				setTimeout("$('#alerta').modal('show'); $('#username').val(''); $('#pass').val(''); $('#loading').fadeOut('slow'); $('#botones').delay(600).fadeIn('slow');",3000);
			}
		});
	}*/
}

function mostrarpass(){
	if($('#mostrar').is(':visible')){
		$('#pass').prop('type','text');
		$('#mostrar').fadeOut('slow');
		$('#ocultar').delay(600).fadeIn('slow');
	}else{
		$('#pass').prop('type','password');
		$('#ocultar').fadeOut('slow');
		$('#mostrar').delay(600).fadeIn('slow');
	}
}

function insertarDatos(idurl){
	var count = 1;
	$('.dataBoleto').each(function(){
		var id = $(this).find('td .id').val();
		var qr = $(this).find('td .qr').val();
		var barcode = $(this).find('td .barcode').val();
		var cliente = $(this).find('td .cliente').val();
		var concierto = $(this).find('td .concierto').val();
		var local = $(this).find('td .local').val();
		var nombre = $(this).find('td .nombre').val();
		var cedula = $(this).find('td .cedula').val();
		var estado = $(this).find('td .estado').val();
		var identComprador = $(this).find('td .identComprador').val();
		
		var db = window.openDatabase("Database", "1.0", "TicketMobile", 200000);
		db.transaction(function(tx){
			tx.executeSql('SELECT * FROM Boleto WHERE idBoleto = ?;',[id],function(tx,results){
				var registros = results.rows.length;
				if(registros == 0){
					var db = window.openDatabase("Database", "1.0", "TicketMobile", 200000);
					db.transaction(function(tx){
						tx.executeSql('INSERT INTO Boleto (idBoleto,strQr,strBarcode,idCli,id_descuento,idLocB,nombreHISB,documentoHISB,strEstado,identComprador) VALUES (?,?,?,?,?,?,?,?,?,?);',[id,qr,barcode,cliente,concierto,local,nombre,cedula,estado,identComprador],
						function(tx,res){
							// console.log("vamos:"+res.insertId)
						});                
					},errorCB,successCB);
				}else{
					var db = window.openDatabase("Database", "1.0", "TicketMobile", 200000);
					db.transaction(function(tx){
						tx.executeSql('UPDATE Boleto SET identComprador = ? WHERE idBoleto = ?;',[identComprador,id],function(tx,results){
							
						},errorCB,successCB);
					});
				}
			},errorCB,successCB);
		});
		count++;
	});
	$('#waitbajar').fadeOut('slow');
	$('#btnbajar').delay(600).fadeIn('slow');
	// window.location = '';
	// if(idurl == 1){
		// setTimeout("window.location='subpages/ingreso.html';",1500);
	// }else{
		// setTimeout("window.location='';",1500);
	// }
}

function validarBoleto(e){
	console.log(e.keyCode);
	if(e.keyCode == 13){
		validarIngreso();
	}
}

function validarBoletocodigo(e){
	console.log(e.keyCode);
	if(e.keyCode == 13){
		validarIngresocodigo();
	}
}

var meses = new Array ("01","02","03","04","05","06","07","08","09","10","11","12");
var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
var f = new Date();;
var valor = f.getFullYear()+'-'+meses[f.getMonth()]+'-'+f.getDate();

var hora = f.getHours();
var minuto = f.getMinutes();
var segundo = f.getSeconds(); 

var horas = hora+':'+minuto+':'+segundo;

var timestamp = valor+' '+horas;
// alert(timestamp);

function validarIngresocodigo(){
	// alert('hola');
	var reloj = $("#iframe1").contents().find("#reloj").val();
	var playing = false;
	var codigo = $('#onlycodigo').val();
	if(codigo == ''){
		$('#error1').modal('show');
		document.getElementById('player1').play();
		
		setTimeout(function(){
			//alert("Boom!");
			location.reload();
		}, 1000);
	}else{
		$('#btnvalidar').fadeOut('slow');
		$('#waitvalidar').delay(600).fadeIn('slow');
		// alert(codigo+' - '+cedula);
		var playing = false;
		var db = window.openDatabase("Database", "1.0", "TicketMobile", 200000);
		db.transaction(function(tx){
			tx.executeSql('SELECT * FROM Boleto WHERE strBarcode = ?;',[codigo],function(tx,results){
				var registros = results.rows.length;
				if(registros > 0){
					var row = results.rows.item(0);
					var nombre = row.nombreHISB;
					var estado = row.strEstado;
					var id = row.idBoleto;
					var identComprador = row.identComprador;
					if(identComprador == 1){
						$('.smsback').css('background-color','red');
						$('#mensaje').css('color','white');
						$('#titlemodal').html('Atención');
						$('#mensaje').html('El Boleto  ' +  codigo  + '  NO PUEDE INGRESAR AL CONCIERTO YA QUE NO ESTA CANJEADO POR EL REAL Y DEBE CANJEARLO');
						$('#nombre').html(row.nombreHISB);
						$('#sms').modal('show');
						setTimeout(function(){
							//alert("Boom!");
							location.reload();
						}, 1000);
						//window.location = '';
					}else{
						if(estado == "A"){
							
							var idabajo = row.idabajo;
							var inactivo = "I";
							// alert(nombre);
							document.getElementById('player').play();
							$('.smsback').css('background-color','#5cb85c');
							$('#titlemodal').html('Boleto Correcto!');
							$('#mensaje').html('Datos Correctos, INGRESE!' + estado);
							$('#nombre').html(row.nombreHISB);
							var db = window.openDatabase("Database", "1.0", "TicketMobile", 200000);
							db.transaction(function(tx){
								tx.executeSql('UPDATE Boleto SET strEstado = ?  , hora_ingreso = ? WHERE idabajo = ? AND idBoleto = ?;',[inactivo,reloj,idabajo,id],function(tx,results){
									
								});
							},errorCB,successCB);
							
							var db = window.openDatabase("Database", "1.0", "TicketMobile", 200000);
							db.transaction(function(tx){
								tx.executeSql('INSERT INTO auditoria (idBoleto,estado,fecha) VALUES (?,?,?);',[id,'Boleto Correcto',timestamp],function(tx,res){
									
								});                
							},errorCB,successCB);
							$('#sms').modal('show');
							setTimeout(function(){
								//alert("Boom!");
								location.reload();
							}, 1000);
						}else if(estado == "ANU"){
							// alert('ya usado');
							var idabajo = row.idabajo;
							var inactivo = "I";
							document.getElementById('player2').play();
							
							
							var db = window.openDatabase("Database", "1.0", "TicketMobile", 200000);
							db.transaction(function(tx){
								tx.executeSql('UPDATE Boleto SET documentoHISB = ? , hora_ingreso = ? WHERE idabajo = ? AND idBoleto = ?;',[inactivo,reloj,idabajo,id],function(tx,results){
									
								});
							},errorCB,successCB);
							
							
							
							var db = window.openDatabase("Database", "1.0", "TicketMobile", 200000);
							db.transaction(function(tx){
								tx.executeSql('INSERT INTO auditoria (idBoleto,estado,fecha) VALUES (?,?,?);',[id,'Boleto Usado',timestamp],function(tx,res){
									
								});                
							},errorCB,successCB);
							
							$('.smsback').css('background-color','#6001D2');
							$('#titlemodal').css('color','#fff');
							$('#titlemodal').html('BOLETO REIMPRESO!');
							$('#mensaje').css('color','#fff');
							$('#mensaje').html('BOLETO REIMPRESO!!!!<br>retenga el boleto ' + estado);
							$('#nombre').html(row.nombreHISB);
							$('#sms').modal('show');
							setTimeout(function(){
								//alert("Boom!");
								location.reload();
							}, 3000);
						}else if(estado == "I"){
							// alert('ya usado');
							var db = window.openDatabase("Database", "1.0", "TicketMobile", 200000);
							db.transaction(function(tx){
								tx.executeSql('INSERT INTO auditoria (idBoleto,estado,fecha) VALUES (?,?,?);',[id,'Boleto Usado',timestamp],function(tx,res){
									
								});                
							},errorCB,successCB);
							
							
							
							var db = window.openDatabase("Database", "1.0", "TicketMobile", 200000);
							db.transaction(function(tx){
								tx.executeSql('INSERT INTO errores (nombre , estado) VALUES (?,?);',['Boleto Usado','1'],function(tx,res){
									
								});                
							},errorCB,successCB);
							
							
							
							document.getElementById('player1').play();
							$('.smsback').css('background-color','#C51D34');
							$('#titlemodal').html('Boleto Correcto!');
							$('#mensaje').html('BOLETO YA USADO!!!!' + estado);
							$('#nombre').html(row.nombreHISB);
							$('#sms').modal('show');
							setTimeout(function(){
								//alert("Boom!");
								location.reload();
							}, 1000);
						}else{
							var idabajo = row.idabajo;
							var inactivo = "I";
							// alert(nombre);
							document.getElementById('player').play();
							$('.smsback').css('background-color','#5cb85c');
							$('#titlemodal').html('Boleto Correcto!');
							$('#mensaje').html('Datos Correctos, INGRESE!' + estado);
							$('#nombre').html(row.nombreHISB);
							var db = window.openDatabase("Database", "1.0", "TicketMobile", 200000);
							db.transaction(function(tx){
								tx.executeSql('UPDATE Boleto SET strEstado = ?  , hora_ingreso = ? WHERE idabajo = ? AND idBoleto = ?;',[inactivo,reloj,idabajo,id],function(tx,results){
									
								});
							},errorCB,successCB);
							
							var db = window.openDatabase("Database", "1.0", "TicketMobile", 200000);
							db.transaction(function(tx){
								tx.executeSql('INSERT INTO auditoria (idBoleto,estado,fecha) VALUES (?,?,?);',[id,'Boleto Correcto',timestamp],function(tx,res){
									
								});                
							},errorCB,successCB);
							$('#sms').modal('show');
							setTimeout(function(){
								//alert("Boom!");
								location.reload();
							}, 1000);
						}
					}
				}else{
					document.getElementById('player1').play();
					$('.smsback').css('background-color','#f0ad4e');
					$('#titlemodal').html('Boleto Incorrecto!');
					$('#mensaje').html('Datos Incorrectos!');
					$('#sms').modal('show');
					setTimeout(function(){
						//alert("Boom!");
						location.reload();
					}, 1000);
					
					var db = window.openDatabase("Database", "1.0", "TicketMobile", 200000);
					db.transaction(function(tx){
						tx.executeSql('INSERT INTO errores (nombre , estado) VALUES (?,?);',['Boleto incorrecto','2'],function(tx,res){
							
						});                
					},errorCB,successCB);
				}
				$('#waitvalidar').fadeOut('slow');
				$('#btnvalidar').delay(600).fadeIn('slow');
			});
		},errorCB,successCB);
		// setTimeout(function(){
				// $('.smsback').css('background-color','#fff');
				// $('#titlemodal').html('');
				// $('#mensaje').html('');
				// $('#nombre').html('');
				// $('#sms').modal('hide');
				// $('#onlycodigo').val('');
				// $('#codigo').focus();
				// $('#onlycodigo').focus();
		// },1000);
		//$('#onlycodigo').focus();
		
	}
}

function validarIngreso(){
	// alert('hola');
	var codigo = $('#codigo').val();
	var cedula = $('#cedula').val();
	if((codigo == '') || (cedula == '')){
		$('#error1').modal('show');
	}else{
		$('#btnvalidar').fadeOut('slow');
		$('#waitvalidar').delay(600).fadeIn('slow');
		// alert(codigo+' - '+cedula);
		var db = window.openDatabase("Database", "1.0", "TicketMobile", 200000);
		db.transaction(function(tx){
			tx.executeSql('SELECT * FROM Boleto WHERE strBarcode = ? AND documentoHISB = ?;',[codigo,cedula],function(tx,results){
				var registros = results.rows.length;
				if(registros > 0){
					var row = results.rows.item(0);
					var nombre = row.nombreHISB;
					var estado = row.strEstado;
					var identComprador = row.identComprador;
					if(identComprador == 1){
						//alert('Atención!!! El Boleto  ' +  codigo  + '  NO PUEDE INGRESAR AL CONCIERTO YA QUE NO ESTA CANJEADO POR EL REAL Y DEBE CANJEARLO');
						$('.smsback').css('background-color','red');
						$('#titlemodal').html('Atención');
						$('#mensaje').html('El Boleto  ' +  codigo  + '  NO PUEDE INGRESAR AL CONCIERTO YA QUE NO ESTA CANJEADO POR EL REAL Y DEBE CANJEARLO');
						$('#nombre').html(row.nombreHISB);
						$('#sms').modal('show');
						setTimeout(function(){
							//alert("Boom!");
							location.reload();
						}, 1000);
					}else{
						if(estado == "A"){
							var id = row.idBoleto;
							var idabajo = row.idabajo;
							var inactivo = "I";
							// alert(nombre);
							$('.smsback').css('background-color','#5cb85c');
							$('#titlemodal').html('Boleto Correcto!');
							$('#mensaje').html('Datos Correctos, INGRESE!');
							$('#nombre').html(row.nombreHISB);
							var db = window.openDatabase("Database", "1.0", "TicketMobile", 200000);
							db.transaction(function(tx){
								tx.executeSql('UPDATE Boleto SET strEstado = ? WHERE idabajo = ? AND idBoleto = ?;',[inactivo,idabajo,id],function(tx,results){
									
								});
							},errorCB,successCB);
							var db = window.openDatabase("Database", "1.0", "TicketMobile", 200000);
							db.transaction(function(tx){
								tx.executeSql('INSERT INTO auditoria (idBoleto,estado,fecha) VALUES (?,?,?);',[id,'Boleto Correcto',timestamp],function(tx,res){
									
								});                
							},errorCB,successCB);
							$('#sms').modal('show');
							setTimeout(function(){
								//alert("Boom!");
								location.reload();
							}, 1000);
						}else{
							var db = window.openDatabase("Database", "1.0", "TicketMobile", 200000);
							db.transaction(function(tx){
								tx.executeSql('INSERT INTO auditoria (idBoleto,estado,fecha) VALUES (?,?,?);',[id,'Boleto Usado',timestamp],function(tx,res){
									
								});                
							},errorCB,successCB);
							// alert('ya usado');
							$('.smsback').css('background-color','#C51D34');
							$('#titlemodal').html('Boleto Correcto!');
							$('#mensaje').html('BOLETO YA USADO!!!!!');
							$('#nombre').html(row.nombreHISB);
							$('#sms').modal('show');
							setTimeout(function(){
								//alert("Boom!");
								location.reload();
							}, 1000);
						}
					}
				}else{
					$('.smsback').css('background-color','#f0ad4e');
					$('#titlemodal').html('Boleto Incorrecto!');
					$('#mensaje').html('Datos Incorrectos!');
					$('#sms').modal('show');
					setTimeout(function(){
					//	alert("Boom!");
						location.reload();
					}, 1000);
				}
				$('#waitvalidar').fadeOut('slow');
				$('#btnvalidar').delay(600).fadeIn('slow');
			});
		},errorCB,successCB);
		
		setTimeout(function(){
			$('.smsback').css('background-color','#fff'); 
			$('#titlemodal').html(''); 
			$('#mensaje').html(''); 
			$('#nombre').html(''); 
			$('#sms').modal('hide'); 
			$('#codigo').val(''); 
			$('#cedula').val(''); 
			$('#codigo').focus(); 
			$('#onlycodigo').focus();
			
		}, 1000);
	}
}

function cerrar_pop(){
	// $('#myidconcierto').val('');
	$('#clave_segura').val('');
}
function bajardatos(){
	/*cambios Ana*/
	console.log('entra a la funcion');
	var idconcierto=$('#myidconcierto').val();
	var localidad=$('#localidad').val();
	//alert(idconcierto);
	var clave = '321';
	var clave_segura = $('#clave_segura').val();
	if(clave_segura == '' || clave_segura == null ){
		alert('no puede dejar el campo de clave vacio');
	}else{
		if(clave_segura != clave){
			alert('La clave de acceso es erronea, revise y vuelva a ingresar');
		}else{
			if(idconcierto==null||idconcierto==''||isNaN(parseInt(idconcierto))){
				alert("Por favor ingrese un id de concierto.");
			}else{
				console.log('entra al post 1');
				
				$('#popupidconcierto').modal('hide');
				$('#btnbajar').fadeOut('slow');
				$('#waitbajar').delay(600).fadeIn('slow');
				console.log('entra al post');
				$.post("https://www.ticketfacil.ec/ticket2/controlAccesos/bajarMovil_fabricio3.php",{idconcierto:idconcierto,localidad:localidad}).done(function(response){
					if(response != 'error'){
						var objDatos=JSON.parse(response);
						var misboletos=objDatos.Boletos;
						console.log(misboletos.length);
						var db = window.openDatabase("Database", "1.0", "TicketMobile", 200000);
						db.transaction(function(tx){
							for(i=0; i < misboletos.length; i++){
								var id = misboletos[i].idBoleto; 
								var barcode = misboletos[i].barcode;
								var estado = misboletos[i].estado;
								var id_loc = misboletos[i].id_loc;
								//var identComprador = misboletos[i].identComprador;
								var identComprador=2;
								
								tx.executeSql("INSERT OR IGNORE INTO Boleto (idBoleto,strBarcode,idLocB,strEstado,identComprador) VALUES (?,?,?,?,?)",[id,barcode,id_loc,estado,identComprador]);
							
								tx.executeSql('UPDATE Boleto SET identComprador = ?,strEstado= ? WHERE idBoleto = ?;',[identComprador,estado,id]);
								
								//alert(id+"/"+concierto);
								/*tx.executeSql('SELECT idBoleto FROM Boleto WHERE idBoleto=?;',[id],function(tx,results){
									var registros = results.rows.length;
									if(registros == 0){
										tx.executeSql('INSERT INTO Boleto (idBoleto,strQr,strBarcode,idCli,id_descuento,idLocB,nombreHISB,documentoHISB,strEstado,identComprador) VALUES (?,?,?,?,?,?,?,?,?,?);',[id,qr,barcode,cliente,concierto,local,nombre,cedula,estado,identComprador]);                
									}else{
										tx.executeSql('UPDATE Boleto SET identComprador = ?,strEstado= ? WHERE idBoleto = ?;',[identComprador,estado,id]);
									}
								});*/
							}
						},errorCB,successCB);
						
						$('#waitbajar').fadeOut('slow');
						$('#btnbajar').delay(600).fadeIn('slow');
						alert("Datos descargado con éxito.");
						window.location = '';
						
						/*var content = '<table>'
						
					
							
							content += '<tr class="dataBoleto">\
											<td><input type="hidden" class="id" value="'+id+'" /></td>\
											<td><input type="hidden" class="qr" value="'+qr+'" /></td>\
											<td><input type="hidden" class="barcode" value="'+barcode+'" /></td>\
											<td><input type="hidden" class="cliente" value="'+cliente+'" /></td>\
											<td><input type="hidden" class="concierto" value="'+concierto+'" /></td>\
											<td><input type="hidden" class="local" value="'+local+'" /></td>\
											<td><input type="hidden" class="nombre" value="'+nombre+'" /></td>\
											<td><input type="hidden" class="cedula" value="'+cedula+'" /></td>\
											<td><input type="hidden" class="estado" value="'+estado+'" /></td>\
											<td><input type="hidden" class="identComprador" value="'+identComprador+'" /></td>\
										</tr>';
						}
						content += '</table>';
						
						var idurl = 2;
						$('#boletos').html(content);
						insertarDatos(idurl);*/
						// $('#myidconcierto').val('');
						$('#clave_segura').val('');
					}
				}).fail(function(xhr, status, error) {
						console.log(status);
				});
			}
		}
	}
}

function subirdatos(){ 
	var nombree = $('#nom_empleado').val();
	var num_evento = $('#num_evento').val();
	
	$('#loadSubir').css('display','block');
	var db = window.openDatabase("Database", "1.0", "TicketMobile", 200000);
	db.transaction(function(tx){
		tx.executeSql("SELECT strBarcode,strEstado , hora_ingreso , idLocB FROM Boleto where strEstado ='I';",[],function(tx,results){
			var registros = results.rows.length;
			var datos = '';
			for(var i = 0; i < registros; i++){
				var row = results.rows.item(i);
				var id = row.strBarcode;
				var estado = row.strEstado;
				var hora_ingreso = row.hora_ingreso;
				var idLocB = row.idLocB;
				
				datos += id  +'|'+  estado  +'|'+  hora_ingreso  +'|'+  idLocB  +'|'+ '@';
			}
			console.log(datos);
			var valores = datos.substring(0,datos.length -1);
			
			$.post("https://www.ticketfacil.ec/ticket2/controlAccesos/subidaMovil.php",{ 
				datos : valores , nombree : nombree , num_evento : num_evento
			}).done(function(data){
				alert(data);
				location.reload();		
			});

			// $.post("https://www.ticketfacil.ec/ticket2/controlAccesos/subidaMovil.php", { datos:""+valores+""}).done(function(response){
				// console.log(response);
				// // $('#waitsubir').fadeOut('slow');
				// // $('#btnsubir').delay(600).fadeIn('slow');
				// alert("Datos actualizados con éxito.");
				// location.reload();
			// });
		});
		
		
		
		
		tx.executeSql("SELECT strBarcode,strEstado , hora_ingreso , idLocB FROM Boleto where documentoHISB = 'I' and strEstado ='ANU';",[],function(tx,results1){
			var registros1 = results1.rows.length;
			var datos1 = '';
			for(var j = 0; j < registros1; j++){
				var row1 = results1.rows.item(j);
				var strBarcode = row1.strBarcode;
				var estado = row1.strEstado;
				var hora_ingreso = row1.hora_ingreso;
				var idLocB = row1.idLocB;
				
				datos1 += strBarcode  +'|'+  estado  +'|'+  hora_ingreso  +'|'+  idLocB  +'|'+ '@';
			}
			console.log(datos1);
			var valores1 = datos1.substring(0,datos1.length -1);
			$.post("https://www.ticketfacil.ec/ticket2/controlAccesos/subidaMovil2.php", { 
				datos1:""+valores1+"" , nombree : nombree , num_evento : num_evento
			}).done(function(response){
				console.log(response);
				// $('#waitsubir').fadeOut('slow');
				// $('#btnsubir').delay(600).fadeIn('slow');
				// alert("Datos actualizados con éxito.");
				// location.reload();
			});
		});
		
		
	},errorCB,successCB);
}

function subirauditoria(){
	var db = window.openDatabase("Database", "1.0", "TicketMobile", 200000);
	db.transaction(function(tx){
		tx.executeSql('SELECT * FROM auditoria;',[],function(tx,results){
			var registros = results.rows.length;
			var datos = '';
			for(var i = 0; i < registros; i++){
				var row = results.rows.item(i);
				var id = row.id;
				var estado = row.estado;
				var boleto = row.idBoleto;
				var fecha = row.fecha;
				
				datos += id +'|'+ estado +'|'+ boleto +'|'+ fecha +'|'+'@';
			}
			console.log(datos);
			var valores = datos.substring(0,datos.length -1);
			$.get("https://www.ticketfacil.ec/ticket2/controlAccesos/auditoriaMovil.php?datos="+valores).done(function(response){
				console.log(response);
				$('#waitsubir').fadeOut('slow');
				$('#btnsubir').delay(600).fadeIn('slow');
			});
		},errorCB,successCB);
	});
}

function cedulaManual(){
	var codigo = $('#codigo').val();
	var db = window.openDatabase("Database", "1.0", "TicketMobile", 200000);
	db.transaction(function(tx){
		tx.executeSql('SELECT documentoHISB FROM Boleto WHERE strBarcode = ?;',[codigo],function(tx,results){
			var registros = results.rows.length;
			if(registros > 0){
				var row = results.rows.item(0);
				var cedula = row.documentoHISB;
				$('#cedula').val(cedula);
			}else{
				$('#error2').modal('show');
				$('#codigo').val('');
				$('#cedula').val('');
				$('#codigo').focus();
			}
		},errorCB,successCB);
	});
}



//setInterval(bajardatos, 60000);
//setInterval(subirdatos, 90000);
//setInterval(subirauditoria, 60000);
