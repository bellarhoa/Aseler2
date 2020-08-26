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
// export const USER_SCHEMA = "User";
export const USER2_SCHEMA = "User2";
// export const PESANAN_SCHEMA = "Pesanan";
export const PESANAN2_SCHEMA = "Pesanan2";
export const PRODUK2_SCHEMA = "Produk2";
export const CHATTEMPLATE_SCHEMA = "ChatTemplate";
export const CHAT_SCHEMA = "Chat";
let realm;

// export const UserSchema = {
//   name: USER_SCHEMA,
//   primaryKey : 'user_id',
//   properties: {
//     user_id: {type: 'int', default: 0},
//     nama_user: 'string',
//     nama_toko : 'string',
//     foto_produk: 'string',
//     url_user : 'string',
//     // email : 'string',
//   }
// };

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

// export const PesananSchema = {
//   name: PESANAN_SCHEMA,
//   primaryKey : 'pesanan_id',
//   properties: {
//     pesanan_id: {type: 'int', default: 0},
//     nama_pelanggan: 'string',
//     alamat_pelanggan : 'string',
//     notelp_pelanggan : 'string',
//     status_pesanan : 'string',
//     jumlah_produk : 'string',
//     total_harga : 'string',
//     metode_pembayaran: 'string',
//     biaya_pengiriman: 'string',
//     foto_produk: 'string',
//     url_user : 'string',
//   }
// };

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
  schema: [Pesanan2Schema, User2Schema, Produk2Schema, ChatTemplateSchema, ChatSchema],
  schemaVersion: 0,
}

export const tambahUser = tambahUsers => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
    realm.write(()=> {
      realm.create(USER2_SCHEMA, tambahUsers);
      resolve(tambahUsers);
    });
  }).catch((error)=> reject(error));
});

export const queryAllUser = () => new Promise((resolve, reject) =>{
  Realm.open(databaseOptions).then(realm => {
    let allUser = realm.objects(USER2_SCHEMA);
    resolve(allUser);
  }).catch((error) => {
    reject(error);
  });;
});

export const updateUser = userUp => new Promise((resolve, reject)=>{
  Realm.open(databaseOptions).then(realm => {
    realm.write(() => {
      let updatingUser = realm.objectForPrimaryKey(USER2_SCHEMA, userUp.user_id);
      updatingUser.nama_user = userUp.nama_user;
      updatingUser.nama_toko = userUp.nama_toko;
      updatingUser.foto_produk = userUp.foto_produk;
      updatingUser.email = userUp.email;
      updatingUser.password_user = userUp.password_user;
      updatingUser.userToken = userUp.userToken;
      updatingUser.pemasukkan_user = userUp.pemasukkan_user;
      updatingProduk.nama_produk= produkUp.nama_produk;
      resolve();
    });
  }).catch((error) => reject(error));;
});

export const deleteUser = userId => new Promise((resolve, reject) =>{
  Realm.open(databaseOptions).then(realm => {
    realm.write(() => {
      let deletingUser = realm.objectForPrimaryKey (USER2_SCHEMA, userId);
      realm.delete(deletingUser);
      resolve();
    });
  }).catch((error) => reject(error));;
});

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

