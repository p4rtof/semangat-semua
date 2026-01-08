let pemrog, oak, strukdat, metkuan, rpl, dpp, gkv, hasil;

document.getElementById('Hitung').onclick = function(){
    pemrog = parseFloat(document.getElementById('pemrog').value);
    oak = parseFloat(document.getElementById('oak').value);   
    strukdat = parseFloat(document.getElementById('strukdat').value);
    metkuan = parseFloat(document.getElementById('metkuan').value);
    rpl = parseFloat(document.getElementById('rpl').value);
    dpp = parseFloat(document.getElementById('dpp').value);
    gkv = parseFloat(document.getElementById('gkv').value);

    hasil = (((pemrog*3)+(oak*2)+(strukdat*3)+(metkuan*3)+(rpl*3)+(dpp*3)+(gkv*2))/19);
     
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