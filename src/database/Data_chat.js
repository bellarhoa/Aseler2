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
export const USER_SCHEMA = "User";
export const PESANAN_SCHEMA = "Pesanan";
export const PRODUK_SCHEMA = "Produk";
export const CHATTEMPLATE_SCHEMA = "ChatTemplate";
export const CHAT_SCHEMA = "Chat";
let realm;

export const UserSchema = {
  name: USER_SCHEMA,
  primaryKey : 'user_id',
  properties: {
    user_id: {type: 'int', default: 0},
    nama_user: 'string',
    nama_toko : 'string',
    foto_produk: 'string',
    url_user : 'string',
    // email : 'string',
  }
};

export const PesananSchema = {
  name: PESANAN_SCHEMA,
  primaryKey : 'pesanan_id',
  properties: {
    pesanan_id: {type: 'int', default: 0},
    nama_pelanggan: 'string',
    alamat_pelanggan : 'string',
    notelp_pelanggan : 'string',
    status_pesanan : 'string',
    jumlah_produk : 'string',
    total_harga : 'string',
    metode_pembayaran: 'string',
    biaya_pengiriman: 'string',
    foto_produk: 'string',
    url_user : 'string',
  }
};

export const ProdukSchema = {
  name: PRODUK_SCHEMA,
  primaryKey : 'produk_id',
  properties: {
    produk_id: {type: 'int', default: 0},
    nama_produk: 'string',
    tersisa_produk: 'int',
    terjual_produk: 'int',
    foto_produk: 'string',
    // harga_produk: 'string',
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
  schema: [PesananSchema, UserSchema, ProdukSchema, ChatTemplateSchema, ChatSchema],
  schemaVersion: 0,
}

export const queryAllPesanan = () => new Promise((resolve, reject) =>{
  Realm.open(databaseOptions).then(realm => {
    let allPesanan = realm.objects(PESANAN_SCHEMA);
    resolve(allPesanan);
  }).catch((error) => {
    reject(error);
  });;
});

export const queryAllProduk = () => new Promise((resolve, reject) =>{
  Realm.open(databaseOptions).then(realm => {
    let allProduk = realm.objects(PRODUK_SCHEMA);
    resolve(allProduk);
  }).catch((error) => {
    reject(error);
  });;
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

