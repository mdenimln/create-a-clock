function updateClock() {
    var baru = new Date();
    var hari = baru.getDay();
    var tgl = baru.getDate();
    var bln = baru.getMonth();
    var thn = baru.getFullYear();
    var jam = baru.getHours();
    var min = baru.getMinutes();
    var det = baru.getSeconds();
        pe = "PM";

        if(jam == 0){
            jam = 0;
        }
        if(jam > 24){
            jam = jam - 24;
            pe = "AM";
        }

        Number.prototype.pad = function(digits){
            for(var n = this.toString(); n.length < digits; n = 0 + n);
            return n;
        }
    var bulan = ["JANUARY", "FEBRUARY", "MARET", "APRIL", "MEI", "JUNI", "JULY", "AGUSTUS", "SEPTEMBER", "OKTOBER", "NOVEMBER", "DESEMBER"];

    var week = ["MINGGU", "SENIN", "SELASA", "RABU", "KAMIS", "JUMAT", "SABTU"];

    var ids = ["hari", "tanggal", "bulan", "tahun", "jam", "menit", "detik", "petunjukwaktu"];

    var values = [week[hari], tgl.pad(2), bulan[bln], thn, jam.pad(2), min.pad(2), det.pad(2), pe];

    for(var i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];

}
function createBurst(){
    let animContainer = document.querySelector('.animation-container');
    let burst = document.querySelector('.burst');

    burst.style.top = Math.random() * 550 + 'px';
    burst.style.left = Math.random() * 750 + 'px';
    // burst.style.bottom = Math.random() * 500 + 'px';
    // burst.style.right = Math.random() * 500 + 'px';
    // window.setInterval("updateClock()", 1);

    let burstClone = burst.cloneNode(true);
    animContainer.appendChild(burstClone);

    setTimeout(() => {
        burstClone.remove();
    }, 10000);
}

const btn = document.querySelector('#btn');
const txt = document.querySelector('#non');
btn.onclick = function() {
    txt.classList.toggle('text');
    setInterval(createBurst, 2000);
}



function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1)
}
