let alinkom, alpro, pmk, radig, basdat, strukdis, tp, hasil;

document.getElementById('Hitung').onclick = function(){
    alinkom = document.getElementById('alinkom').value;
    alinkom = parseFloat(alinkom);
    
    alpro = document.getElementById('alpro').value;
    alpro = parseFloat(alpro);
    
    pmk = document.getElementById('pmk').value;
    pmk = parseFloat(pmk);

    radig = document.getElementById('radig').value;
    radig = parseFloat(radig);

    basdat = document.getElementById('basdat').value;
    basdat = parseFloat(basdat);

    strukdis = document.getElementById('strukdis').value;
    strukdis = parseFloat(strukdis);

    tp = document.getElementById('tp').value;
    tp = parseFloat(tp);

    hasil = (((alinkom*3)+(alpro*3)+(pmk*3)+(radig*2)+(basdat*3)+(strukdis*2)+(tp*3))/19);
    
    
    document.getElementById('nilai-akhir').textContent = hasil.toFixed(2);
};