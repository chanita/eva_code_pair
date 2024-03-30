const lottoNo = [9,8,7,6,2];

function koonSong(value) {
    return value * 2;
}

const calculateLotto = lottoNo.map(koonSong);

console.log(lottoNo.map(koonSong));
console.log(calculateLotto)
