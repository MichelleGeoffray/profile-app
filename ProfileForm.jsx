import { useState } from "react";
import style from "../styles/ProfileForm.module.css";

const ProfileForm = () => {
  const [data, setData] = useState({ name: "", title: "", email: "", bio: "" });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const fetchURL = 'https://web.ics.purdue.edu/~zong6/profile-app/send-data.php';
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try{
        const response = await fetch("https://web.ics.purdue.edu/~zong6/profile-app/send-data.php", {
            method: "POST",
            body: formData,
        });
        const result = await response.json();
        console.log(result.message);
    }catch(error){
        console.log(error);
    }

  };

  return (
    <form onSubmit={handleSubmit} className={style["profile-form"]}>
      <div className={style["profile-form__group"]}>
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          placeholder="Name"
          required
          onChange={handleChange}
        />
      </div>
      <div className={style["profile-form__group"]}>
        <input
          type="text"
          id="title"
          name="title"
          value={data.title}
          required
          onChange={handleChange}
        />
      </div>
      <div className={style["profile-form__group"]}>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          required
          onChange={handleChange}
        />
      </div>
      <div className={style["profile-form__group"]}>
        <textarea
          id="bio"
          name="bio"
          required
          value={data.bio}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProfileForm;