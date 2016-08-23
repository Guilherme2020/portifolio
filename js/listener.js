$(document).ready(function() {
    $('#menu-sobre').click(function() {
      console.log('clicked');
      $('#sobre').ScrollTo({
        duration: 2000,
        easing: 'linear'
      });

    });
});
$(document).ready(function() {
    $('#menu-servico').click(function() {
      console.log('clicked');
      $('#servicos').ScrollTo({
        duration: 2000,
        easing: 'linear'
      });

    });
});
$(document).ready(function() {
    $('#menu-portifolio').click(function() {
      console.log('clicked');
      $('#portifolio').ScrollTo({
        duration: 2000,
        easing: 'linear'
      });

    });
});
$(document).ready(function() {
    $('#menu-contato').click(function() {
      console.log('clicked');
      $('#contato').ScrollTo({
        duration: 2000,
        easing: 'linear'
      });

    });
});
