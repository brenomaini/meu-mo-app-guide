

<!DOCTYPE html>
<html lang="en">
<!-- InstanceBegin template="/Templates/pagina_moradores_n2.dwt.php" codeOutsideHTMLIsLocked="true" -->

<head>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-149444432-3"></script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'UA-149444432-3');
			</script>

	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta charset="utf-8" />
	<!-- <meta charset="ISO-8859-1"> -->
	<!-- InstanceBeginEditable name="doctitle" -->
	<title>Morador Online - Reservas</title>
	<!-- InstanceEndEditable -->
	<meta name="description" content="overview &amp; stats" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

	<!-- bootstrap & fontawesome -->
	<link rel="stylesheet" href="../assets/css/bootstrap.css" />
	<link rel="stylesheet" href="../assets/css/font-awesome.css" />

	<!-- page specific plugin styles -->
	<!-- InstanceBeginEditable name="cssspecific" -->

	<link rel="stylesheet" href="../assets/css/jquery-ui.custom.css" />

	<link rel="stylesheet" href="../assets/css/jquery.gritter.css" />


	<!-- InstanceEndEditable -->
	<!-- text fonts -->
	<link rel="stylesheet" href="../assets/css/ace-fonts.css" />

	<!-- ace styles -->
	<link rel="stylesheet" href="../assets/css/ace.css" class="ace-main-stylesheet" id="main-ace-style" />

	<!--[if lte IE 9]>
			<link rel="stylesheet" href="../assets/css/ace-part2.css" class="ace-main-stylesheet" />
		<![endif]-->

	<!--[if lte IE 9]>
		  <link rel="stylesheet" href="../assets/css/ace-ie.css" />
		<![endif]-->

	<!-- inline styles related to this page -->

	<!-- ace settings handler -->
	<script src="../assets/js/ace-extra.js"></script>

	<!-- HTML5shiv and Respond.js for IE8 to support HTML5 elements and media queries -->

	<!--[if lte IE 8]>
		<script src="../assets/js/html5shiv.js"></script>
		<script src="../assets/js/respond.js"></script>
		<![endif]-->
	<!-- InstanceBeginEditable name="head" -->
	<!-- InstanceEndEditable -->
</head>

<body class="no-skin">
	<!-- #section:basics/navbar.layout -->
	<div id="navbar" class="navbar navbar-default">
		<script type="text/javascript">
			try {
				ace.settings.check('navbar', 'fixed')
			} catch (e) {}
		</script>

		<div class="navbar-container" id="navbar-container">
			<!-- #section:basics/sidebar.mobile.toggle -->
			<button type="button" class="navbar-toggle menu-toggler pull-left" id="menu-toggler" data-target="#sidebar">
				<span class="sr-only">Toggle sidebar</span>

				<span class="icon-bar"></span>

				<span class="icon-bar"></span>

				<span class="icon-bar"></span>
			</button>

			<!-- /section:basics/sidebar.mobile.toggle -->
			<div class="navbar-header pull-left">
				<!-- #section:basics/navbar.layout.brand -->
				<a href="#" class="navbar-brand">
					<small>
						<i class="fa fa-building-o"></i>
						Morador Online
					</small>
				</a>

				<!-- /section:basics/navbar.layout.brand -->

				<!-- #section:basics/navbar.toggle -->

				<!-- /section:basics/navbar.toggle -->
			</div>

			<!-- #section:basics/navbar.dropdown -->
			<div class="navbar-buttons navbar-header pull-right" role="navigation">
				<ul class="nav ace-nav">
					<!-- ================================================ -->
					<!--  Aqui residem botoes para posterior liberacao... -->
					<!-- ================================================ -->
										<li class="dark">

						<a data-toggle="dropdown" class="dropdown-toggle" href="#">
							<i class="ace-icon fa fa-shopping-cart"></i>
													</a>

						<ul class="dropdown-menu-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close">
							<li class="dropdown-header">
								<i class="ace-icon fa fa-check"></i>
								0 Fornecedores
							</li>

							<li class="dropdown-content">
								<ul class="dropdown-menu dropdown-navbar">

																	</ul>
							</li>
							<li class="dropdown-footer">
								<a href="/homeshop/ver_carrinho.php">
									Ver todos os Carrinhos
									<i class="ace-icon fa fa-arrow-right"></i>
								</a>
							</li>

						</ul>
					</li>

					<!--	
                    
			
						<li class="purple">
							<a data-toggle="dropdown" class="dropdown-toggle" href="#">
								<i class="ace-icon fa fa-bell icon-animated-bell"></i>
								<span class="badge badge-important">8</span>
							</a>

							<ul class="dropdown-menu-right dropdown-navbar navbar-pink dropdown-menu dropdown-caret dropdown-close">
								<li class="dropdown-header">
									<i class="ace-icon fa fa-exclamation-triangle"></i>
									8 Notifications
								</li>

								<li class="dropdown-content">
									<ul class="dropdown-menu dropdown-navbar navbar-pink">
										<li>
											<a href="#">
												<div class="clearfix">
													<span class="pull-left">
														<i class="btn btn-xs no-hover btn-pink fa fa-comment"></i>
														New Comments
													</span>
													<span class="pull-right badge badge-info">+12</span>
												</div>
											</a>
										</li>

										<li>
											<a href="#">
												<i class="btn btn-xs btn-primary fa fa-user"></i>
												Bob just signed up as an editor ...
											</a>
										</li>

										<li>
											<a href="#">
												<div class="clearfix">
													<span class="pull-left">
														<i class="btn btn-xs no-hover btn-success fa fa-shopping-cart"></i>
														New Orders
													</span>
													<span class="pull-right badge badge-success">+8</span>
												</div>
											</a>
										</li>

										<li>
											<a href="#">
												<div class="clearfix">
													<span class="pull-left">
														<i class="btn btn-xs no-hover btn-info fa fa-twitter"></i>
														Followers
													</span>
													<span class="pull-right badge badge-info">+11</span>
												</div>
											</a>
										</li>
									</ul>
								</li>

								<li class="dropdown-footer">
									<a href="#">
										See all notifications
										<i class="ace-icon fa fa-arrow-right"></i>
									</a>
								</li>
							</ul>
						</li>

						-->
										<li class="green">
						<a data-toggle="dropdown" class="dropdown-toggle" href="#">



															<i class="ace-icon fa fa-envelope"></i>

													</a>



						<ul class="dropdown-menu-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close">
							<li class="dropdown-header">
								<i class="ace-icon fa fa-envelope-o"></i>
								0 Mensagens
							</li>

							<li class="dropdown-content">
								<ul class="dropdown-menu dropdown-navbar">
																	</ul>
							</li>

							<li class="dropdown-footer">
								<a href="/mensagens/index.php">
									Ver Todas as Mensagens
									<i class="ace-icon fa fa-arrow-right"></i>
								</a>
							</li>
						</ul>
					</li>
					<!-- ================================================ -->
					<!--  Aqui residem botoes para posterior liberacao... -->
					<!-- ================================================ -->
					<!-- #section:basics/navbar.user_menu -->
					<li class="light-blue">
						<a data-toggle="dropdown" href="#" class="dropdown-toggle">
							<img class="nav-user-photo" src="https://reservaparqueclube.mo.app.br//arquivos/FotosMoradores/thumbnails//7/f/834_7f3ab8d7e5c54ff1c583b0ef25790481.jpg" alt="Jason's Photo" />
							<span class="user-info">
								<small>Ola,</small>
								BRENO AUGUSTO MAINI DA SILVA							</span>

							<i class="ace-icon fa fa-caret-down"></i>
						</a>

						<ul class="user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
							<li>
								<a href="../meusdados/">
									<i class="ace-icon fa fa-cog"></i>
									Meus Dados
								</a>
							</li>
							<!--
								<li>
									<a href="../profile.html">
										<i class="ace-icon fa fa-user"></i>
										Profile
									</a>
								</li>
                                
                                -->

							<li class="divider"></li>

							<li>
								<a href="../auth/logoff.php">
									<i class="ace-icon fa fa-power-off"></i>
									Sair
								</a>
							</li>
						</ul>
					</li>

					<!-- /section:basics/navbar.user_menu -->
				</ul>
			</div>

			<!-- /section:basics/navbar.dropdown -->
		</div><!-- /.navbar-container -->
	</div>

	<!-- /section:basics/navbar.layout -->
	<div class="main-container" id="main-container">
		<script type="text/javascript">
			try {
				ace.settings.check('main-container', 'fixed')
			} catch (e) {}
		</script>

		<!-- #section:basics/sidebar -->
		<div id="sidebar" class="sidebar                  responsive">
			<script type="text/javascript">
				try {
					ace.settings.check('sidebar', 'fixed')
				} catch (e) {}
			</script>

			<div class="sidebar-shortcuts" id="sidebar-shortcuts">
				<div class="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
					<button class="btn btn-success" onClick="javascript:window.location='/reservas';">
						<i class="ace-icon fa fa-calendar"></i>
					</button>
					<button class="btn btn-info" onClick="javascript:window.location='/transparencia';">
						<i class="ace-icon fa fa-folder-open"></i>
					</button>
					<!-- #section:basics/sidebar.layout.shortcuts -->
					<button class="btn btn-warning" onClick="javascript:window.location='/moradores_adicionais';">
						<i class="ace-icon fa fa-users"></i>
					</button>
					<button class="btn btn-danger" onClick="javascript:window.location='/meusdados';">
						<i class="ace-icon fa fa-cogs"></i>
					</button>

					<!-- /section:basics/sidebar.layout.shortcuts -->
				</div>

				<div class="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
					<span class="btn btn-success"></span>

					<span class="btn btn-info"></span>

					<span class="btn btn-warning"></span>

					<span class="btn btn-danger"></span>
				</div>
			</div><!-- /.sidebar-shortcuts -->

			<ul class="nav nav-list">
				<li class="active">
					<a href="../index.html">
						<i class="menu-icon fa fa-tachometer"></i>
						<span class="menu-text"> P&aacute;gina Principal </span>
					</a>

					<b class="arrow"></b>
				</li>


				<li class="">
					<a href="#" class="dropdown-toggle">
						<i class="menu-icon fa fa-picture-o"></i>
						<span class="menu-text"> Meu Painel </span>

						<b class="arrow fa fa-angle-down"></b>
					</a>

					<b class="arrow"></b>

					<ul class="submenu">
						<li class="">
							<a href="../meusdados/">
								<i class="menu-icon fa fa-picture-o"></i>
								Meus Dados
							</a>
							<b class="arrow"></b>
						</li>
						<li class="">
							<a href="../convidados/">
								<i class="menu-icon fa fa-users"></i>
								Meus Contatos
							</a>
							<b class="arrow"></b>
						</li>
						<li class="">
							<a href="../convidados/prestadores.php">
								<i class="menu-icon fa fa-truck"></i>
								Meus Prestadores
							</a>
							<b class="arrow"></b>
						</li>
						<li class="">
							<a href="../moradores_adicionais/index.php">
								<i class="menu-icon fa fa-home"></i>
								Meus Moradores
							</a>
							<b class="arrow"></b>
						</li>
						<li class="">
							<a href="../autorizados/index.php">
								<i class="menu-icon fa fa-sign-in"></i>
								Meus H&oacute;spedes
							</a>
							<b class="arrow"></b>
						</li>
						<li class="">
							<a href="../veiculos/index.php">
								<i class="menu-icon fa fa-car"></i>
								Meus Ve&iacute;culos
							</a>
							<b class="arrow"></b>
						</li>
						<li class="">
							<a href="/reservas/minhas_reservas.php">
								<i class="menu-icon fa fa-calendar"></i>
								Minhas Reservas
							</a>

							<b class="arrow"></b>
						</li>
						<li class="">
							<a href="/visitantes/meus_visitantes.php">
								<i class="menu-icon fa fa-stamp"></i>
								Meus Visitantes
							</a>

							<b class="arrow"></b>
						</li>
					</ul>
				</li>

				<li class="purple">
					<a href="#" class="dropdown-toggle">
						<i class="menu-icon fa fa-shopping-cart"></i>
						<span class="menu-text"> Homeshop </span>

						<b class="arrow fa fa-angle-down"></b>
					</a>

					<b class="arrow"></b>

					<ul class="submenu">
						<li class="">
							<a href="/homeshop/index.php">
								<i class="menu-icon fa fa-shopping-cart"></i>
								HomeShop
							</a>

							<b class="arrow"></b>
						</li>
						<li class="">
							<a href="/homeshop/busca_categoria.php">
								<i class="menu-icon fa fa-search"></i>
								Busca por Categoria
							</a>

							<b class="arrow"></b>
						</li>
						<li class="">
							<a href="/homeshop/meus_pedidos.php">
								<i class="menu-icon fa fa-truck"></i>
								Meus Pedidos
							</a>

							<b class="arrow"></b>
						</li>
						<li class="">
							<a href="/homeshop/ver_carrinho.php">
								<i class="menu-icon fa fa-shopping-cart"></i>
								Meu Carrinho
							</a>

							<b class="arrow"></b>
						</li>
						<li class="">
							<a href="/homeshop/quero_indicar.php">
								<i class="menu-icon fa fa-thumbs-up"></i>
								Quero Indicar
							</a>

							<b class="arrow"></b>
						</li>

					</ul>
				</li>

				<li class="">
					<a href="../avisos/">
						<i class="menu-icon fa fa-newspaper-o"></i>
						<span class="menu-text">
							Avisos e Not&iacute;cias</span>


					</a>
				</li>
				<li class="">
					<a href="../forum/">
						<i class="menu-icon fa fa-comments"></i>
						<span class="menu-text">
							F&oacute;rum</span>


					</a>
				</li>
				<li class="">
					<a href="#" class="dropdown-toggle">
						<i class="menu-icon fa fa-calendar"></i>
						<span class="menu-text"> Reservas </span>

						<b class="arrow fa fa-angle-down"></b>
					</a>

					<b class="arrow"></b>

					<ul class="submenu">
						<li class="">
							<a href="/reservas/index.php">
								<i class="menu-icon fa fa-calendar"></i>
								Agendar Nova Reserva
							</a>

							<b class="arrow"></b>
						</li>

						<li class="">
							<a href="/reservas/minhas_reservas.php">
								<i class="menu-icon fa fa-calendar"></i>
								Minhas Reservas
							</a>

							<b class="arrow"></b>
						</li>
					</ul>
				</li>
				
				<li class="">
					<a href="../ocorrencias/">
						<i class="menu-icon fa fa-book"></i>
						<span class="menu-text">
							Ocorr&ecirc;ncias</span>

					</a>
				</li>

				<li class="">
					<a href="#" class="dropdown-toggle">
						<i class="menu-icon fa fa-bullhorn"></i>
						<span class="menu-text"> Assembleias </span>

						<b class="arrow fa fa-angle-down"></b>
					</a>

					<b class="arrow"></b>

					<ul class="submenu">
						<li class="">
							<a href="../assembleia/assembleias_abertas.php">
								<i class="menu-icon fa fa-gavel"></i>
								Assembleias abertas
							</a>

							<b class="arrow"></b>
						</li>

						<li class="">
							<a href="../assembleia/discussao_topicos.php">
								<i class="menu-icon fa fa-comment"></i>
								Discuss&otilde;es Sobre T&oacute;picos
							</a>

							<b class="arrow"></b>
						</li>
					</ul>
				</li>

				<li class="">
					<a href="../transparencia/">
						<i class="menu-icon fa fa-folder-open"></i>
						<span class="menu-text">
							Transpar&ecirc;ncia</span>


					</a>
				</li>


				<li class="">
					<a href="#" class="dropdown-toggle">
						<i class="menu-icon fa fa-lock"></i>
						<span class="menu-text"> Visitantes </span>

						<b class="arrow fa fa-angle-down"></b>
					</a>

					<b class="arrow"></b>

					<ul class="submenu">
						<li class="">
							<a href="../visitantes/">
								<i class="menu-icon fa fa-lock"></i>
								Agendar Visita Portaria
							</a>
							<b class="arrow"></b>
						</li>
						<li class="">
							<a href="../visitantes/piscina.php">
								<i class="menu-icon fa fa-child"></i>
								Gerar Convite Piscina
							</a>
							<b class="arrow"></b>
						</li>
						<li class="">
							<a href="/visitantes/meus_visitantes.php">
								<i class="menu-icon fa fa-stamp"></i>
								Meus Visitantes
							</a>
							<b class="arrow"></b>
						</li>
					</ul>
				</li>
				

				<li class="">
					<a href="../correspondencias/">
						<i class="menu-icon fa fa-envelope-o"></i>
						<span class="menu-text">
							Correspond&ecirc;ncias</span>

					</a>
				</li>

				<li class="">
					<a href="#" class="dropdown-toggle">
						<i class="menu-icon fa fa-bicycle"></i>
						<span class="menu-text">
							Classificados</span>


						<b class="arrow fa fa-angle-down"></b>
					</a>

					<b class="arrow"></b>
					<ul class="submenu">
						<li class="">
							<a href="../classificados/ver_procurar_classificados.php">
								<i class="menu-icon fa fa-caret-right"></i>
								Ver/Procurar An&uacute;ncios
							</a>

							<b class="arrow"></b>
						</li>
						<li class="">
							<a href="../classificados/criar_anuncio.php">
								<i class="menu-icon fa fa-caret-right"></i>
								Criar meu An&uacute;ncio
							</a>

							<b class="arrow"></b>
						</li>
						<li class="">
							<a href="../classificados/editar_anuncios.php">
								<i class="menu-icon fa fa-caret-right"></i>
								Editar meus An&uacute;ncios
							</a>

							<b class="arrow"></b>
						</li>

					</ul>

				</li>
				<li class="">
					<a href="#" class="dropdown-toggle">
						<i class="menu-icon fa fa-warning"></i>
						<span class="menu-text">
							Emergencias</span>


						<b class="arrow fa fa-angle-down"></b>
					</a>

					<b class="arrow"></b>
					<ul class="submenu">
						<li class="">
							<a href="../emergencias/index.php">
								<i class="menu-icon fa fa-phone"></i>
								Telefones e Inf. Condom&iacute;nio
							</a>

							<b class="arrow"></b>
						</li>
						<li class="">
							<a href="../emergencias/recomendacoes_gerais.php">
								<i class="menu-icon fafa-fire-extinguisher"></i>
								Recomenda&ccedil;&otilde;es Gerais
							</a>

							<b class="arrow"></b>
						</li>

					</ul>

				</li>
				</li>
				<li class="">
					<a href="/boletos/">
						<i class="menu-icon fa fa-money"></i>
						<span class="menu-text">
							2.a Via Boletos</span>
					</a>
				</li>

				

				<li class="">
					<a href="/redes_sociais/">
						<i class="menu-icon fa fa-facebook-square"></i>
						<span class="menu-text">
							Redes Sociais</span>					</a>
				</li>
							</ul><!-- /.nav-list -->

			<!-- #section:basics/sidebar.layout.minimize -->
			<div class="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
				<i class="ace-icon fa fa-angle-double-left" data-icon1="ace-icon fa fa-angle-double-left" data-icon2="ace-icon fa fa-angle-double-right"></i>
			</div>

			<!-- /section:basics/sidebar.layout.minimize -->
			<script type="text/javascript">
				try {
					ace.settings.check('sidebar', 'collapsed')
				} catch (e) {}
			</script>
		</div>

		<!-- /section:basics/sidebar -->
		<div class="main-content">
			<div class="main-content-inner">
				<!-- #section:basics/content.breadcrumbs -->
				<div class="breadcrumbs" id="breadcrumbs">
					<script type="text/javascript">
						try {
							ace.settings.check('breadcrumbs', 'fixed')
						} catch (e) {}
					</script><!-- InstanceBeginEditable name="CabecalhoMenor" -->
					<ul class="breadcrumb">
						<li> <i class="ace-icon fa fa-home home-icon"></i> <a href="/reservas">Reservas</a> </li>
						<!-- <li class="active">Dashboard</li> -->
					</ul>
					<!-- /.breadcrumb -->
					<!-- InstanceEndEditable -->
					<!-- #section:basics/content.searchbox -->
					<!--
					  <div class="nav-search" id="nav-search">
							<form class="form-search">
								<span class="input-icon">
									<input type="text" placeholder="Search ..." class="nav-search-input" id="nav-search-input" autocomplete="off" />
									<i class="ace-icon fa fa-search nav-search-icon"></i>
								</span>
							</form>
						</div>
                        -->
					<!-- /.nav-search -->

					<!-- /section:basics/content.searchbox -->
				</div>

				<!-- /section:basics/content.breadcrumbs -->
				<div class="page-content">
					<!-- #section:settings.box -->
					<div class="ace-settings-container" id="ace-settings-container">
						<div class="btn btn-app btn-xs btn-warning ace-settings-btn" id="ace-settings-btn">
							<i class="ace-icon fa fa-cog bigger-130"></i>
						</div>

						<div class="ace-settings-box clearfix" id="ace-settings-box">
							<div class="pull-left width-50">
								<!-- #section:settings.skins -->
								<div class="ace-settings-item">
									<div class="pull-left">
										<select id="skin-colorpicker" class="hide">
											<option data-skin="no-skin" value="#438EB9">#438EB9</option>
											<option data-skin="skin-1" value="#222A2D">#222A2D</option>
											<option data-skin="skin-2" value="#C6487E">#C6487E</option>
											<option data-skin="skin-3" value="#D0D0D0">#D0D0D0</option>
										</select>
									</div>
									<span>&nbsp; Escolher cor</span>
								</div>

								<!-- /section:settings.skins -->

								<!-- #section:settings.navbar -->
								<div class="ace-settings-item">
									<input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-navbar" />
									<label class="lbl" for="ace-settings-navbar"> Barra de navegacao Fixa</label>
								</div>

								<!-- /section:settings.navbar -->

								<!-- #section:settings.sidebar -->
								<div class="ace-settings-item">
									<input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-sidebar" />
									<label class="lbl" for="ace-settings-sidebar"> Barra lateral fixa</label>
								</div>

								<!-- /section:settings.sidebar -->

								<!-- #section:settings.breadcrumbs -->
								<div class="ace-settings-item">
									<input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-breadcrumbs" />
									<label class="lbl" for="ace-settings-breadcrumbs">Meio Fixo </label>
								</div>

								<!-- /section:settings.breadcrumbs -->

								<!-- #section:settings.rtl -->
								<div class="ace-settings-item">
									<input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-rtl" />
									<label class="lbl" for="ace-settings-rtl"> Direita para Esquerda</label>
								</div>

								<!-- /section:settings.rtl -->

								<!-- #section:settings.container -->
								<div class="ace-settings-item">
									<input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-add-container" />
									<label class="lbl" for="ace-settings-add-container">
										Dentro do
										<b>.container</b>
									</label>
								</div>

								<!-- /section:settings.container -->
							</div><!-- /.pull-left -->

							<div class="pull-left width-50">
								<!-- #section:basics/sidebar.options -->
								<div class="ace-settings-item">
									<input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-hover" />
									<label class="lbl" for="ace-settings-hover"> Submenu ao passar por cima</label>
								</div>

								<div class="ace-settings-item">
									<input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-compact" />
									<label class="lbl" for="ace-settings-compact"> Barra Lateral compacta</label>
								</div>

								<div class="ace-settings-item">
									<input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-highlight" />
									<label class="lbl" for="ace-settings-highlight"> Seta alternativa</label>
								</div>

								<!-- /section:basics/sidebar.options -->
							</div><!-- /.pull-left -->
						</div><!-- /.ace-settings-box -->
					</div><!-- /.ace-settings-container -->

					<!-- /section:settings.box -->
					<!-- InstanceBeginEditable name="Page Content" -->
					<link type="text/css" href="../js/css/redmond/jquery-ui-1.8.20.custom.css" rel="Stylesheet" />
					

						<div class="row">
							<div class="col-sm-8">
								<div class="widget-box transparent">
									<div class="widget-header widget-header-flat">
										<h4 class="widget-title lighter">
											<i class="ace-icon fa fa-glass orange"></i>
											Busca por data
										</h4>
										<div class="widget-toolbar">
											<a href="#" data-action="collapse">
												<i class="ace-icon fa fa-chevron-up"></i>
											</a>
										</div>
									</div>
									<div class="widget-body">
										<div class="widget-main no-padding">

											<div class="form-group">
												<label class="col-sm-3 control-label no-padding-right" for="form-field-1"> Data para Procurar </label>
												<div class="col-sm-9">
													<form action="filtradata.php" method="get" class="form-inline">
														<input type="text" id="dt_busca" name="dt_busca" class="col-xs-10 col-sm-5" size="10" maxlength="12" readonly />
														<button type="button" class="btn btn-info btn-sm" onClick="this.form.submit()">
															<i class="ace-icon fa fa-key bigger-110"></i>Procurar Espaços Disponíveis nesta Data
														</button>

													</form>
												</div>
											</div>



										</div>
									</div>

								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-sm-12">
								<div class="widget-box transparent">
									<div class="widget-header widget-header-flat">
										<h4 class="widget-title lighter">
											<i class="ace-icon fa fa-glass orange"></i>
											Itens de Reserva
										</h4>
										<div class="widget-toolbar">
											<a href="#" data-action="collapse">
												<i class="ace-icon fa fa-chevron-up"></i>
											</a>
										</div>
									</div>
									<div class="widget-body">
										<div class="widget-main no-padding">
											<table class="table table-bordered table-striped">
												<thead class="thin-border-bottom">
													<tr>
														<th class="hidden-480">
															<i class="ace-icon fa fa-caret-right blue"></i>Valor
														</th>
														<th>
															<i class="ace-icon fa fa-caret-right blue"></i>Item
														</th>
														<th>
															<i class="ace-icon fa fa-caret-right blue"></i>Lotacao Max
														</th>
														<th class="hidden-480 text-center">
															<i class="ace-icon fa fa-caret-right blue"></i><a title="Tempo Minimo de antecedencia para cancelar em dias." data-rel="tooltip" href="#">Min Dias Canc.</a>
														</th>
														<th class="hidden-480 text-center">
															<i class="ace-icon fa fa-caret-right blue"></i><a title="Maximo de Reservas P/ Dia" data-rel="tooltip" href="#">Max. Res. p/Dia.</a>
														</th>
														<th class="hidden-480 text-center">
															<i class="ace-icon fa fa-caret-right blue"></i><a title="Nao permite outro item exclusivo no mesmo dia." data-rel="tooltip" href="#">Exclusivo</a>
														</th>
														<th>
															<i class="ace-icon fa fa-caret-right blue"></i>Ações
														</th>
														<th>
															<i class="ace-icon fa fa-caret-right blue"></i>Regras
														</th>
													</tr>
												</thead>

												<tbody>
													<div class="row">
														<tr>
															<td class="hidden-480">R$ 0.00</td>
															<td>
																<b class="green">ACADEMIA SPINING</b>
															</td>
															<td>
																<span class="badge badge-warning">100</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-warning">0</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-info">1</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-purple">N</span>
															</td>
															<td>

																<a href="calendario.php?id_item_reserva=187"><button class="btn btn-primary">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reservar

																	</button>
																</a>
																<a href="reserva_rapida.php?id_item_reserva=187"><button class="btn btn-purple">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reserva Rapida
																		<i class="ace-icon fa fa-flash align-top bigger-125"></i>

																	</button>
																</a>
																<a href="mostra_fotos.php?id_item_reserva=187"><button class="btn btn-danger">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver Fotos do Local

																	</button>
																</a>
																<a href="mostra_plantas.php?id_item_reserva=187"><button class="btn btn-warning">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver planta

																	</button>
																</a>

															</td>


															<td>

																<button data-id="187" class="btn btn-success regrass" data-toggle="modal" data-target="#regras-modal">

																	<i class="ace-icon fa fa-book align-top bigger-125"></i>

																	Ver Regras

																</button>

																<div class="modal fade" id="regras-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
																	<div class="modal-dialog" role="document">
																		<div class="modal-content">
																			<div class="modal-header">
																				<h2 class="modal-title" id="exampleModalLabel">Carregando...</h2>
																				<button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
																					<span aria-hidden="true">&times;</span>
																				</button>
																			</div>
																			<div class="modal-body">

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Permite que sejam aceitas multiplas reservas de um mesmo espaço.">
																					<h4>Aceita Multiplas Reservas: <span id="aceita-multiplas-reservas" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Bloqueia condominos que estejam inadimplentes.">
																					<h4>Bloqueia Inadimplentes: <span id="bloqueia-inadimplentes" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de visitantes permitida.">
																					<h4>Lotação Máxima: <span id="lotacao-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade máxima de PERIODOS DIFERENTES voce pode reservar.">
																					<h4>Quantidade Máxima de Períodos: <span id="quantidade-max-periodos" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de vezes que voce pode reservar UM MESMO período.">
																					<h4>Quantidade Maxima de Marcações: <span id="quantidade-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Sem uso no momento.">
																					<h4>Quota Máxima: <span id="quota-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Limite de dias de antecedencia para marcaçao em dias. Ex: Se 15 dias, para marcar em 30 de setembro, so a partir de 15 de setembro.">
																					<h4>Tempo Máximo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Periodo mínimo de dias aceitaveis antes de permitir o cancelamento. Ex: Se forem 7 dias, ao tentar cancelar 6 dias antes nao será possível.">
																					<h4>Tempo Mínimo Cancelamento (dias): <span id="tempo-dias-cancelamento" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo de dias para marcar. Ex: Se 10, só seria possivel marcar uma reserva para o dia 30/09 até o dia 20/09. Se for dia 21, nao conseguiria mais.">
																					<h4>Tempo Minimo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-min-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo em dias para uma nova marcação. Ex: Se for 3, apenas depois de 3 dias após a data da reserva é que será possivel realizar nova marcaçao.">
																					<h4>Tempo Minimo para Nova marcação (dias): <span id="tempo-dias-nova-marcacao" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																			</div>
																			<div class="modal-footer">
																				<button type="button" class="btn btn-primary" data-dismiss="modal">Entendi</button>
																			</div>
																		</div>
																	</div>
																</div>

															</td>
														</tr>

													
														<tr>
															<td class="hidden-480">R$ 75.90</td>
															<td>
																<b class="green">CHURRASQUEIRA 2</b>
															</td>
															<td>
																<span class="badge badge-warning">20</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-warning">0</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-info">1</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-purple">S</span>
															</td>
															<td>

																<a href="calendario.php?id_item_reserva=180"><button class="btn btn-primary">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reservar

																	</button>
																</a>
																<a href="reserva_rapida.php?id_item_reserva=180"><button class="btn btn-purple">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reserva Rapida
																		<i class="ace-icon fa fa-flash align-top bigger-125"></i>

																	</button>
																</a>
																<a href="mostra_fotos.php?id_item_reserva=180"><button class="btn btn-danger">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver Fotos do Local

																	</button>
																</a>
																<a href="mostra_plantas.php?id_item_reserva=180"><button class="btn btn-warning">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver planta

																	</button>
																</a>

															</td>


															<td>

																<button data-id="180" class="btn btn-success regrass" data-toggle="modal" data-target="#regras-modal">

																	<i class="ace-icon fa fa-book align-top bigger-125"></i>

																	Ver Regras

																</button>

																<div class="modal fade" id="regras-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
																	<div class="modal-dialog" role="document">
																		<div class="modal-content">
																			<div class="modal-header">
																				<h2 class="modal-title" id="exampleModalLabel">Carregando...</h2>
																				<button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
																					<span aria-hidden="true">&times;</span>
																				</button>
																			</div>
																			<div class="modal-body">

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Permite que sejam aceitas multiplas reservas de um mesmo espaço.">
																					<h4>Aceita Multiplas Reservas: <span id="aceita-multiplas-reservas" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Bloqueia condominos que estejam inadimplentes.">
																					<h4>Bloqueia Inadimplentes: <span id="bloqueia-inadimplentes" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de visitantes permitida.">
																					<h4>Lotação Máxima: <span id="lotacao-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade máxima de PERIODOS DIFERENTES voce pode reservar.">
																					<h4>Quantidade Máxima de Períodos: <span id="quantidade-max-periodos" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de vezes que voce pode reservar UM MESMO período.">
																					<h4>Quantidade Maxima de Marcações: <span id="quantidade-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Sem uso no momento.">
																					<h4>Quota Máxima: <span id="quota-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Limite de dias de antecedencia para marcaçao em dias. Ex: Se 15 dias, para marcar em 30 de setembro, so a partir de 15 de setembro.">
																					<h4>Tempo Máximo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Periodo mínimo de dias aceitaveis antes de permitir o cancelamento. Ex: Se forem 7 dias, ao tentar cancelar 6 dias antes nao será possível.">
																					<h4>Tempo Mínimo Cancelamento (dias): <span id="tempo-dias-cancelamento" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo de dias para marcar. Ex: Se 10, só seria possivel marcar uma reserva para o dia 30/09 até o dia 20/09. Se for dia 21, nao conseguiria mais.">
																					<h4>Tempo Minimo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-min-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo em dias para uma nova marcação. Ex: Se for 3, apenas depois de 3 dias após a data da reserva é que será possivel realizar nova marcaçao.">
																					<h4>Tempo Minimo para Nova marcação (dias): <span id="tempo-dias-nova-marcacao" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																			</div>
																			<div class="modal-footer">
																				<button type="button" class="btn btn-primary" data-dismiss="modal">Entendi</button>
																			</div>
																		</div>
																	</div>
																</div>

															</td>
														</tr>

													
														<tr>
															<td class="hidden-480">R$ 75.90</td>
															<td>
																<b class="green">CHURRASQUEIRA 4</b>
															</td>
															<td>
																<span class="badge badge-warning">20</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-warning">0</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-info">1</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-purple">S</span>
															</td>
															<td>

																<a href="calendario.php?id_item_reserva=182"><button class="btn btn-primary">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reservar

																	</button>
																</a>
																<a href="reserva_rapida.php?id_item_reserva=182"><button class="btn btn-purple">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reserva Rapida
																		<i class="ace-icon fa fa-flash align-top bigger-125"></i>

																	</button>
																</a>
																<a href="mostra_fotos.php?id_item_reserva=182"><button class="btn btn-danger">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver Fotos do Local

																	</button>
																</a>
																<a href="mostra_plantas.php?id_item_reserva=182"><button class="btn btn-warning">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver planta

																	</button>
																</a>

															</td>


															<td>

																<button data-id="182" class="btn btn-success regrass" data-toggle="modal" data-target="#regras-modal">

																	<i class="ace-icon fa fa-book align-top bigger-125"></i>

																	Ver Regras

																</button>

																<div class="modal fade" id="regras-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
																	<div class="modal-dialog" role="document">
																		<div class="modal-content">
																			<div class="modal-header">
																				<h2 class="modal-title" id="exampleModalLabel">Carregando...</h2>
																				<button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
																					<span aria-hidden="true">&times;</span>
																				</button>
																			</div>
																			<div class="modal-body">

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Permite que sejam aceitas multiplas reservas de um mesmo espaço.">
																					<h4>Aceita Multiplas Reservas: <span id="aceita-multiplas-reservas" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Bloqueia condominos que estejam inadimplentes.">
																					<h4>Bloqueia Inadimplentes: <span id="bloqueia-inadimplentes" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de visitantes permitida.">
																					<h4>Lotação Máxima: <span id="lotacao-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade máxima de PERIODOS DIFERENTES voce pode reservar.">
																					<h4>Quantidade Máxima de Períodos: <span id="quantidade-max-periodos" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de vezes que voce pode reservar UM MESMO período.">
																					<h4>Quantidade Maxima de Marcações: <span id="quantidade-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Sem uso no momento.">
																					<h4>Quota Máxima: <span id="quota-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Limite de dias de antecedencia para marcaçao em dias. Ex: Se 15 dias, para marcar em 30 de setembro, so a partir de 15 de setembro.">
																					<h4>Tempo Máximo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Periodo mínimo de dias aceitaveis antes de permitir o cancelamento. Ex: Se forem 7 dias, ao tentar cancelar 6 dias antes nao será possível.">
																					<h4>Tempo Mínimo Cancelamento (dias): <span id="tempo-dias-cancelamento" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo de dias para marcar. Ex: Se 10, só seria possivel marcar uma reserva para o dia 30/09 até o dia 20/09. Se for dia 21, nao conseguiria mais.">
																					<h4>Tempo Minimo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-min-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo em dias para uma nova marcação. Ex: Se for 3, apenas depois de 3 dias após a data da reserva é que será possivel realizar nova marcaçao.">
																					<h4>Tempo Minimo para Nova marcação (dias): <span id="tempo-dias-nova-marcacao" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																			</div>
																			<div class="modal-footer">
																				<button type="button" class="btn btn-primary" data-dismiss="modal">Entendi</button>
																			</div>
																		</div>
																	</div>
																</div>

															</td>
														</tr>

													
														<tr>
															<td class="hidden-480">R$ 75.90</td>
															<td>
																<b class="green">CHURRASQUEIRA 5</b>
															</td>
															<td>
																<span class="badge badge-warning">20</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-warning">0</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-info">1</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-purple">S</span>
															</td>
															<td>

																<a href="calendario.php?id_item_reserva=183"><button class="btn btn-primary">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reservar

																	</button>
																</a>
																<a href="reserva_rapida.php?id_item_reserva=183"><button class="btn btn-purple">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reserva Rapida
																		<i class="ace-icon fa fa-flash align-top bigger-125"></i>

																	</button>
																</a>
																<a href="mostra_fotos.php?id_item_reserva=183"><button class="btn btn-danger">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver Fotos do Local

																	</button>
																</a>
																<a href="mostra_plantas.php?id_item_reserva=183"><button class="btn btn-warning">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver planta

																	</button>
																</a>

															</td>


															<td>

																<button data-id="183" class="btn btn-success regrass" data-toggle="modal" data-target="#regras-modal">

																	<i class="ace-icon fa fa-book align-top bigger-125"></i>

																	Ver Regras

																</button>

																<div class="modal fade" id="regras-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
																	<div class="modal-dialog" role="document">
																		<div class="modal-content">
																			<div class="modal-header">
																				<h2 class="modal-title" id="exampleModalLabel">Carregando...</h2>
																				<button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
																					<span aria-hidden="true">&times;</span>
																				</button>
																			</div>
																			<div class="modal-body">

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Permite que sejam aceitas multiplas reservas de um mesmo espaço.">
																					<h4>Aceita Multiplas Reservas: <span id="aceita-multiplas-reservas" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Bloqueia condominos que estejam inadimplentes.">
																					<h4>Bloqueia Inadimplentes: <span id="bloqueia-inadimplentes" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de visitantes permitida.">
																					<h4>Lotação Máxima: <span id="lotacao-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade máxima de PERIODOS DIFERENTES voce pode reservar.">
																					<h4>Quantidade Máxima de Períodos: <span id="quantidade-max-periodos" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de vezes que voce pode reservar UM MESMO período.">
																					<h4>Quantidade Maxima de Marcações: <span id="quantidade-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Sem uso no momento.">
																					<h4>Quota Máxima: <span id="quota-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Limite de dias de antecedencia para marcaçao em dias. Ex: Se 15 dias, para marcar em 30 de setembro, so a partir de 15 de setembro.">
																					<h4>Tempo Máximo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Periodo mínimo de dias aceitaveis antes de permitir o cancelamento. Ex: Se forem 7 dias, ao tentar cancelar 6 dias antes nao será possível.">
																					<h4>Tempo Mínimo Cancelamento (dias): <span id="tempo-dias-cancelamento" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo de dias para marcar. Ex: Se 10, só seria possivel marcar uma reserva para o dia 30/09 até o dia 20/09. Se for dia 21, nao conseguiria mais.">
																					<h4>Tempo Minimo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-min-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo em dias para uma nova marcação. Ex: Se for 3, apenas depois de 3 dias após a data da reserva é que será possivel realizar nova marcaçao.">
																					<h4>Tempo Minimo para Nova marcação (dias): <span id="tempo-dias-nova-marcacao" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																			</div>
																			<div class="modal-footer">
																				<button type="button" class="btn btn-primary" data-dismiss="modal">Entendi</button>
																			</div>
																		</div>
																	</div>
																</div>

															</td>
														</tr>

													
														<tr>
															<td class="hidden-480">R$ 75.90</td>
															<td>
																<b class="green">CHURRASQUEIRA 6</b>
															</td>
															<td>
																<span class="badge badge-warning">20</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-warning">0</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-info">1</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-purple">S</span>
															</td>
															<td>

																<a href="calendario.php?id_item_reserva=184"><button class="btn btn-primary">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reservar

																	</button>
																</a>
																<a href="reserva_rapida.php?id_item_reserva=184"><button class="btn btn-purple">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reserva Rapida
																		<i class="ace-icon fa fa-flash align-top bigger-125"></i>

																	</button>
																</a>
																<a href="mostra_fotos.php?id_item_reserva=184"><button class="btn btn-danger">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver Fotos do Local

																	</button>
																</a>
																<a href="mostra_plantas.php?id_item_reserva=184"><button class="btn btn-warning">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver planta

																	</button>
																</a>

															</td>


															<td>

																<button data-id="184" class="btn btn-success regrass" data-toggle="modal" data-target="#regras-modal">

																	<i class="ace-icon fa fa-book align-top bigger-125"></i>

																	Ver Regras

																</button>

																<div class="modal fade" id="regras-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
																	<div class="modal-dialog" role="document">
																		<div class="modal-content">
																			<div class="modal-header">
																				<h2 class="modal-title" id="exampleModalLabel">Carregando...</h2>
																				<button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
																					<span aria-hidden="true">&times;</span>
																				</button>
																			</div>
																			<div class="modal-body">

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Permite que sejam aceitas multiplas reservas de um mesmo espaço.">
																					<h4>Aceita Multiplas Reservas: <span id="aceita-multiplas-reservas" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Bloqueia condominos que estejam inadimplentes.">
																					<h4>Bloqueia Inadimplentes: <span id="bloqueia-inadimplentes" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de visitantes permitida.">
																					<h4>Lotação Máxima: <span id="lotacao-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade máxima de PERIODOS DIFERENTES voce pode reservar.">
																					<h4>Quantidade Máxima de Períodos: <span id="quantidade-max-periodos" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de vezes que voce pode reservar UM MESMO período.">
																					<h4>Quantidade Maxima de Marcações: <span id="quantidade-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Sem uso no momento.">
																					<h4>Quota Máxima: <span id="quota-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Limite de dias de antecedencia para marcaçao em dias. Ex: Se 15 dias, para marcar em 30 de setembro, so a partir de 15 de setembro.">
																					<h4>Tempo Máximo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Periodo mínimo de dias aceitaveis antes de permitir o cancelamento. Ex: Se forem 7 dias, ao tentar cancelar 6 dias antes nao será possível.">
																					<h4>Tempo Mínimo Cancelamento (dias): <span id="tempo-dias-cancelamento" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo de dias para marcar. Ex: Se 10, só seria possivel marcar uma reserva para o dia 30/09 até o dia 20/09. Se for dia 21, nao conseguiria mais.">
																					<h4>Tempo Minimo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-min-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo em dias para uma nova marcação. Ex: Se for 3, apenas depois de 3 dias após a data da reserva é que será possivel realizar nova marcaçao.">
																					<h4>Tempo Minimo para Nova marcação (dias): <span id="tempo-dias-nova-marcacao" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																			</div>
																			<div class="modal-footer">
																				<button type="button" class="btn btn-primary" data-dismiss="modal">Entendi</button>
																			</div>
																		</div>
																	</div>
																</div>

															</td>
														</tr>

													
														<tr>
															<td class="hidden-480">R$ 75.90</td>
															<td>
																<b class="green">ESPAÇO GOURMET - TORRE 01</b>
															</td>
															<td>
																<span class="badge badge-warning">25</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-warning">2</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-info">1</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-purple">S</span>
															</td>
															<td>

																<a href="calendario.php?id_item_reserva=185"><button class="btn btn-primary">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reservar

																	</button>
																</a>
																<a href="reserva_rapida.php?id_item_reserva=185"><button class="btn btn-purple">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reserva Rapida
																		<i class="ace-icon fa fa-flash align-top bigger-125"></i>

																	</button>
																</a>
																<a href="mostra_fotos.php?id_item_reserva=185"><button class="btn btn-danger">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver Fotos do Local

																	</button>
																</a>
																<a href="mostra_plantas.php?id_item_reserva=185"><button class="btn btn-warning">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver planta

																	</button>
																</a>

															</td>


															<td>

																<button data-id="185" class="btn btn-success regrass" data-toggle="modal" data-target="#regras-modal">

																	<i class="ace-icon fa fa-book align-top bigger-125"></i>

																	Ver Regras

																</button>

																<div class="modal fade" id="regras-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
																	<div class="modal-dialog" role="document">
																		<div class="modal-content">
																			<div class="modal-header">
																				<h2 class="modal-title" id="exampleModalLabel">Carregando...</h2>
																				<button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
																					<span aria-hidden="true">&times;</span>
																				</button>
																			</div>
																			<div class="modal-body">

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Permite que sejam aceitas multiplas reservas de um mesmo espaço.">
																					<h4>Aceita Multiplas Reservas: <span id="aceita-multiplas-reservas" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Bloqueia condominos que estejam inadimplentes.">
																					<h4>Bloqueia Inadimplentes: <span id="bloqueia-inadimplentes" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de visitantes permitida.">
																					<h4>Lotação Máxima: <span id="lotacao-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade máxima de PERIODOS DIFERENTES voce pode reservar.">
																					<h4>Quantidade Máxima de Períodos: <span id="quantidade-max-periodos" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de vezes que voce pode reservar UM MESMO período.">
																					<h4>Quantidade Maxima de Marcações: <span id="quantidade-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Sem uso no momento.">
																					<h4>Quota Máxima: <span id="quota-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Limite de dias de antecedencia para marcaçao em dias. Ex: Se 15 dias, para marcar em 30 de setembro, so a partir de 15 de setembro.">
																					<h4>Tempo Máximo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Periodo mínimo de dias aceitaveis antes de permitir o cancelamento. Ex: Se forem 7 dias, ao tentar cancelar 6 dias antes nao será possível.">
																					<h4>Tempo Mínimo Cancelamento (dias): <span id="tempo-dias-cancelamento" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo de dias para marcar. Ex: Se 10, só seria possivel marcar uma reserva para o dia 30/09 até o dia 20/09. Se for dia 21, nao conseguiria mais.">
																					<h4>Tempo Minimo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-min-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo em dias para uma nova marcação. Ex: Se for 3, apenas depois de 3 dias após a data da reserva é que será possivel realizar nova marcaçao.">
																					<h4>Tempo Minimo para Nova marcação (dias): <span id="tempo-dias-nova-marcacao" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																			</div>
																			<div class="modal-footer">
																				<button type="button" class="btn btn-primary" data-dismiss="modal">Entendi</button>
																			</div>
																		</div>
																	</div>
																</div>

															</td>
														</tr>

													<div class="row">
														<tr>
															<td class="hidden-480">R$ 75.90</td>
															<td>
																<b class="green">ESPAÇO STADIUM</b>
															</td>
															<td>
																<span class="badge badge-warning">30</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-warning">1</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-info">1</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-purple">N</span>
															</td>
															<td>

																<a href="calendario.php?id_item_reserva=194"><button class="btn btn-primary">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reservar

																	</button>
																</a>
																<a href="reserva_rapida.php?id_item_reserva=194"><button class="btn btn-purple">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reserva Rapida
																		<i class="ace-icon fa fa-flash align-top bigger-125"></i>

																	</button>
																</a>
																<a href="mostra_fotos.php?id_item_reserva=194"><button class="btn btn-danger">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver Fotos do Local

																	</button>
																</a>
																<a href="mostra_plantas.php?id_item_reserva=194"><button class="btn btn-warning">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver planta

																	</button>
																</a>

															</td>


															<td>

																<button data-id="194" class="btn btn-success regrass" data-toggle="modal" data-target="#regras-modal">

																	<i class="ace-icon fa fa-book align-top bigger-125"></i>

																	Ver Regras

																</button>

																<div class="modal fade" id="regras-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
																	<div class="modal-dialog" role="document">
																		<div class="modal-content">
																			<div class="modal-header">
																				<h2 class="modal-title" id="exampleModalLabel">Carregando...</h2>
																				<button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
																					<span aria-hidden="true">&times;</span>
																				</button>
																			</div>
																			<div class="modal-body">

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Permite que sejam aceitas multiplas reservas de um mesmo espaço.">
																					<h4>Aceita Multiplas Reservas: <span id="aceita-multiplas-reservas" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Bloqueia condominos que estejam inadimplentes.">
																					<h4>Bloqueia Inadimplentes: <span id="bloqueia-inadimplentes" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de visitantes permitida.">
																					<h4>Lotação Máxima: <span id="lotacao-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade máxima de PERIODOS DIFERENTES voce pode reservar.">
																					<h4>Quantidade Máxima de Períodos: <span id="quantidade-max-periodos" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de vezes que voce pode reservar UM MESMO período.">
																					<h4>Quantidade Maxima de Marcações: <span id="quantidade-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Sem uso no momento.">
																					<h4>Quota Máxima: <span id="quota-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Limite de dias de antecedencia para marcaçao em dias. Ex: Se 15 dias, para marcar em 30 de setembro, so a partir de 15 de setembro.">
																					<h4>Tempo Máximo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Periodo mínimo de dias aceitaveis antes de permitir o cancelamento. Ex: Se forem 7 dias, ao tentar cancelar 6 dias antes nao será possível.">
																					<h4>Tempo Mínimo Cancelamento (dias): <span id="tempo-dias-cancelamento" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo de dias para marcar. Ex: Se 10, só seria possivel marcar uma reserva para o dia 30/09 até o dia 20/09. Se for dia 21, nao conseguiria mais.">
																					<h4>Tempo Minimo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-min-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo em dias para uma nova marcação. Ex: Se for 3, apenas depois de 3 dias após a data da reserva é que será possivel realizar nova marcaçao.">
																					<h4>Tempo Minimo para Nova marcação (dias): <span id="tempo-dias-nova-marcacao" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																			</div>
																			<div class="modal-footer">
																				<button type="button" class="btn btn-primary" data-dismiss="modal">Entendi</button>
																			</div>
																		</div>
																	</div>
																</div>

															</td>
														</tr>

													
														<tr>
															<td class="hidden-480">R$ 75.90</td>
															<td>
																<b class="green">Espaço Gourmet - Torre 09</b>
															</td>
															<td>
																<span class="badge badge-warning">25</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-warning">2</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-info">1</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-purple">S</span>
															</td>
															<td>

																<a href="calendario.php?id_item_reserva=197"><button class="btn btn-primary">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reservar

																	</button>
																</a>
																<a href="reserva_rapida.php?id_item_reserva=197"><button class="btn btn-purple">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reserva Rapida
																		<i class="ace-icon fa fa-flash align-top bigger-125"></i>

																	</button>
																</a>
																<a href="mostra_fotos.php?id_item_reserva=197"><button class="btn btn-danger">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver Fotos do Local

																	</button>
																</a>
																<a href="mostra_plantas.php?id_item_reserva=197"><button class="btn btn-warning">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver planta

																	</button>
																</a>

															</td>


															<td>

																<button data-id="197" class="btn btn-success regrass" data-toggle="modal" data-target="#regras-modal">

																	<i class="ace-icon fa fa-book align-top bigger-125"></i>

																	Ver Regras

																</button>

																<div class="modal fade" id="regras-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
																	<div class="modal-dialog" role="document">
																		<div class="modal-content">
																			<div class="modal-header">
																				<h2 class="modal-title" id="exampleModalLabel">Carregando...</h2>
																				<button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
																					<span aria-hidden="true">&times;</span>
																				</button>
																			</div>
																			<div class="modal-body">

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Permite que sejam aceitas multiplas reservas de um mesmo espaço.">
																					<h4>Aceita Multiplas Reservas: <span id="aceita-multiplas-reservas" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Bloqueia condominos que estejam inadimplentes.">
																					<h4>Bloqueia Inadimplentes: <span id="bloqueia-inadimplentes" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de visitantes permitida.">
																					<h4>Lotação Máxima: <span id="lotacao-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade máxima de PERIODOS DIFERENTES voce pode reservar.">
																					<h4>Quantidade Máxima de Períodos: <span id="quantidade-max-periodos" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de vezes que voce pode reservar UM MESMO período.">
																					<h4>Quantidade Maxima de Marcações: <span id="quantidade-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Sem uso no momento.">
																					<h4>Quota Máxima: <span id="quota-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Limite de dias de antecedencia para marcaçao em dias. Ex: Se 15 dias, para marcar em 30 de setembro, so a partir de 15 de setembro.">
																					<h4>Tempo Máximo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Periodo mínimo de dias aceitaveis antes de permitir o cancelamento. Ex: Se forem 7 dias, ao tentar cancelar 6 dias antes nao será possível.">
																					<h4>Tempo Mínimo Cancelamento (dias): <span id="tempo-dias-cancelamento" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo de dias para marcar. Ex: Se 10, só seria possivel marcar uma reserva para o dia 30/09 até o dia 20/09. Se for dia 21, nao conseguiria mais.">
																					<h4>Tempo Minimo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-min-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo em dias para uma nova marcação. Ex: Se for 3, apenas depois de 3 dias após a data da reserva é que será possivel realizar nova marcaçao.">
																					<h4>Tempo Minimo para Nova marcação (dias): <span id="tempo-dias-nova-marcacao" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																			</div>
																			<div class="modal-footer">
																				<button type="button" class="btn btn-primary" data-dismiss="modal">Entendi</button>
																			</div>
																		</div>
																	</div>
																</div>

															</td>
														</tr>

													
														<tr>
															<td class="hidden-480">R$ 0.00</td>
															<td>
																<b class="green">Hidroginástica </b>
															</td>
															<td>
																<span class="badge badge-warning">10</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-warning">1</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-info">2</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-purple">N</span>
															</td>
															<td>

																<a href="calendario.php?id_item_reserva=191"><button class="btn btn-primary">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reservar

																	</button>
																</a>
																<a href="reserva_rapida.php?id_item_reserva=191"><button class="btn btn-purple">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reserva Rapida
																		<i class="ace-icon fa fa-flash align-top bigger-125"></i>

																	</button>
																</a>
																<a href="mostra_fotos.php?id_item_reserva=191"><button class="btn btn-danger">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver Fotos do Local

																	</button>
																</a>
																<a href="mostra_plantas.php?id_item_reserva=191"><button class="btn btn-warning">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver planta

																	</button>
																</a>

															</td>


															<td>

																<button data-id="191" class="btn btn-success regrass" data-toggle="modal" data-target="#regras-modal">

																	<i class="ace-icon fa fa-book align-top bigger-125"></i>

																	Ver Regras

																</button>

																<div class="modal fade" id="regras-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
																	<div class="modal-dialog" role="document">
																		<div class="modal-content">
																			<div class="modal-header">
																				<h2 class="modal-title" id="exampleModalLabel">Carregando...</h2>
																				<button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
																					<span aria-hidden="true">&times;</span>
																				</button>
																			</div>
																			<div class="modal-body">

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Permite que sejam aceitas multiplas reservas de um mesmo espaço.">
																					<h4>Aceita Multiplas Reservas: <span id="aceita-multiplas-reservas" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Bloqueia condominos que estejam inadimplentes.">
																					<h4>Bloqueia Inadimplentes: <span id="bloqueia-inadimplentes" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de visitantes permitida.">
																					<h4>Lotação Máxima: <span id="lotacao-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade máxima de PERIODOS DIFERENTES voce pode reservar.">
																					<h4>Quantidade Máxima de Períodos: <span id="quantidade-max-periodos" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de vezes que voce pode reservar UM MESMO período.">
																					<h4>Quantidade Maxima de Marcações: <span id="quantidade-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Sem uso no momento.">
																					<h4>Quota Máxima: <span id="quota-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Limite de dias de antecedencia para marcaçao em dias. Ex: Se 15 dias, para marcar em 30 de setembro, so a partir de 15 de setembro.">
																					<h4>Tempo Máximo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Periodo mínimo de dias aceitaveis antes de permitir o cancelamento. Ex: Se forem 7 dias, ao tentar cancelar 6 dias antes nao será possível.">
																					<h4>Tempo Mínimo Cancelamento (dias): <span id="tempo-dias-cancelamento" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo de dias para marcar. Ex: Se 10, só seria possivel marcar uma reserva para o dia 30/09 até o dia 20/09. Se for dia 21, nao conseguiria mais.">
																					<h4>Tempo Minimo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-min-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo em dias para uma nova marcação. Ex: Se for 3, apenas depois de 3 dias após a data da reserva é que será possivel realizar nova marcaçao.">
																					<h4>Tempo Minimo para Nova marcação (dias): <span id="tempo-dias-nova-marcacao" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																			</div>
																			<div class="modal-footer">
																				<button type="button" class="btn btn-primary" data-dismiss="modal">Entendi</button>
																			</div>
																		</div>
																	</div>
																</div>

															</td>
														</tr>

													
														<tr>
															<td class="hidden-480">R$ 0.00</td>
															<td>
																<b class="green">MUDANÇA Bloco 3</b>
															</td>
															<td>
																<span class="badge badge-warning">100</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-warning">1</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-info">2</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-purple">S</span>
															</td>
															<td>

																<a href="calendario.php?id_item_reserva=186"><button class="btn btn-primary">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reservar

																	</button>
																</a>
																<a href="reserva_rapida.php?id_item_reserva=186"><button class="btn btn-purple">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reserva Rapida
																		<i class="ace-icon fa fa-flash align-top bigger-125"></i>

																	</button>
																</a>
																<a href="mostra_fotos.php?id_item_reserva=186"><button class="btn btn-danger">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver Fotos do Local

																	</button>
																</a>
																<a href="mostra_plantas.php?id_item_reserva=186"><button class="btn btn-warning">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver planta

																	</button>
																</a>

															</td>


															<td>

																<button data-id="186" class="btn btn-success regrass" data-toggle="modal" data-target="#regras-modal">

																	<i class="ace-icon fa fa-book align-top bigger-125"></i>

																	Ver Regras

																</button>

																<div class="modal fade" id="regras-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
																	<div class="modal-dialog" role="document">
																		<div class="modal-content">
																			<div class="modal-header">
																				<h2 class="modal-title" id="exampleModalLabel">Carregando...</h2>
																				<button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
																					<span aria-hidden="true">&times;</span>
																				</button>
																			</div>
																			<div class="modal-body">

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Permite que sejam aceitas multiplas reservas de um mesmo espaço.">
																					<h4>Aceita Multiplas Reservas: <span id="aceita-multiplas-reservas" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Bloqueia condominos que estejam inadimplentes.">
																					<h4>Bloqueia Inadimplentes: <span id="bloqueia-inadimplentes" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de visitantes permitida.">
																					<h4>Lotação Máxima: <span id="lotacao-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade máxima de PERIODOS DIFERENTES voce pode reservar.">
																					<h4>Quantidade Máxima de Períodos: <span id="quantidade-max-periodos" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de vezes que voce pode reservar UM MESMO período.">
																					<h4>Quantidade Maxima de Marcações: <span id="quantidade-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Sem uso no momento.">
																					<h4>Quota Máxima: <span id="quota-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Limite de dias de antecedencia para marcaçao em dias. Ex: Se 15 dias, para marcar em 30 de setembro, so a partir de 15 de setembro.">
																					<h4>Tempo Máximo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Periodo mínimo de dias aceitaveis antes de permitir o cancelamento. Ex: Se forem 7 dias, ao tentar cancelar 6 dias antes nao será possível.">
																					<h4>Tempo Mínimo Cancelamento (dias): <span id="tempo-dias-cancelamento" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo de dias para marcar. Ex: Se 10, só seria possivel marcar uma reserva para o dia 30/09 até o dia 20/09. Se for dia 21, nao conseguiria mais.">
																					<h4>Tempo Minimo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-min-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo em dias para uma nova marcação. Ex: Se for 3, apenas depois de 3 dias após a data da reserva é que será possivel realizar nova marcaçao.">
																					<h4>Tempo Minimo para Nova marcação (dias): <span id="tempo-dias-nova-marcacao" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																			</div>
																			<div class="modal-footer">
																				<button type="button" class="btn btn-primary" data-dismiss="modal">Entendi</button>
																			</div>
																		</div>
																	</div>
																</div>

															</td>
														</tr>

													
														<tr>
															<td class="hidden-480">R$ 0.00</td>
															<td>
																<b class="green">Natação Infantil</b>
															</td>
															<td>
																<span class="badge badge-warning">10</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-warning">1</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-info">2</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-purple">N</span>
															</td>
															<td>

																<a href="calendario.php?id_item_reserva=190"><button class="btn btn-primary">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reservar

																	</button>
																</a>
																<a href="reserva_rapida.php?id_item_reserva=190"><button class="btn btn-purple">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reserva Rapida
																		<i class="ace-icon fa fa-flash align-top bigger-125"></i>

																	</button>
																</a>
																<a href="mostra_fotos.php?id_item_reserva=190"><button class="btn btn-danger">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver Fotos do Local

																	</button>
																</a>
																<a href="mostra_plantas.php?id_item_reserva=190"><button class="btn btn-warning">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver planta

																	</button>
																</a>

															</td>


															<td>

																<button data-id="190" class="btn btn-success regrass" data-toggle="modal" data-target="#regras-modal">

																	<i class="ace-icon fa fa-book align-top bigger-125"></i>

																	Ver Regras

																</button>

																<div class="modal fade" id="regras-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
																	<div class="modal-dialog" role="document">
																		<div class="modal-content">
																			<div class="modal-header">
																				<h2 class="modal-title" id="exampleModalLabel">Carregando...</h2>
																				<button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
																					<span aria-hidden="true">&times;</span>
																				</button>
																			</div>
																			<div class="modal-body">

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Permite que sejam aceitas multiplas reservas de um mesmo espaço.">
																					<h4>Aceita Multiplas Reservas: <span id="aceita-multiplas-reservas" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Bloqueia condominos que estejam inadimplentes.">
																					<h4>Bloqueia Inadimplentes: <span id="bloqueia-inadimplentes" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de visitantes permitida.">
																					<h4>Lotação Máxima: <span id="lotacao-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade máxima de PERIODOS DIFERENTES voce pode reservar.">
																					<h4>Quantidade Máxima de Períodos: <span id="quantidade-max-periodos" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de vezes que voce pode reservar UM MESMO período.">
																					<h4>Quantidade Maxima de Marcações: <span id="quantidade-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Sem uso no momento.">
																					<h4>Quota Máxima: <span id="quota-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Limite de dias de antecedencia para marcaçao em dias. Ex: Se 15 dias, para marcar em 30 de setembro, so a partir de 15 de setembro.">
																					<h4>Tempo Máximo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Periodo mínimo de dias aceitaveis antes de permitir o cancelamento. Ex: Se forem 7 dias, ao tentar cancelar 6 dias antes nao será possível.">
																					<h4>Tempo Mínimo Cancelamento (dias): <span id="tempo-dias-cancelamento" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo de dias para marcar. Ex: Se 10, só seria possivel marcar uma reserva para o dia 30/09 até o dia 20/09. Se for dia 21, nao conseguiria mais.">
																					<h4>Tempo Minimo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-min-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo em dias para uma nova marcação. Ex: Se for 3, apenas depois de 3 dias após a data da reserva é que será possivel realizar nova marcaçao.">
																					<h4>Tempo Minimo para Nova marcação (dias): <span id="tempo-dias-nova-marcacao" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																			</div>
																			<div class="modal-footer">
																				<button type="button" class="btn btn-primary" data-dismiss="modal">Entendi</button>
																			</div>
																		</div>
																	</div>
																</div>

															</td>
														</tr>

													
														<tr>
															<td class="hidden-480">R$ 197.34</td>
															<td>
																<b class="green">SALÃO DE FESTAS - Bloco 1</b>
															</td>
															<td>
																<span class="badge badge-warning">50</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-warning">2</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-info">1</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-purple">S</span>
															</td>
															<td>

																<a href="calendario.php?id_item_reserva=177"><button class="btn btn-primary">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reservar

																	</button>
																</a>
																<a href="reserva_rapida.php?id_item_reserva=177"><button class="btn btn-purple">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reserva Rapida
																		<i class="ace-icon fa fa-flash align-top bigger-125"></i>

																	</button>
																</a>
																<a href="mostra_fotos.php?id_item_reserva=177"><button class="btn btn-danger">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver Fotos do Local

																	</button>
																</a>
																<a href="mostra_plantas.php?id_item_reserva=177"><button class="btn btn-warning">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver planta

																	</button>
																</a>

															</td>


															<td>

																<button data-id="177" class="btn btn-success regrass" data-toggle="modal" data-target="#regras-modal">

																	<i class="ace-icon fa fa-book align-top bigger-125"></i>

																	Ver Regras

																</button>

																<div class="modal fade" id="regras-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
																	<div class="modal-dialog" role="document">
																		<div class="modal-content">
																			<div class="modal-header">
																				<h2 class="modal-title" id="exampleModalLabel">Carregando...</h2>
																				<button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
																					<span aria-hidden="true">&times;</span>
																				</button>
																			</div>
																			<div class="modal-body">

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Permite que sejam aceitas multiplas reservas de um mesmo espaço.">
																					<h4>Aceita Multiplas Reservas: <span id="aceita-multiplas-reservas" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Bloqueia condominos que estejam inadimplentes.">
																					<h4>Bloqueia Inadimplentes: <span id="bloqueia-inadimplentes" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de visitantes permitida.">
																					<h4>Lotação Máxima: <span id="lotacao-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade máxima de PERIODOS DIFERENTES voce pode reservar.">
																					<h4>Quantidade Máxima de Períodos: <span id="quantidade-max-periodos" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de vezes que voce pode reservar UM MESMO período.">
																					<h4>Quantidade Maxima de Marcações: <span id="quantidade-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Sem uso no momento.">
																					<h4>Quota Máxima: <span id="quota-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Limite de dias de antecedencia para marcaçao em dias. Ex: Se 15 dias, para marcar em 30 de setembro, so a partir de 15 de setembro.">
																					<h4>Tempo Máximo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Periodo mínimo de dias aceitaveis antes de permitir o cancelamento. Ex: Se forem 7 dias, ao tentar cancelar 6 dias antes nao será possível.">
																					<h4>Tempo Mínimo Cancelamento (dias): <span id="tempo-dias-cancelamento" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo de dias para marcar. Ex: Se 10, só seria possivel marcar uma reserva para o dia 30/09 até o dia 20/09. Se for dia 21, nao conseguiria mais.">
																					<h4>Tempo Minimo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-min-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo em dias para uma nova marcação. Ex: Se for 3, apenas depois de 3 dias após a data da reserva é que será possivel realizar nova marcaçao.">
																					<h4>Tempo Minimo para Nova marcação (dias): <span id="tempo-dias-nova-marcacao" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																			</div>
																			<div class="modal-footer">
																				<button type="button" class="btn btn-primary" data-dismiss="modal">Entendi</button>
																			</div>
																		</div>
																	</div>
																</div>

															</td>
														</tr>

													<div class="row">
														<tr>
															<td class="hidden-480">R$ 197.34</td>
															<td>
																<b class="green">SALÃO DE FESTAS - Bloco 2</b>
															</td>
															<td>
																<span class="badge badge-warning">35</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-warning">2</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-info">1</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-purple">S</span>
															</td>
															<td>

																<a href="calendario.php?id_item_reserva=178"><button class="btn btn-primary">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reservar

																	</button>
																</a>
																<a href="reserva_rapida.php?id_item_reserva=178"><button class="btn btn-purple">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reserva Rapida
																		<i class="ace-icon fa fa-flash align-top bigger-125"></i>

																	</button>
																</a>
																<a href="mostra_fotos.php?id_item_reserva=178"><button class="btn btn-danger">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver Fotos do Local

																	</button>
																</a>
																<a href="mostra_plantas.php?id_item_reserva=178"><button class="btn btn-warning">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver planta

																	</button>
																</a>

															</td>


															<td>

																<button data-id="178" class="btn btn-success regrass" data-toggle="modal" data-target="#regras-modal">

																	<i class="ace-icon fa fa-book align-top bigger-125"></i>

																	Ver Regras

																</button>

																<div class="modal fade" id="regras-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
																	<div class="modal-dialog" role="document">
																		<div class="modal-content">
																			<div class="modal-header">
																				<h2 class="modal-title" id="exampleModalLabel">Carregando...</h2>
																				<button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
																					<span aria-hidden="true">&times;</span>
																				</button>
																			</div>
																			<div class="modal-body">

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Permite que sejam aceitas multiplas reservas de um mesmo espaço.">
																					<h4>Aceita Multiplas Reservas: <span id="aceita-multiplas-reservas" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Bloqueia condominos que estejam inadimplentes.">
																					<h4>Bloqueia Inadimplentes: <span id="bloqueia-inadimplentes" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de visitantes permitida.">
																					<h4>Lotação Máxima: <span id="lotacao-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade máxima de PERIODOS DIFERENTES voce pode reservar.">
																					<h4>Quantidade Máxima de Períodos: <span id="quantidade-max-periodos" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de vezes que voce pode reservar UM MESMO período.">
																					<h4>Quantidade Maxima de Marcações: <span id="quantidade-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Sem uso no momento.">
																					<h4>Quota Máxima: <span id="quota-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Limite de dias de antecedencia para marcaçao em dias. Ex: Se 15 dias, para marcar em 30 de setembro, so a partir de 15 de setembro.">
																					<h4>Tempo Máximo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Periodo mínimo de dias aceitaveis antes de permitir o cancelamento. Ex: Se forem 7 dias, ao tentar cancelar 6 dias antes nao será possível.">
																					<h4>Tempo Mínimo Cancelamento (dias): <span id="tempo-dias-cancelamento" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo de dias para marcar. Ex: Se 10, só seria possivel marcar uma reserva para o dia 30/09 até o dia 20/09. Se for dia 21, nao conseguiria mais.">
																					<h4>Tempo Minimo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-min-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo em dias para uma nova marcação. Ex: Se for 3, apenas depois de 3 dias após a data da reserva é que será possivel realizar nova marcaçao.">
																					<h4>Tempo Minimo para Nova marcação (dias): <span id="tempo-dias-nova-marcacao" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																			</div>
																			<div class="modal-footer">
																				<button type="button" class="btn btn-primary" data-dismiss="modal">Entendi</button>
																			</div>
																		</div>
																	</div>
																</div>

															</td>
														</tr>

													
														<tr>
															<td class="hidden-480">R$ 197.34</td>
															<td>
																<b class="green">SALÃO DE FESTAS - Bloco 3</b>
															</td>
															<td>
																<span class="badge badge-warning">35</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-warning">2</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-info">1</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-purple">S</span>
															</td>
															<td>

																<a href="calendario.php?id_item_reserva=188"><button class="btn btn-primary">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reservar

																	</button>
																</a>
																<a href="reserva_rapida.php?id_item_reserva=188"><button class="btn btn-purple">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reserva Rapida
																		<i class="ace-icon fa fa-flash align-top bigger-125"></i>

																	</button>
																</a>
																<a href="mostra_fotos.php?id_item_reserva=188"><button class="btn btn-danger">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver Fotos do Local

																	</button>
																</a>
																<a href="mostra_plantas.php?id_item_reserva=188"><button class="btn btn-warning">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver planta

																	</button>
																</a>

															</td>


															<td>

																<button data-id="188" class="btn btn-success regrass" data-toggle="modal" data-target="#regras-modal">

																	<i class="ace-icon fa fa-book align-top bigger-125"></i>

																	Ver Regras

																</button>

																<div class="modal fade" id="regras-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
																	<div class="modal-dialog" role="document">
																		<div class="modal-content">
																			<div class="modal-header">
																				<h2 class="modal-title" id="exampleModalLabel">Carregando...</h2>
																				<button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
																					<span aria-hidden="true">&times;</span>
																				</button>
																			</div>
																			<div class="modal-body">

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Permite que sejam aceitas multiplas reservas de um mesmo espaço.">
																					<h4>Aceita Multiplas Reservas: <span id="aceita-multiplas-reservas" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Bloqueia condominos que estejam inadimplentes.">
																					<h4>Bloqueia Inadimplentes: <span id="bloqueia-inadimplentes" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de visitantes permitida.">
																					<h4>Lotação Máxima: <span id="lotacao-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade máxima de PERIODOS DIFERENTES voce pode reservar.">
																					<h4>Quantidade Máxima de Períodos: <span id="quantidade-max-periodos" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de vezes que voce pode reservar UM MESMO período.">
																					<h4>Quantidade Maxima de Marcações: <span id="quantidade-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Sem uso no momento.">
																					<h4>Quota Máxima: <span id="quota-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Limite de dias de antecedencia para marcaçao em dias. Ex: Se 15 dias, para marcar em 30 de setembro, so a partir de 15 de setembro.">
																					<h4>Tempo Máximo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Periodo mínimo de dias aceitaveis antes de permitir o cancelamento. Ex: Se forem 7 dias, ao tentar cancelar 6 dias antes nao será possível.">
																					<h4>Tempo Mínimo Cancelamento (dias): <span id="tempo-dias-cancelamento" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo de dias para marcar. Ex: Se 10, só seria possivel marcar uma reserva para o dia 30/09 até o dia 20/09. Se for dia 21, nao conseguiria mais.">
																					<h4>Tempo Minimo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-min-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo em dias para uma nova marcação. Ex: Se for 3, apenas depois de 3 dias após a data da reserva é que será possivel realizar nova marcaçao.">
																					<h4>Tempo Minimo para Nova marcação (dias): <span id="tempo-dias-nova-marcacao" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																			</div>
																			<div class="modal-footer">
																				<button type="button" class="btn btn-primary" data-dismiss="modal">Entendi</button>
																			</div>
																		</div>
																	</div>
																</div>

															</td>
														</tr>

													
														<tr>
															<td class="hidden-480">R$ 197.34</td>
															<td>
																<b class="green">Salão de Festas - Torre 09</b>
															</td>
															<td>
																<span class="badge badge-warning">35</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-warning">2</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-info">1</span>
															</td>
															<td class="hidden-480 text-center">
																<span class="badge badge-purple">S</span>
															</td>
															<td>

																<a href="calendario.php?id_item_reserva=198"><button class="btn btn-primary">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reservar

																	</button>
																</a>
																<a href="reserva_rapida.php?id_item_reserva=198"><button class="btn btn-purple">

																		<i class="ace-icon fa fa-calendar align-top bigger-125"></i>

																		Reserva Rapida
																		<i class="ace-icon fa fa-flash align-top bigger-125"></i>

																	</button>
																</a>
																<a href="mostra_fotos.php?id_item_reserva=198"><button class="btn btn-danger">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver Fotos do Local

																	</button>
																</a>
																<a href="mostra_plantas.php?id_item_reserva=198"><button class="btn btn-warning">

																		<i class="ace-icon fa fa-picture-o align-top bigger-125"></i>

																		Ver planta

																	</button>
																</a>

															</td>


															<td>

																<button data-id="198" class="btn btn-success regrass" data-toggle="modal" data-target="#regras-modal">

																	<i class="ace-icon fa fa-book align-top bigger-125"></i>

																	Ver Regras

																</button>

																<div class="modal fade" id="regras-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
																	<div class="modal-dialog" role="document">
																		<div class="modal-content">
																			<div class="modal-header">
																				<h2 class="modal-title" id="exampleModalLabel">Carregando...</h2>
																				<button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
																					<span aria-hidden="true">&times;</span>
																				</button>
																			</div>
																			<div class="modal-body">

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Permite que sejam aceitas multiplas reservas de um mesmo espaço.">
																					<h4>Aceita Multiplas Reservas: <span id="aceita-multiplas-reservas" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Bloqueia condominos que estejam inadimplentes.">
																					<h4>Bloqueia Inadimplentes: <span id="bloqueia-inadimplentes" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de visitantes permitida.">
																					<h4>Lotação Máxima: <span id="lotacao-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade máxima de PERIODOS DIFERENTES voce pode reservar.">
																					<h4>Quantidade Máxima de Períodos: <span id="quantidade-max-periodos" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Quantidade maxima de vezes que voce pode reservar UM MESMO período.">
																					<h4>Quantidade Maxima de Marcações: <span id="quantidade-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Sem uso no momento.">
																					<h4>Quota Máxima: <span id="quota-maxima" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Limite de dias de antecedencia para marcaçao em dias. Ex: Se 15 dias, para marcar em 30 de setembro, so a partir de 15 de setembro.">
																					<h4>Tempo Máximo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Periodo mínimo de dias aceitaveis antes de permitir o cancelamento. Ex: Se forem 7 dias, ao tentar cancelar 6 dias antes nao será possível.">
																					<h4>Tempo Mínimo Cancelamento (dias): <span id="tempo-dias-cancelamento" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo de dias para marcar. Ex: Se 10, só seria possivel marcar uma reserva para o dia 30/09 até o dia 20/09. Se for dia 21, nao conseguiria mais.">
																					<h4>Tempo Minimo de Antecedencia para Nova Marcação (dias): <span id="tempo-dias-min-antecedencia" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																				<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Tempo mínimo em dias para uma nova marcação. Ex: Se for 3, apenas depois de 3 dias após a data da reserva é que será possivel realizar nova marcaçao.">
																					<h4>Tempo Minimo para Nova marcação (dias): <span id="tempo-dias-nova-marcacao" class="badge badge-secondary">Carregando...</span>
																					</h4>
																				</span>

																			</div>
																			<div class="modal-footer">
																				<button type="button" class="btn btn-primary" data-dismiss="modal">Entendi</button>
																			</div>
																		</div>
																	</div>
																</div>

															</td>
														</tr>

																									</tbody>
											</table>
										</div><!-- /.widget-main -->
									</div><!-- /.widget-body -->
								</div><!-- /.widget-box -->
							</div><!-- /.col -->

						</div>

						<div class="row">
							<div class="alert alert-block alert-success">

								<button type="button" class="close" data-dismiss="alert">

									<i class="ace-icon fa fa-times"></i>

								</button>



								<i class="ace-icon fa fa-warning orange"></i>
								Atencao! Para todas as reservas, deve-se respeitar o limite maximo de antecedencia e todas as regras previstas na Conven&ccedil;&atilde;o e no Regimento Interno.
								<br>





							</div>

						</div>


					
					<!-- InstanceEndEditable -->
				</div><!-- /.page-content -->
			</div>
		</div><!-- /.main-content -->

		<div class="footer">


			<div class="footer-inner">
				<!-- #section:basics/footer -->
				<!--
					<div class="footer-content">
						<span class="bigger-120">
							<span class="blue bolder">Ace</span>
							Application &copy; 2013-2014
						</span>

						&nbsp; &nbsp;
						<span class="action-buttons">
							<a href="#">
								<i class="ace-icon fa fa-twitter-square light-blue bigger-150"></i>
							</a>

							<a href="#">
								<i class="ace-icon fa fa-facebook-square text-primary bigger-150"></i>
							</a>

							<a href="#">
								<i class="ace-icon fa fa-rss-square orange bigger-150"></i>
							</a>
						</span>
					</div>
			-->
				<!-- /section:basics/footer -->
			</div>


		</div>

		<a href="#" id="btn-scroll-up" class="btn-scroll-up btn btn-sm btn-inverse">
			<i class="ace-icon fa fa-angle-double-up icon-only bigger-110"></i>
		</a>
	</div><!-- /.main-container -->

	<!-- basic scripts -->

	<!--[if !IE]> -->
	<script type="text/javascript">
		window.jQuery || document.write("<script src='../assets/js/jquery.js'>" + "<" + "/script>");
	</script>

	<!-- <![endif]-->

	<!--[if IE]>
<script type="text/javascript">
 window.jQuery || document.write("<script src='../assets/js/jquery1x.js'>"+"<"+"/script>");
</script>
<![endif]-->
	<script type="text/javascript">
		if ('ontouchstart' in document.documentElement) document.write("<script src='../assets/js/jquery.mobile.custom.js'>" + "<" + "/script>");
	</script>
	<script src="../assets/js/bootstrap.js"></script>

	<!-- page specific plugin scripts -->
	<!-- InstanceBeginEditable name="PageSpecificJSPlugins" -->
	<!--[if lte IE 8]>
		  <script src="../assets/js/excanvas.js"></script>
		<![endif]-->

	<script src="../assets/js/jquery-ui.js"></script>
	<script src="../assets/js/jquery.ui.touch-punch.js"></script>

	<script type="text/javascript" src="../../js/jquery.ui.datepicker-pt-BR.js"></script>


	<!-- InstanceEndEditable -->

	<!-- ace scripts -->
	<script src="../assets/js/ace/elements.scroller.js"></script>
	<script src="../assets/js/ace/elements.colorpicker.js"></script>
	<script src="../assets/js/ace/elements.fileinput.js"></script>
	<script src="../assets/js/ace/elements.typeahead.js"></script>
	<script src="../assets/js/ace/elements.wysiwyg.js"></script>
	<script src="../assets/js/ace/elements.spinner.js"></script>
	<script src="../assets/js/ace/elements.treeview.js"></script>
	<script src="../assets/js/ace/elements.wizard.js"></script>
	<script src="../assets/js/ace/elements.aside.js"></script>
	<script src="../assets/js/ace/ace.js"></script>
	<script src="../assets/js/ace/ace.ajax-content.js"></script>
	<script src="../assets/js/ace/ace.touch-drag.js"></script>
	<script src="../assets/js/ace/ace.sidebar.js"></script>
	<script src="../assets/js/ace/ace.sidebar-scroll-1.js"></script>
	<script src="../assets/js/ace/ace.submenu-hover.js"></script>
	<script src="../assets/js/ace/ace.widget-box.js"></script>
	<script src="../assets/js/ace/ace.settings.js"></script>
	<script src="../assets/js/ace/ace.settings-rtl.js"></script>
	<script src="../assets/js/ace/ace.settings-skin.js"></script>
	<script src="../assets/js/ace/ace.widget-on-reload.js"></script>
	<script src="../assets/js/ace/ace.searchbox-autocomplete.js"></script>

	<!-- inline scripts related to this page -->
	<!-- InstanceBeginEditable name="ScriptsInline" -->

	<script>
		$(function() {
			$.datepicker.setDefaults({
				changeYear: true,
				changeMonth: true,
				dateFormat: "yy-mm-dd",
				showAnim: "clip",
				yearRange: "2025:2026"
			});
			$("#dt_busca").datepicker($.datepicker.regional["pt-BR"]);
			$("#dt_busca").datepicker();

		});
	</script>
	<script type="text/javascript">
		jQuery(function($) {


			$('[data-rel=tooltip]').tooltip();

			$('[data-rel=popover]').popover({
				html: true
			});

		})

		//triggered when modal is about to be shown
		$('#regras-modal').on('show.bs.modal', function(e) {
			//get data-id attribute of the clicked element
			var itemReservaId = $(e.relatedTarget).data('id');

			$.ajax({
				dataType: "json",
				url: 'ajax_gerencia_evento.php?obtemregras=S&id_item_reserva=' + itemReservaId,
				type: 'GET',
				success: function(data) {
					//$(e.currentTarget).find('.modal-title').html(data.nomeItemReserva);	
					$("#exampleModalLabel").text("Regras do(a) " + data.nome_item_reserva);
					$("#aceita-multiplas-reservas").text(data.aceita_multiplas_reservas ? "Sim" : "Não");
					$("#bloqueia-inadimplentes").text(data.bloqueia_inadimplentes ? "Sim" : "Não");
					$("#lotacao-maxima").text(data.lotacao_maxima);
					$("#quantidade-max-periodos").text(data.quantidade_max_periodos);
					$("#quantidade-maxima").text(data.quantidade_maxima);
					$("#quota-maxima").text(data.quota_maxima);
					$("#tempo-dias-antecedencia").text(data.tempo_dias_antecedencia);
					$("#tempo-dias-cancelamento").text(data.tempo_dias_cancelamento);
					$("#tempo-dias-min-antecedencia").text(data.tempo_dias_min_antecedencia);
					$("#tempo-dias-nova-marcacao").text(data.tempo_dias_nova_marcacao);
				}
			});

			//populate the textbox


			//$(".regrass").click(function() {

			//});
		});
	</script>
	<!-- InstanceEndEditable -->
	<!-- the following scripts are used in demo only for onpage help and you don't need them -->
	<!--		<link rel="stylesheet" href="../assets/css/ace.onpage-help.css" /> -->
	<!--		<link rel="stylesheet" href="../docs/assets/js/themes/sunburst.css" /> -->
	<!--
		<script type="text/javascript"> ace.vars['base'] = '..'; </script>
		<script src="../assets/js/ace/elements.onpage-help.js"></script>
		<script src="../assets/js/ace/ace.onpage-help.js"></script>
		<script src="../docs/assets/js/rainbow.js"></script>
		<script src="../docs/assets/js/language/generic.js"></script>
		<script src="../docs/assets/js/language/html.js"></script>
		<script src="../docs/assets/js/language/css.js"></script>
		<script src="../docs/assets/js/language/javascript.js"></script>
        
        -->
</body>
<!-- InstanceEnd -->

</html>