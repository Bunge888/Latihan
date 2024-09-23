import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { 
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'

const firebaseConfig = {
  apiKey: "AIzaSyCbqYHEkbK8rlmTEvT7IRxamrueBVOvf2o",
  authDomain: "insan-cemerlang-25a53.firebaseapp.com",
  projectId: "insan-cemerlang-25a53",
  storageBucket: "insan-cemerlang-25a53.appspot.com",
  messagingSenderId: "383282706725",
  appId: "1:383282706725:web:bf9fd56cea37cb3a0fc2cc",
  measurementId: "G-31EQF6PDVN"
};

// inisialisasi firebase
const  aplikasi = initializeApp(firebaseConfig)
const  basisdata = getFirestore(aplikasi)

export async function ambilDaftarSiswa() {
 const refDokumen = collection(basisdata, "Bunga");
 const kueri = query(refDokumen, orderBy("Nama"));
 const cuplikanKueri = await getDocs(kueri);
 
 let  hasilKueri= [];
 cuplikanKueri.forEach((dokumen) => {
   hasilKueri.push({
     id: dokumen.id,
     Nama: dokumen.data().Nama,
   })
 })
 
 return hasilKueri;
}

export async function tambahSiswa(Nama) {
  try {
    // menyimpan data ke firebase 
    const refDokumen = await addDoc(collection(basisdata, "Bunga"), {
      Nama: Nama,
    })
    
    //menampilkan pesan berhasil 
    console.log("berhasil menyimpandata siswa")
  } catch (error) {
    // pesan gagal
    Console.log("gagal menyimpandata siswa")
  }
}