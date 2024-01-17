## Cấu hình sử dụng CSS, SASS (93)

1. Tạo GlobalStyles component
2. Cài thư viện SASS: `npm i -D sass`
3. Reset CSS: `npm install --save normalize.css` (thư viện normalize)
4. Default CSS: font-family, font-size, line-height

## Dựng khung layout mặc định (95)

-   cài thư viện classnames: `npm i classnames`

## Cài đặt thư viện tippyjs/react

-   Sử dụng để hiển thị propdown (hiện element con)
    `npm i @tippyjs/react`
-   Popper (người bật lên)

### Thuật ngữ (105)

`debounce` : VD: có chuỗi hành động or viết 1 string liên tục nhưng mình chỉ 1 cái hành động cuối cùng.
- Có VD trong file hooks/useDebounce.jsx

## Tìm Hiểu Và Sử Dụng Thư Viện Axios Trong Dự Án ReactJS (106)
b1: `npm i axios` // cài đặt
b2:







---------------------------------------------
### Phương thức mới
```js
    encodeURIComponent(string) // biên dịch ký tự sang mã hóa
```

```js
    // phương thức startWuth() là kiểm tra chữ cái or ký tự đầu tiền có đúng với tham số truyền vào không trả về true/false
    const string = ' ãnccdscsax'

    console.log(string.startsWith('ã')) // false
    console.log(string.startsWith(' ')) // true
```