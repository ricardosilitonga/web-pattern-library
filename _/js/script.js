$(function(){var e=$(".sf-menu");e.clone().removeClass().addClass("responsif-menu").prependTo(".kotak-navigasi nav"),e.superfish(),$("#tombol-responsif-menu").on("click",function(e){e.preventDefault(),$(".responsif-menu").slideToggle()})});