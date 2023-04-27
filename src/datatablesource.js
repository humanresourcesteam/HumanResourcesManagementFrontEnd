export const managerColumns = [
  { field: "id", headerName: "ID", width: 30 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (param) => {
      return (
        <div className="cellWithImg">
          <img src={param.row.img} className="cellImg" />
        </div>
      );
    },
  },
  { field: "firtName", headerName: "Firstname", width: 200 },
  { field: "surname", headerName: "Surname", width: 200 },
  { field: "phone", headerName: "Phone", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "address", headerName: "Address", width: 350 },
];

export const managerRows = [
  {
    id: 1,
    firtName: "Melihcan",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    surname: "Ozturk",
    email: "melihcan@gmail.com",
    phone: 5555555555,
    address: "Tüysüzler mahallesi Örnek Sokak No:2/2b",
  },
  {
    id: 2,
    firtName: "Berkin",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    surname: "Yardımcı",
    email: "berkin@gmail.com",
    phone: 5555555555,
    address: "Tüysüzler mahallesi Örnek Sokak No:2/2b",
  },
  {
    id: 12,
    firtName: "Berkin",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    surname: "Yardımcı",
    email: "berkin@gmail.com",
    phone: 5555555555,
    address: "Tüysüzler mahallesi Örnek Sokak No:2/2b",
  },
  {
    id: 22,
    firtName: "Berkin",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    surname: "Yardımcı",
    email: "berkin@gmail.com",
    phone: 5555555555,
    address: "Tüysüzler mahallesi Örnek Sokak No:2/2b",
  },
  {
    id: 32,
    firtName: "Berkin",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    surname: "Yardımcı",
    email: "berkin@gmail.com",
    phone: 5555555555,
    address: "Tüysüzler mahallesi Örnek Sokak No:2/2b",
  },
  {
    id: 6,
    firtName: "Buse",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    surname: "Çankaya",
    email: "berkin@gmail.com",
    phone: 5555555555,
    address: "Tüysüzler mahallesi Örnek Sokak No:2/2b",
  },
  {
    id: 66,
    firtName: "Buse",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    surname: "Çankaya",
    email: "berkin@gmail.com",
    phone: 5555555555,
    address: "Tüysüzler mahallesi Örnek Sokak No:2/2b",
  },
  {
    id: 3,
    firtName: "Furkan Türkmen",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    surname: "Can",
    email: "melihcan@gmail.com",
    phone: 5555555555,
    address: "Tüysüzler mahallesi Örnek Sokak No:2/2b",
  },
  {
    id: 4,
    firtName: "Ali ",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    surname: "Ogutcen",
    email: "aliogutcen@gmail.com",
    phone: 5555555555,
    address: "Tüysüzler mahallesi Örnek Sokak No:2/2b",
  },
  {
    id: 5,
    firtName: "Mert",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",

    surname: "Namsal",
    email: "mertnamsal@gmail.com",
    phone: 5555555555,
    address: "Tüysüzler mahallesi Örnek Sokak No:2/2b",
  },
];
