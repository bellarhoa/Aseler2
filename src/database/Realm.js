import Realm from 'realm';
export const USER_SCHEMA = 'User';
// 0 = belum bayar
// 1 = belum konfirmasi
// 2 = belum kirim
// 3 = selesai
// -1 = dibatalkan
export const PESANAN0_SCHEMA = 'Pesanan0';
export const PESANAN1_SCHEMA = 'Pesanan1';
export const PESANAN2_SCHEMA = 'Pesanan2';
export const PESANAN3_SCHEMA = 'Pesanan3';
export const PESANANMIN1_SCHEMA = 'PesananMin1';
export const PRODUK_SCHEMA = 'Produk';
export const CHATTEMPLATE_SCHEMA = 'ChatTemplate';

export const UserSchema = {
  name: USER_SCHEMA,
  primaryKey: 'user_id',
  properties: {
    user_id: {type: 'int', default: 0},
    nama_user: 'string',
    nama_toko: 'string',
    foto_produk: 'string',
    url_user: 'string',
    email: 'string',
    password_user: 'string',
    ulangipassword_user: 'string',
    userToken: 'string',
    pemasukkan_user: 'string',
  },
};

export const PesananSchema0 = {
  name: PESANAN0_SCHEMA,
  primaryKey: 'pesanan_id',
  properties: {
    pesanan_id: {type: 'int', default: 0},
    nama_pelanggan: 'string',
    alamat_pelanggan: 'string',
    notelp_pelanggan: 'string',
    status_pesanan: 'string',
    metode_pembayaran: 'string',
    jumlah_produk: 'string',
    foto_produk: 'string',
    namaproduk_pesanan: 'string',
    hargaproduk_pesanan: 'string',
    modelproduk_pesanan: 'string',
    gambarproduk_pesanan: 'string',
    biaya_pengiriman: 'string',
    total_harga: 'string',
    tanggal_pesan: 'string',
  },
};

export const PesananSchema1 = {
  name: PESANAN1_SCHEMA,
  primaryKey: 'pesanan_id',
  properties: {
    pesanan_id: {type: 'int', default: 0},
    nama_pelanggan: 'string',
    alamat_pelanggan: 'string',
    notelp_pelanggan: 'string',
    status_pesanan: 'string',
    metode_pembayaran: 'string',
    jumlah_produk: 'string',
    foto_produk: 'string',
    namaproduk_pesanan: 'string',
    hargaproduk_pesanan: 'string',
    modelproduk_pesanan: 'string',
    gambarproduk_pesanan: 'string',
    biaya_pengiriman: 'string',
    total_harga: 'string',
    tanggal_pesan: 'string',
  },
};

export const PesananSchema2 = {
  name: PESANAN2_SCHEMA,
  primaryKey: 'pesanan_id',
  properties: {
    pesanan_id: {type: 'int', default: 0},
    nama_pelanggan: 'string',
    alamat_pelanggan: 'string',
    notelp_pelanggan: 'string',
    status_pesanan: 'string',
    metode_pembayaran: 'string',
    jumlah_produk: 'string',
    foto_produk: 'string',
    namaproduk_pesanan: 'string',
    hargaproduk_pesanan: 'string',
    modelproduk_pesanan: 'string',
    gambarproduk_pesanan: 'string',
    biaya_pengiriman: 'string',
    total_harga: 'string',
    tanggal_pesan: 'string',
  },
};

export const PesananSchema3 = {
  name: PESANAN3_SCHEMA,
  primaryKey: 'pesanan_id',
  properties: {
    pesanan_id: {type: 'int', default: 0},
    nama_pelanggan: 'string',
    alamat_pelanggan: 'string',
    notelp_pelanggan: 'string',
    status_pesanan: 'string',
    metode_pembayaran: 'string',
    jumlah_produk: 'string',
    foto_produk: 'string',
    namaproduk_pesanan: 'string',
    hargaproduk_pesanan: 'string',
    modelproduk_pesanan: 'string',
    gambarproduk_pesanan: 'string',
    biaya_pengiriman: 'string',
    total_harga: 'string',
    tanggal_pesan: 'string',
  },
};

export const PesananSchemaMin1 = {
  name: PESANANMIN1_SCHEMA,
  primaryKey: 'pesanan_id',
  properties: {
    pesanan_id: {type: 'int', default: 0},
    nama_pelanggan: 'string',
    alamat_pelanggan: 'string',
    notelp_pelanggan: 'string',
    status_pesanan: 'string',
    metode_pembayaran: 'string',
    jumlah_produk: 'string',
    foto_produk: 'string',
    namaproduk_pesanan: 'string',
    hargaproduk_pesanan: 'string',
    modelproduk_pesanan: 'string',
    gambarproduk_pesanan: 'string',
    biaya_pengiriman: 'string',
    total_harga: 'string',
    tanggal_pesan: 'string',
  },
};

export const ProdukSchema = {
  name: PRODUK_SCHEMA,
  primaryKey: 'produk_id',
  properties: {
    produk_id: {type: 'int', default: 0},
    nama_produk: 'string',
    tersisa_produk: 'int',
    terjual_produk: 'int',
    foto_produk: 'string',
    harga_produk: 'string',
  },
};

export const ChatTemplateSchema = {
  name: CHATTEMPLATE_SCHEMA,
  primaryKey: 'chat_id',
  properties: {
    chat_id: {type: 'int', default: 0},
    chat_judul: 'string',
    chat_isi: 'string',
    creationDate: 'date',
  },
};

const databaseOptions = {
  path: 'AselerApp.realm',
  schema: [
    PesananSchema0,
    PesananSchema1,
    PesananSchema2,
    PesananSchema3,
    PesananSchemaMin1,
    UserSchema,
    ProdukSchema,
    ChatTemplateSchema,
  ],
  schemaVersion: 0,
};

export const tambahUser = (userObject) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          realm.create(USER_SCHEMA, userObject);
          resolve(userObject);
        });
      })
      .catch((error) => reject(error));
  });

export const queryAllUser = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        let allUser = realm.objects(USER_SCHEMA);
        resolve(allUser);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const filterUsers = (namausers) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        let filteredUsers = realm
          .objects(USER_SCHEMA)
          .filtered(`nama_user == "${namausers}"`); //[c] = case insensitive
        resolve(filteredUsers);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const updateUser = (userUp) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          let updatingUser = realm.objectForPrimaryKey(
            USER_SCHEMA,
            userUp.user_id,
          );
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
      })
      .catch((error) => reject(error));
  });

export const deleteUser = (userId) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          let deletingUser = realm.objectForPrimaryKey(USER_SCHEMA, userId);
          realm.delete(deletingUser);
          resolve();
        });
      })
      .catch((error) => reject(error));
  });

export const tambahPesanan0 = (pesananObject) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          realm.create(PESANAN0_SCHEMA, pesananObject);
          resolve(pesananObject);
        });
      })
      .catch((error) => reject(error));
  });

export const queryAllPesanan0 = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        let allPesanan = realm.objects(PESANAN0_SCHEMA);
        resolve(allPesanan);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const deletePesanan0 = (pesananId) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          let deletingPesanan = realm.objectForPrimaryKey(
            PESANAN0_SCHEMA,
            pesananId,
          );
          realm.delete(deletingPesanan);
          resolve();
        });
      })
      .catch((error) => reject(error));
  });

export const tambahPesanan1 = (pesananObject) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          realm.create(PESANAN1_SCHEMA, pesananObject);
          resolve(pesananObject);
        });
      })
      .catch((error) => reject(error));
  });

export const queryAllPesanan1 = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        let allPesanan = realm.objects(PESANAN1_SCHEMA);
        resolve(allPesanan);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const deletePesanan1 = (pesananId) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          let deletingPesanan = realm.objectForPrimaryKey(
            PESANAN1_SCHEMA,
            pesananId,
          );
          realm.delete(deletingPesanan);
          resolve();
        });
      })
      .catch((error) => reject(error));
  });

export const tambahPesanan2 = (pesananObject) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          realm.create(PESANAN2_SCHEMA, pesananObject);
          resolve(pesananObject);
        });
      })
      .catch((error) => reject(error));
  });

export const queryAllPesanan2 = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        let allPesanan = realm.objects(PESANAN2_SCHEMA);
        resolve(allPesanan);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const deletePesanan2 = (pesananId) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          let deletingPesanan = realm.objectForPrimaryKey(
            PESANAN2_SCHEMA,
            pesananId,
          );
          realm.delete(deletingPesanan);
          resolve();
        });
      })
      .catch((error) => reject(error));
  });

export const tambahPesanan3 = (pesananObject) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          realm.create(PESANAN3_SCHEMA, pesananObject);
          resolve(pesananObject);
        });
      })
      .catch((error) => reject(error));
  });

export const queryAllPesanan3 = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        let allPesanan = realm.objects(PESANAN3_SCHEMA);
        resolve(allPesanan);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const deletePesanan3 = (pesananId) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          let deletingPesanan = realm.objectForPrimaryKey(
            PESANAN3_SCHEMA,
            pesananId,
          );
          realm.delete(deletingPesanan);
          resolve();
        });
      })
      .catch((error) => reject(error));
  });

export const tambahPesananMin1 = (pesananObject) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          realm.create(PESANANMIN1_SCHEMA, pesananObject);
          resolve(pesananObject);
        });
      })
      .catch((error) => reject(error));
  });

export const queryAllPesananMin1 = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        let allPesanan = realm.objects(PESANANMIN1_SCHEMA);
        resolve(allPesanan);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const deletePesananMin1 = (pesananId) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          let deletingPesanan = realm.objectForPrimaryKey(
            PESANANMIN1_SCHEMA,
            pesananId,
          );
          realm.delete(deletingPesanan);
          resolve();
        });
      })
      .catch((error) => reject(error));
  });

export const queryAllProduk = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        let allProduk = realm.objects(PRODUK_SCHEMA);
        resolve(allProduk);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const IsiProduk = (isiProduks) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          realm.create(PRODUK_SCHEMA, isiProduks);
          resolve(isiProduks);
        });
      })
      .catch((error) => reject(error));
  });

export const deleteProduk = (produkId) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          let deletingProduk = realm.objectForPrimaryKey(
            PRODUK_SCHEMA,
            produkId,
          );
          realm.delete(deletingProduk);
          resolve();
        });
      })
      .catch((error) => reject(error));
  });

export const updateProduk = (produkUp) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          let updatingProduk = realm.objectForPrimaryKey(
            PRODUK_SCHEMA,
            produkUp.produk_id,
          );
          updatingProduk.nama_produk = produkUp.nama_produk;
          updatingProduk.terjual_produk = produkUp.terjual_produk;
          updatingProduk.tersisa_produk = produkUp.tersisa_produk;
          updatingProduk.foto_produk = produkUp.foto_produk;
          updatingProduk.harga_produk = produkUp.harga_produk;
          resolve();
        });
      })
      .catch((error) => reject(error));
  });

export const insertNewChatTemplate = (newChatTemplate) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          realm.create(CHATTEMPLATE_SCHEMA, newChatTemplate);
          resolve(newChatTemplate);
        });
      })
      .catch((error) => reject(error));
  });

export const updateChatTemplate = (chatTemplate) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          let updatingChatTemplate = realm.objectForPrimaryKey(
            CHATTEMPLATE_SCHEMA,
            chatTemplate.chat_id,
          );
          updatingChatTemplate.chat_judul = chatTemplate.chat_judul;
          updatingChatTemplate.chat_isi = chatTemplate.chat_isi;
          resolve();
        });
      })
      .catch((error) => reject(error));
  });

export const deleteChatTemplate = (chatTampateId) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          let deletingChatTemplate = realm.objectForPrimaryKey(
            CHATTEMPLATE_SCHEMA,
            chatTampateId,
          );
          realm.delete(deletingChatTemplate);
          resolve();
        });
      })
      .catch((error) => reject(error));
  });

export const deleteAllChatTemplate = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          let allChatTemplate = realm.objects(CHATTEMPLATE_SCHEMA);
          realm.delete(allChatTemplate);
          resolve();
        });
      })
      .catch((error) => reject(error));
  });

export const queryAllChatTemplate = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        let allChatTemplate = realm.objects(CHATTEMPLATE_SCHEMA);
        resolve(allChatTemplate);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const getChatTemplate = (get_chat) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        let getChat = realm
          .objects(CHATTEMPLATE_SCHEMA)
          .filtered('chat_id = ' + get_chat);
        resolve(getChat);
      })
      .catch((error) => {
        reject(error);
      });
  });

export default new Realm(databaseOptions);
