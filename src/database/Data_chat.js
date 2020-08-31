import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Realm from 'realm';
export const USER2_SCHEMA = "User2";
export const USER3_SCHEMA = "User3";
//Pesanan 2 = selsai, Pesanan 3 = batal, Pesanan 4 = belum kirim, Pesanan 5 = konfirmasi, Pesanan 6 = belum bayar
export const PESANAN2_SCHEMA = "Pesanan2";
export const PESANAN3_SCHEMA = "Pesanan3";
export const PESANAN4_SCHEMA = "Pesanan4";
export const PESANAN5_SCHEMA = "Pesanan5";
export const PESANAN6_SCHEMA = "Pesanan6";

export const PRODUK2_SCHEMA = "Produk2";
export const CHATTEMPLATE_SCHEMA = "ChatTemplate";
export const CHAT_SCHEMA = "Chat";
let realm;

export const User2Schema = {
  name: USER2_SCHEMA,
  primaryKey : 'user_id',
  properties: {
    user_id: {type: 'int', default: 0},
    nama_user: 'string',
    nama_toko : 'string',
    foto_produk: 'string',
    url_user : 'string',
    email : 'string',
    password_user : 'string',
    userToken : 'string',
    pemasukkan_user : 'string',
  }
};

export const User3Schema = {
  name: USER3_SCHEMA,
  primaryKey : 'user_id',
  properties: {
    user_id: {type: 'int', default: 0},
    nama_user: 'string',
    nama_toko : 'string',
    foto_produk: 'string',
    url_user : 'string',
    email : 'string',
    password_user : 'string',
    ulangipassword_user : 'string',
    userToken : 'string',
    pemasukkan_user : 'string',
  }
};

export const Pesanan2Schema = {
  name: PESANAN2_SCHEMA,
  primaryKey : 'pesanan_id',
  
  properties: {
    pesanan_id: {type: 'int', default: 0},
    nama_pelanggan: 'string',
    alamat_pelanggan : 'string',
    notelp_pelanggan : 'string',
    status_pesanan : 'string',
    metode_pembayaran: 'string',
    jumlah_produk : 'string',
    foto_produk: 'string',
    namaproduk_pesanan : 'string',
    hargaproduk_pesanan: 'string',
    modelproduk_pesanan : 'string',
    gambarproduk_pesanan: 'string',
    biaya_pengiriman: 'string',
    total_harga : 'string',
    tanggal_pesan : 'string',
  }
};

export const Pesanan3Schema = {
  name: PESANAN3_SCHEMA,
  primaryKey : 'pesanan_id',
  properties: {
    pesanan_id: {type: 'int', default: 0},
    nama_pelanggan: 'string',
    alamat_pelanggan : 'string',
    notelp_pelanggan : 'string',
    status_pesanan : 'string',
    metode_pembayaran: 'string',
    jumlah_produk : 'string',
    foto_produk: 'string',
    namaproduk_pesanan : 'string',
    hargaproduk_pesanan: 'string',
    modelproduk_pesanan : 'string',
    gambarproduk_pesanan: 'string',
    biaya_pengiriman: 'string',
    total_harga : 'string',
    tanggal_pesan : 'string',
  }
};

export const Pesanan4Schema = {
  name: PESANAN4_SCHEMA,
  primaryKey : 'pesanan_id',
  properties: {
    pesanan_id: {type: 'int', default: 0},
    nama_pelanggan: 'string',
    alamat_pelanggan : 'string',
    notelp_pelanggan : 'string',
    status_pesanan : 'string',
    metode_pembayaran: 'string',
    jumlah_produk : 'string',
    foto_produk: 'string',
    namaproduk_pesanan : 'string',
    hargaproduk_pesanan: 'string',
    modelproduk_pesanan : 'string',
    gambarproduk_pesanan: 'string',
    biaya_pengiriman: 'string',
    total_harga : 'string',
    tanggal_pesan : 'string',
  }
};

export const Pesanan5Schema = {
  name: PESANAN5_SCHEMA,
  primaryKey : 'pesanan_id',
  properties: {
    pesanan_id: {type: 'int', default: 0},
    nama_pelanggan: 'string',
    alamat_pelanggan : 'string',
    notelp_pelanggan : 'string',
    status_pesanan : 'string',
    metode_pembayaran: 'string',
    jumlah_produk : 'string',
    foto_produk: 'string',
    namaproduk_pesanan : 'string',
    hargaproduk_pesanan: 'string',
    modelproduk_pesanan : 'string',
    gambarproduk_pesanan: 'string',
    biaya_pengiriman: 'string',
    total_harga : 'string',
    tanggal_pesan : 'string',
  }
};

export const Pesanan6Schema = {
  name: PESANAN6_SCHEMA,
  primaryKey : 'pesanan_id',
  properties: {
    pesanan_id: {type: 'int', default: 0},
    nama_pelanggan: 'string',
    alamat_pelanggan : 'string',
    notelp_pelanggan : 'string',
    status_pesanan : 'string',
    metode_pembayaran: 'string',
    jumlah_produk : 'string',
    foto_produk: 'string',
    namaproduk_pesanan : 'string',
    hargaproduk_pesanan: 'string',
    modelproduk_pesanan : 'string',
    gambarproduk_pesanan: 'string',
    biaya_pengiriman: 'string',
    total_harga : 'string',
    tanggal_pesan : 'string',
  }
};


export const Produk2Schema = {
  name: PRODUK2_SCHEMA,
  primaryKey : 'produk_id',
  properties: {
    produk_id: {type: 'int', default: 0},
    nama_produk: 'string',
    tersisa_produk: 'int',
    terjual_produk: 'int',
    foto_produk: 'string',
    harga_produk: 'string',
  }
};

export const ChatSchema = {
  name: CHAT_SCHEMA,
  primaryKey : 'chat_id',
  properties: {
    chat_id: { type: 'int', default: 0 },
    chat_judul: 'string',
    chat_isi: 'string',
    done: { type: 'bool', default: false },
  }
};

export const ChatTemplateSchema = {
  name : CHATTEMPLATE_SCHEMA,
  primaryKey: 'chat_id',
  properties: {
    chat_id: { type: 'int', default: 0 },
    chat_judul: 'string',
    chat_isi: 'string',
    creationDate : 'date',
    chats: { type: 'list', objectType: CHAT_SCHEMA},
  }
}

const databaseOptions = {
  path: 'AselerApp.realm',
  schema: [
    Pesanan2Schema, 
    Pesanan3Schema, 
    Pesanan4Schema, 
    Pesanan5Schema, 
    Pesanan6Schema, 

    User3Schema, 
    
    Produk2Schema, 
    
    ChatTemplateSchema, 
    ChatSchema],
  schemaVersion: 0,
}

// User

export const tambahUser = tambahUsers => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
    realm.write(()=> {
      realm.create(USER3_SCHEMA, tambahUsers);
      resolve(tambahUsers);
    });
  }).catch((error)=> reject(error));
});

export const queryAllUser = () => new Promise((resolve, reject) =>{
  Realm.open(databaseOptions).then(realm => {
    let allUser = realm.objects(USER3_SCHEMA);
    resolve(allUser);
  }).catch((error) => {
    reject(error);
  });;
});

export const filterUsers = (namausers) => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
      console.warn('namausers')
      console.warn(namausers)
      let filteredUsers = realm.objects(USER3_SCHEMA)
                              .filtered(`nama_user == "${namausers}"`);//[c] = case insensitive
      console.warn(filteredUsers)
      resolve(filteredUsers);
  }).catch((error) => {
      reject(error);
  });;
});

export const queryOneUser = (namauser) => new Promise((resolve, reject) =>{
  Realm.open(databaseOptions).then(realm => {
    let allUser = realm.objects(USER3_SCHEMA);
    let user = allUser.filtered('nama_user == '+ namauser);
    resolve(user);
  }).catch((error) => {
    reject(error);
  });;
});

export const updateUser = userUp => new Promise((resolve, reject)=>{
  Realm.open(databaseOptions).then(realm => {
    realm.write(() => {
      let updatingUser = realm.objectForPrimaryKey(USER3_SCHEMA, userUp.user_id);
      updatingUser.nama_user = userUp.nama_user;
      updatingUser.nama_toko = userUp.nama_toko;
      updatingUser.foto_produk = userUp.foto_produk;
      updatingUser.url_user = userUp.url_user;
      updatingUser.email = userUp.email;
      updatingUser.password_user = userUp.password_user;
      updatingUser.ulangipassword_user = userUp.ulangipassword_user;
      updatingUser.userToken = userUp.userToken;
      updatingUser.pemasukkan_user = userUp.pemasukkan_user;
      resolve();
    });
  }).catch((error) => reject(error));;
});

export const deleteUser = userId => new Promise((resolve, reject) =>{
  Realm.open(databaseOptions).then(realm => {
    realm.write(() => {
      let deletingUser = realm.objectForPrimaryKey (USER3_SCHEMA, userId);
      realm.delete(deletingUser);
      resolve();
    });
  }).catch((error) => reject(error));;
});

// Pesanan

export const tambahPesanan = tambahPesanans => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
    realm.write(()=> {
      realm.create(PESANAN2_SCHEMA, tambahPesanans);
      resolve(tambahPesanans);
    });
  }).catch((error)=> reject(error));
});

export const queryAllPesanan = () => new Promise((resolve, reject) =>{
  Realm.open(databaseOptions).then(realm => {
    let allPesanan = realm.objects(PESANAN2_SCHEMA);
    resolve(allPesanan);
  }).catch((error) => {
    reject(error);
  });;
});

export const deletePesanan = pesananId => new Promise((resolve, reject) =>{
  Realm.open(databaseOptions).then(realm => {
    realm.write(() => {
      let deletingPesanan = realm.objectForPrimaryKey (PESANAN2_SCHEMA, pesananId);
      realm.delete(deletingPesanan);
      resolve();
    });
  }).catch((error) => reject(error));;
});

//Pesanan 3

export const tambah3Pesanan = tambah3Pesanans => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
    realm.write(()=> {
      realm.create(PESANAN3_SCHEMA, tambah3Pesanans);
      resolve(tambah3Pesanans);
    });
  }).catch((error)=> reject(error));
});

export const queryAllPesanan3 = () => new Promise((resolve, reject) =>{
  Realm.open(databaseOptions).then(realm => {
    let allPesanan3 = realm.objects(PESANAN3_SCHEMA);
    resolve(allPesanan3);
  }).catch((error) => {
    reject(error);
  });;
});

export const deletePesanan3 = pesananId3 => new Promise((resolve, reject) =>{
  Realm.open(databaseOptions).then(realm => {
    realm.write(() => {
      let deletingPesanan3 = realm.objectForPrimaryKey (PESANAN3_SCHEMA, pesananId3);
      realm.delete(deletingPesanan3);
      resolve();
    });
  }).catch((error) => reject(error));;
});

//Pesanan 4

export const tambah4Pesanan = tambah4Pesanans => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
    realm.write(()=> {
      realm.create(PESANAN4_SCHEMA, tambah4Pesanans);
      resolve(tambah4Pesanans);
    });
  }).catch((error)=> reject(error));
});

export const queryAllPesanan4 = () => new Promise((resolve, reject) =>{
  Realm.open(databaseOptions).then(realm => {
    let allPesanan4 = realm.objects(PESANAN4_SCHEMA);
    resolve(allPesanan4);
  }).catch((error) => {
    reject(error);
  });;
});

export const deletePesanan4 = pesananId4 => new Promise((resolve, reject) =>{
  Realm.open(databaseOptions).then(realm => {
    realm.write(() => {
      let deletingPesanan4 = realm.objectForPrimaryKey (PESANAN4_SCHEMA, pesananId4);
      realm.delete(deletingPesanan4);
      resolve();
    });
  }).catch((error) => reject(error));;
});


//Pesanan 5

export const tambah5Pesanan = tambah5Pesanans => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
    realm.write(()=> {
      realm.create(PESANAN5_SCHEMA, tambah5Pesanans);
      resolve(tambah5Pesanans);
    });
  }).catch((error)=> reject(error));
});

export const queryAllPesanan5 = () => new Promise((resolve, reject) =>{
  Realm.open(databaseOptions).then(realm => {
    let allPesanan5 = realm.objects(PESANAN5_SCHEMA);
    resolve(allPesanan5);
  }).catch((error) => {
    reject(error);
  });;
});

export const deletePesanan5 = pesananId5 => new Promise((resolve, reject) =>{
  Realm.open(databaseOptions).then(realm => {
    realm.write(() => {
      let deletingPesanan5 = realm.objectForPrimaryKey (PESANAN5_SCHEMA, pesananId5);
      realm.delete(deletingPesanan5);
      resolve();
    });
  }).catch((error) => reject(error));;
});

//Pesanan 6

export const tambah6Pesanan = tambah6Pesanans => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
    realm.write(()=> {
      realm.create(PESANAN6_SCHEMA, tambah6Pesanans);
      resolve(tambah6Pesanans);
    });
  }).catch((error)=> reject(error));
});

export const queryAllPesanan6 = () => new Promise((resolve, reject) =>{
  Realm.open(databaseOptions).then(realm => {
    let allPesanan6 = realm.objects(PESANAN6_SCHEMA);
    resolve(allPesanan6);
  }).catch((error) => {
    reject(error);
  });;
});

export const deletePesanan6 = pesananId6 => new Promise((resolve, reject) =>{
  Realm.open(databaseOptions).then(realm => {
    realm.write(() => {
      let deletingPesanan6 = realm.objectForPrimaryKey (PESANAN6_SCHEMA, pesananId6);
      realm.delete(deletingPesanan6);
      resolve();
    });
  }).catch((error) => reject(error));;
});


//Produk

export const queryAllProduk = () => new Promise((resolve, reject) =>{
  Realm.open(databaseOptions).then(realm => {
    let allProduk = realm.objects(PRODUK2_SCHEMA);
    resolve(allProduk);
  }).catch((error) => {
    reject(error);
  });;
});

export const IsiProduk = isiProduks => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
    realm.write(()=> {
      realm.create(PRODUK2_SCHEMA, isiProduks);
      resolve(isiProduks);
    });
  }).catch((error)=> reject(error));
});

export const deleteProduk = produkId => new Promise((resolve, reject) =>{
  Realm.open(databaseOptions).then(realm => {
    realm.write(() => {
      let deletingProduk = realm.objectForPrimaryKey (PRODUK2_SCHEMA, produkId);
      realm.delete(deletingProduk);
      resolve();
    });
  }).catch((error) => reject(error));;
});

export const updateProduk = produkUp => new Promise((resolve, reject)=>{
  Realm.open(databaseOptions).then(realm => {
    realm.write(() => {
      let updatingProduk = realm.objectForPrimaryKey(PRODUK2_SCHEMA, produkUp.produk_id);
      updatingProduk.nama_produk= produkUp.nama_produk;
      updatingProduk.terjual_produk= produkUp.terjual_produk;
      updatingProduk.tersisa_produk= produkUp.tersisa_produk;
      updatingProduk.foto_produk= produkUp.foto_produk;
      updatingProduk.harga_produk= produkUp.harga_produk;
      resolve();
    });
  }).catch((error) => reject(error));;
});

//Chat Tamplate

export const insertNewChatTemplate = newChatTemplate => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
    realm.write(()=> {
      realm.create(CHATTEMPLATE_SCHEMA, newChatTemplate);
      resolve(newChatTemplate);
    });
  }).catch((error)=> reject(error));
});

export const updateChatTemplate = chatTemplate => new Promise((resolve, reject)=>{
  Realm.open(databaseOptions).then(realm => {
    realm.write(() => {
      let updatingChatTemplate = realm.objectForPrimaryKey(CHATTEMPLATE_SCHEMA, chatTemplate.chat_id);
      updatingChatTemplate.chat_judul = chatTemplate.chat_judul;
      updatingChatTemplate.chat_isi = chatTemplate.chat_isi;
      resolve();
    });
  }).catch((error) => reject(error));;
});

export const deleteChatTemplate = chatTampateId => new Promise((resolve, reject) =>{
  Realm.open(databaseOptions).then(realm => {
    realm.write(() => {
      let deletingChatTemplate = realm.objectForPrimaryKey (CHATTEMPLATE_SCHEMA, chatTampateId);
      realm.delete(deletingChatTemplate);
      resolve();
    });
  }).catch((error) => reject(error));;
});

export const deleteAllChatTemplate = () => new Promise ((resolve, reject) => {
  Realm.open(databaseOptions).then(realm =>{
    realm.write(() => {
      let allChatTemplate = realm.objects(CHATTEMPLATE_SCHEMA);
      realm.delete(allChatTemplate);
      resolve();
    });
  }).catch((error) => reject(error));;
});

export const queryAllChatTemplate = () => new Promise((resolve, reject) =>{
  Realm.open(databaseOptions).then(realm => {
    let allChatTemplate = realm.objects(CHATTEMPLATE_SCHEMA);
    resolve(allChatTemplate);
  }).catch((error) => {
    reject(error);
  });;
});

export const getChatTemplate = (get_chat) => new Promise((resolve, reject) =>{
  Realm.open(databaseOptions).then(realm => {
    let getChat = realm.objects(CHATTEMPLATE_SCHEMA).filtered('chat_id = '+ get_chat);
    resolve (getChat);
  }).catch((error) => {
    reject(error);
  });;
});

export default new Realm(databaseOptions);

// class PesanTemplate extends Component {
//   constructor(props) {
//     super(props);
//     realm = new Realm({
//       path: 'Aseler.realm',
//       schema: [
//         {
//           name: 'chat_tamplate',
//           properties: {
//             chat_id: { type: 'int', default: 0 },
//             chat_judul: 'string',
//             chat_isi: 'string',
//           },
//         },
//       ],
//     });
//   }
// }
// export default PesanTemplate;

