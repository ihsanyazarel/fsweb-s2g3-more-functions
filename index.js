// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
  - Input:  Bir dosya yolunu (path) parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon, verilen bir dosya adresideki(path) dosyanın adını vermeli.
  * İpucu:  Dosya adresinin / işaretleri ile bölümlendiğine dikkat et.

  örnek input:  "C:/Users/johnsmith/Music/Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  "Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  ""
  örnek output: ""
*/

function dosyaAdiniBul(dizinParam) {
  const dizi = dizinParam.split("/");
  return dizi[dizi.length-1];
}
// console.log(dosyaAdiniBul("C:/Users/johnsmith/Music/Beethoven_5.mp3"));
// console.log(dosyaAdiniBul("Beethoven_5.mp3"));
// console.log(dosyaAdiniBul(""));


/*
  GÖREV 2
  - Input:  Bir sayı arrayini parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasını dönmeli.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: 46

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: 104
*/

function ortalamaBul(sayiArrayi) {
  let ortalama = sayiArrayi.reduce((sum, item) => {
    return sum + item;
  }, null );
  return ortalama ? ortalama/sayiArrayi.length : ortalama;
  
}
// console.log(ortalamaBul([]));
// console.log(ortalamaBul([4]));
// console.log(ortalamaBul([50, -26, 153, 7]));
// console.log(ortalamaBul([109, 216, 288, 143, 71, 185, -278, 194, 5]));


/*
  GÖREV 3
  - Input:  Bir sayı arrayini ve ortalama bulmaya yarayacak bir fonksiyonu parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasından büyük ya da eşit elemanlardan oluşan bir array dönmeli.
  * Çağırırken kendi ortalama fonksiyonunla çağırabilirsin, ama parametrenin tanımlama aşamasında soyut bir ifade olduğunu unutma.
  * f(x) = 2x+5 içerisindeki x değeri gibi.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: [50, 153]

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: [109, 216, 288, 143, 185, 194]
*/

function ortalamadanBuyukleriBul(sayiArrayi, ortFunction) {
  let ortalama = ortFunction(sayiArrayi);
  let array = sayiArrayi.filter(value => value >= ortalama);
  return ortalama ? array : ortalama;
}
// console.log(ortalamadanBuyukleriBul([], ortalamaBul));
// console.log(ortalamadanBuyukleriBul([4], ortalamaBul));
// console.log(ortalamadanBuyukleriBul([50, -26, 153, 7], ortalamaBul));
// console.log(ortalamadanBuyukleriBul([109, 216, 288, 143, 71, 185, -278, 194, 5], ortalamaBul));



/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };
