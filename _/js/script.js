$(function(){var n=$(".sf-menu");n.clone().removeClass().addClass("responsif-menu").prependTo(".kotak-navigasi nav"),n.superfish(),$("#tombol-responsif-menu").on("click",function(n){n.preventDefault(),$(".responsif-menu").slideToggle()}),$("#demo-animasi").find(".demo-kolom").on("click",function(n){var e=$(this);e.addClass("animated "+e.text())})});