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

    if(hasil==4.00){
        console.log("kurang, gak menantang");
    } else if (hasil>=3.50){
        console.log("kamu hebat banget, pak julio bangga");
    } else if (hasil>=3.00){
        console.log("cakep banget tuh nilainya");
    } else if (hasil>=2.50){
        console.log("dikit lagi jadi mentri tuh");
    } else if(hasil >=2.00){
        console.log("dikit lagi bisa jadi presiden");
    } else {
        console.log("smngt ngulangnya bes");
    }

};