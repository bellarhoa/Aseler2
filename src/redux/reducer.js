const initialState = {
  produk: [],
};

//Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_PRODUCT':
      const {
        gambar,
        nama,
        harga,
        stok,
        merek,
        berat,
        kategori,
        variasi,
        deskripsi,
        publik,
      } = action.form;
      return {
        ...state,
        produk: state.produk.concat({
          key: Math.random().toString(),
          gambar: gambar,
          nama: nama,
          harga: harga,
          stok: stok,
          merek: merek,
          berat: berat,
          kategori: kategori,
          variasi: variasi,
          deskripsi: deskripsi,
          publik: publik,
        }),
      };
    case 'DELETE_FORM':
      return {
        ...state,
        formData: state.formData.filter((item) => item.key !== action.key),
      };
    default:
      return state;
  }
};

export default rootReducer;
