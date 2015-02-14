(function () {
  var przyciskLosowo = function () {
    var button = document.getElementsByTagName('button')[0],
        left = Math.random() * 90,
        top = Math.random() * 90;

    button.style.left = left + '%';
    button.style.top = top + '%';
  },
  blokuj = function () {
    blokada = true;
    setTimeout(function () { blokada = false; }, 10);
  },
  poNajechaniuNaPrzycisk = function (funkcja) {
    document.getElementsByTagName('button')[0].addEventListener('mouseover', funkcja);
  },
  poKliknieciuWPrzycisk = function (funkcja) {
    document.getElementsByTagName('button')[0].addEventListener('click', funkcja);
  },
  animujKwadrat = function (czas, lewo, gora, wysokosc, szerokosc, obrot, skala) {
    var $kwadrat = $('.kwadrat');
    lewo = lewo || 0;
    gora = gora || 0;
    obrot = obrot || 0;
    wysokosc = wysokosc || $kwadrat.width;
    szerokosc = szerokosc || $kwadrat.height;
    czas = czas || 1000;

    if (!blokada) {
      blokuj();
      $kwadrat.animate({
        'left': '+=' + lewo,
        'top': '+=' + gora,
        'rotate': '+=' + obrot,
        'width': wysokosc,
        'height': szerokosc
      }, czas);
    }
  },
  wykonujKolejke = function () {
    var $kwadrat = $('.kwadrat');
    $kwadrat.queue('fx');
    timeout = setTimeout(wykonujKolejke, 100);
  },
  kolejkaAnimacji = function (animacje) {
    var i;
    if (timeout) {
      clearTimeout(timeout);
    }

    for (i in animacje) {
      animacje[i]();
      blokada = false;
    }
    wykonujKolejke();
  },
  timeout,
  blokada = false;

  window.poNajechaniuNaPrzycisk = poNajechaniuNaPrzycisk;
  window.poKliknieciuWPrzycisk = poKliknieciuWPrzycisk;
  window.przyciskLosowo = przyciskLosowo;
  window.animujKwadrat = animujKwadrat;
  window.kolejkaAnimacji = kolejkaAnimacji;
})();
