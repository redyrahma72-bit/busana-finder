const tokoBusana = [

{
    nama:"Dsawd_collection",
    alamat:"Jl. R. Suprapto No.766, RT.10/RW.03, Baturaja Lama, Kec. Baturaja Timur, Kabupaten Ogan Komering Ulu, Sumatera Selatan 32125",
    telepon:"085841329092",
    gambar:"gambar/Dsawd_collection.jpg",
    lat:-4.119949376492575,
    lng:104.17376109507163
},

{
    nama:"M&R Busana Baturaja",
    alamat:"Depan RS DKT TNI, Jl. Dr. M. Hatta No.699, Baturaja Lama, Kec. Baturaja Timur, Kabupaten Ogan Komering Ulu, Sumatera Selatan 32125",
    telepon:"081267710337",
    gambar:"gambar/M&R Busana Baturaja.jpg",
    lat:-4.122478558062923,
    lng:104.16744259998129
},

{
    nama:"RAMAYANA Baturaja",
    alamat:"Jl. Jenderal Ahmad Yani, Baturaja Lama, Kec. Baturaja Timur, Kabupaten Ogan Komering Ulu, Sumatera Selatan 32121",
    telepon:"0735324333",
    gambar:"gambar/RAMAYANA Baturaja.jpg",
    lat:-4.125646358114918,
    lng:104.1708032705335
},

{
    nama:"Dazzle Outfit Baturaja",
    alamat:"Jl. Jenderal Ahmad Yani Atas No.88, Kemala Raja, Kec. Baturaja Timur, Kabupaten Ogan Komering Ulu, Sumatera Selatan 32100",
    telepon:"081368854419",
    gambar:"gambar/Dazzle Outfit Baturaja.png",
    lat:-4.1251216302443705,
    lng:104.17314302329453
},

{
    nama:"Matahari Departement Store Baturaja",
    alamat:"Tj. Baru, Kec. Baturaja Timur, Kabupaten Ogan Komering Ulu, Sumatera Selatan 32121",
    telepon:"07353742661",
    gambar:"gambar/Matahari Departement Store Baturaja.jpg",
    lat:-4.134007881023738,
    lng:104.17831681999101
},

{
    nama:"IAM FASHION BATURAJA",
    alamat:"V5HM+R4H, Jl. Lintas Sumatera, Baturaja, Kec. Pesisir Utara, Kabupaten Lampung Barat, Lampung 32125",
    telepon:"082114889804",
    gambar:"gambar/IAM FASHION BATURAJA.jpg",
    lat:-4.120431620391297,
    lng:104.18284480611581
},

{
    nama:"U 'RINI BOUTIQUE",
    alamat:"V5HF+H86, Jl. Dr. Setia Budi, Baturaja Lama, Kec. Baturaja Timur, Kabupaten Ogan Komering Ulu, Sumatera Selatan 32125",
    telepon:"081369993635",
    gambar:"gambar/U 'RINI BOUTIQUE.jpg",
    lat:-4.121058601253414,
    lng:104.17327273461527
},

{
    nama:"Enggano",
    alamat:"Jl. Jenderal Ahmad Yani, Tj. Baru, Kec. Baturaja Timur, Kabupaten Ogan Komering Ulu, Sumatera Selatan 32113",
    telepon:"081310919688",
    gambar:"gambar/Enggano.jpg",
    lat:-4.130850207718578,
    lng:104.17822246378651
},

{
    nama:"INDIEGIB KIDS AND BABYSHOP",
    alamat:"Bangsal genteng, Jl. DI. Panjaitan, Sukaraya, Kec. Baturaja Timur, Kabupaten Ogan Komering Ulu, Sumatera Selatan 32111",
    telepon:"081273500492",
    gambar:"gambar/INDIEGIB KIDS AND BABYSHOP.jpg",
    lat:-4.120627758032573,
    lng:104.17814602942907
},

{
    nama:"Pojok Busana Lia",
    alamat:"Kemalaraja, Jl. Dr. Setia Budi No.777c, Baturaja Lama, Kec. Baturaja Timur, Kabupaten Ogan Komering Ulu, Sumatera Selatan 32111",
    telepon:"081367016624",
    gambar:"gambar/Pojok Busana Lia.jpg",
    lat:-4.121082320403101,
    lng:104.17326599445919
},

{
    nama:"VIORY COLLECTION",
    alamat:"JL DR MOH HATTA BAKUNg KAB OgAN KOMERINg ULU,BATURAJA TIMUR SUMATERA SELATAN ID, Baturaja Lama, Kec. Baturaja Timur, Kabupaten Ogan Komering Ulu, Sumatera Selatan 32111",
    telepon:"085379912324",
    gambar:"gambar/VIORY COLLECTION.jpg",
    lat:-4.113726243777608,
    lng:104.17320604844511
},

{
    nama:"Ratu Fashion dan studio salon terbaik di baturaja, nail art,eyelash,behel,dll",
    alamat:"Jl. Dr. M. Hatta, Tj. Baru, Kec. Baturaja Timur, baturaja, Sumatera Selatan 32121",
    telepon:"085266774446",
    gambar:"gambar/Ratu Fashion dan studio salon terbaik di baturaja, nail art,eyelash,behel,dll.jpg",
    lat:-4.1282192182749196,
    lng:104.18021697955206
},

{
    nama:"Azzahra Kids Shop",
    alamat:"V5JH+W2g, Kemala Raja, Kec. Baturaja Timur, Kabupaten Ogan Komering Ulu, Sumatera Selatan 32125",
    telepon:"082178737990",
    gambar:"gambar/Azzahra Kids Shop.jpg",
    lat:-4.11767604029906,
    lng:104.17760314995846
}

];

function hitungJarak(lat1, lng1, lat2, lng2){

    const R = 6371;

    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);

    const c = 2 * Math.atan2(
        Math.sqrt(a),
        Math.sqrt(1 - a)
    );

    return R * c;

}

function cariToko() {

    if (!navigator.geolocation) {

        alert("Browser tidak mendukung gPS");
        return;

    }

    navigator.geolocation.watchPosition(

        function(position) {

            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;

            document.getElementById("lokasi").innerHTML = `

                <h3>📍 Lokasi Anda</h3>
                <p>${userLat.toFixed(5)}, ${userLng.toFixed(5)}</p>

            `;

            let hasil = [];

            tokoBusana.forEach(function(toko) {

                const jarak = hitungJarak(
                    userLat,
                    userLng,
                    toko.lat,
                    toko.lng
                );

                hasil.push({

                    nama: toko.nama,
                    alamat: toko.alamat,
                    telepon: toko.telepon,
                    gambar: toko.gambar,
                    jarak: jarak,
                    maps:`https://www.google.com/maps/dir/?api=1&destination=${toko.lat},${toko.lng}`

                });

            });

            hasil.sort((a, b) => a.jarak - b.jarak);

            let output = "";

            for (let i = 0; i < hasil.length; i++) {

                output += `

                    <div class="card">

                        <img
                            src="${hasil[i].gambar}?w=500"
                            alt="${hasil[i].nama}"
                            class="gambar-toko"
                        >

                        <h3>${hasil[i].nama}</h3>

                        <p>
                            <b>Alamat:</b>
                            ${hasil[i].alamat}
                        </p>

                        <p>
                            <b>No. Telepon:</b>
                            ${hasil[i].telepon}
                        </p>

                        <p>
                            <b>Jarak:</b>
                            ${
                                hasil[i].jarak < 1
                                ? (hasil[i].jarak * 1000).toFixed(0) + " Meter"
                                : hasil[i].jarak.toFixed(2) + " KM"
                            }
                        </p>

                        <a
                            href="${hasil[i].maps}"
                            target="_blank"
                            class="btn-maps"
                        >
                            🚗 Lihat Rute ke Toko
                        </a>

                    </div>

                `;

            }

            document.getElementById("hasil").innerHTML = output;

        },

        function(error) {

            console.error(error);

            alert(
                "Lokasi tidak diizinkan. Klik Allow / Izinkan."
            );

        },

        {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 10000
        }

    );

}

function filterToko() {

    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let cards =
        document.querySelectorAll(".card");

    cards.forEach(function(card) {

        let nama =
            card.querySelector("h3")
            .textContent
            .toLowerCase();

        if (nama.includes(input)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}