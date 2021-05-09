import { useState } from "react"

export default function InforPro() {
  let [form, setForm] = useState({
    name:"",
    phone:"",
    UrlFace:"",
    skype:"",
  })
  let [error, setError] = useState({
    name:"",
    phone:"",
    UrlFace:"",
    skype:"",
  })
  function inputChange(e){
    let value = e.target.value
    let name = e.target.name 
    setForm({ ...form, [name]: value });
  }

  function onSubmit(e){
    e.preventDefault()
    let errObj={}
    if (!form.name.trim().replace(/ +/g, " ")) {
      errObj.name = "Vui lòng nhập tên";
    }else if (!/^[A-Za-z\s]+$/.test(form.name)) {
      errObj.name="Tên không đúng định dạng"
    }

    if (!form.phone.trim()) {
      errObj.phone = "Vui lòng nhập số điện thoại";
    } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
      errObj.phone = "Số điện thoại không đúng định dạng";
    }
    
    if (!form.UrlFace.trim()) {
      errObj.UrlFace = "Đường dẫn Facebook không được bỏ trống";
    } else if (
      !/(?:http:\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(\d.*))?([\w\-]*)?/.test(
        form.UrlFace
      )
    ) {
      errObj.UrlFace = "Đường dẫn Facebook không đúng định dạng";
    }

    if(!form.skype.trim()){
       errObj.skype = "Vui lòng nhập tên Skype";
    }

    setError(errObj)

    if (Object.keys(errObj).length === 0) {
      console.log(form);
    }

  }

  return (
    <div className="tab1" >
      <label style={{ flexWrap: "wrap" }}>
        <p>
          Họ và tên<span>*</span>
        </p>
        <input
          value={form.name}
          name="name"
          onChange={inputChange}
          type="text"
          placeholder="Nguyễn Văn A"
        />
        {error.name && (
          <p style={{ paddingLeft: 160 }} className="text-error">
            {error.name}
          </p>
        )}
      </label>

      <label style={{ flexWrap: "wrap" }}>
        <p>
          Số điện thoại<span>*</span>
        </p>
        <input
          value={form.phone}
          name="phone"
          onChange={inputChange}
          type="text"
          placeholder="0949******"
        />
        {error.phone && (
          <p style={{ paddingLeft: 160 }} className="text-error">
            {error.phone}
          </p>
        )}
      </label>

      <label style={{ flexWrap: "wrap" }}>
        <p>
          Email<span>*</span>
        </p>
        <input defaultValue="vuong.dang@dna.vn" disabled type="text" />
      </label>

      <label style={{ flexWrap: "wrap" }}>
        <p>
          Facebook<span>*</span>
        </p>
        <input
          value={form.UrlFace}
          name="UrlFace"
          onChange={inputChange}
          type="text"
          placeholder="Facebook url"
        />
        {error.UrlFace && (
          <p style={{ paddingLeft: 160 }} className="text-error">
            {error.UrlFace}
          </p>
        )}
      </label>

      <label style={{ flexWrap: "wrap" }}>
        <p>
          Skype<span>*</span>
        </p>
        <input
          value={form.skype}
          name="skype"
          onChange={inputChange}
          type="text"
          placeholder="Skype url"
        />
        {error.skype && (
          <p style={{ paddingLeft: 160 }} className="text-error">
            {error.skype}
          </p>
        )}
      </label>
      <div onClick={onSubmit} className="btn main rect">
        LƯU LẠI
      </div>
    </div>
  );
}
