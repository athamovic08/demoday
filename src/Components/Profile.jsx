import React, { useState } from "react";
import { Link } from "react-router-dom";
Link
function ProfilePage() {
  const [avatar, setAvatar] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  const [saved, setSaved] = useState(false); // Ma’lumot saqlanganmi

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    if (!firstName || !lastName || !phone || !gender || !city) {
      alert("Пожалуйста, заполните все поля!");
      return;
    }
    setSaved(true);
    alert("Информация успешно сохранена!");
  };

  const handleEdit = () => {
    setSaved(false); // Edit rejimga qaytish
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-6 relative bg-gray-200">
      {/* Хира фон */}
      <div className="absolute inset-0 bg-gray-300 bg-opacity-40 backdrop-blur-md"></div>

      <div className="relative bg-white rounded-3xl shadow-2xl p-8 w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-sky-700 mb-6 text-center">
          Профиль
        </h1>

        {!saved ? (
          // Форма редактирования
          <div className="flex flex-col md:flex-row items-start gap-6 relative">
            <div className="relative">
              <img
                src={avatar || "https://via.placeholder.com/150"}
                alt=""
                className="w-32 h-32 rounded-full border-4 border-sky-300 object-cover shadow-lg"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="absolute bottom-0 right-0 opacity-0 w-32 h-32 cursor-pointer"
              />
            </div>

            <div className="flex-1 space-y-3">
              {/* Имя и Фамилия */}
              <div className="flex gap-3 flex-wrap">
                <input
                  type="text"
                  placeholder="Имя"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="flex-1 border-b-2 border-sky-300 focus:outline-none focus:border-sky-500 text-lg font-semibold bg-transparent"
                />
                <input
                  type="text"
                  placeholder="Фамилия"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="flex-1 border-b-2 border-sky-300 focus:outline-none focus:border-sky-500 text-lg font-semibold bg-transparent"
                />
              </div>

              {/* Другая информация */}
              <div className="flex gap-4 flex-wrap mt-2">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="border-2 border-sky-300 rounded-lg p-2 bg-white"
                >
                  <option value="">Пол</option>
                  <option value="male">Мужской</option>
                  <option value="female">Женский</option>
                  <option value="other">Другое</option>
                </select>

                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="border-2 border-sky-300 rounded-lg p-2 bg-white"
                />

                <input
                  type="tel"
                  placeholder="Телефон"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border-2 border-sky-300 rounded-lg p-2 bg-white"
                />

                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="border-2 border-sky-300 rounded-lg p-2 bg-white"
                >
                  <option value="">Город</option>
                  <option value="Afghanistan">Афганистан</option>
  <option value="Albania">Албания</option>
  <option value="Algeria">Алжир</option>
  <option value="Andorra">Андорра</option>
  <option value="Angola">Ангола</option>
  <option value="Antigua and Barbuda">Антигуа и Барбуда</option>
  <option value="Argentina">Аргентина</option>
  <option value="Armenia">Армения</option>
  <option value="Australia">Австралия</option>
  <option value="Austria">Австрия</option>
  <option value="Azerbaijan">Азербайджан</option>
  <option value="Bahamas">Багамские Острова</option>
  <option value="Bahrain">Бахрейн</option>
  <option value="Bangladesh">Бангладеш</option>
  <option value="Barbados">Барбадос</option>
  <option value="Belarus">Беларусь</option>
  <option value="Belgium">Бельгия</option>
  <option value="Belize">Белиз</option>
  <option value="Benin">Бенин</option>
  <option value="Bhutan">Бутан</option>
  <option value="Bolivia">Боливия</option>
  <option value="Bosnia and Herzegovina">Босния и Герцеговина</option>
  <option value="Botswana">Ботсвана</option>
  <option value="Brazil">Бразилия</option>
  <option value="Brunei">Бруней</option>
  <option value="Bulgaria">Болгария</option>
  <option value="Burkina Faso">Буркина-Фасо</option>
  <option value="Burundi">Бурунди</option>
  <option value="Cabo Verde">Кабо-Верде</option>
  <option value="Cambodia">Камбоджа</option>
  <option value="Cameroon">Камерун</option>
  <option value="Canada">Канада</option>
  <option value="Central African Republic">ЦАР</option>
  <option value="Chad">Чад</option>
  <option value="Chile">Чили</option>
  <option value="China">Китай</option>
  <option value="Colombia">Колумбия</option>
  <option value="Comoros">Коморы</option>
  <option value="Congo, Republic of the">Республика Конго</option>
  <option value="Congo, Democratic Republic of the">ДР Конго</option>
  <option value="Costa Rica">Коста‑Рика</option>
  <option value="Cote d'Ivoire">Кот‑д’Ивуар</option>
  <option value="Croatia">Хорватия</option>
  <option value="Cuba">Куба</option>
  <option value="Cyprus">Кипр</option>
  <option value="Czech Republic">Чехия</option>
  <option value="Denmark">Дания</option>
  <option value="Djibouti">Джибути</option>
  <option value="Dominica">Доминика</option>
  <option value="Dominican Republic">Доминиканская Республика</option>
  <option value="Ecuador">Эквадор</option>
  <option value="Egypt">Египет</option>
  <option value="El Salvador">Сальвадор</option>
  <option value="Equatorial Guinea">Экваториальная Гвинея</option>
  <option value="Eritrea">Эритрея</option>
  <option value="Estonia">Эстония</option>
  <option value="Eswatini">Эсватини</option>
  <option value="Ethiopia">Эфиопия</option>
  <option value="Fiji">Фиджи</option>
  <option value="Finland">Финляндия</option>
  <option value="France">Франция</option>
  <option value="Gabon">Габон</option>
  <option value="Gambia">Гамбия</option>
  <option value="Georgia">Грузия</option>
  <option value="Germany">Германия</option>
  <option value="Ghana">Гана</option>
  <option value="Greece">Греция</option>
  <option value="Grenada">Гренада</option>
  <option value="Guatemala">Гватемала</option>
  <option value="Guinea">Гвинея</option>
  <option value="Guinea‑Bissau">Гвинея‑Бисау</option>
  <option value="Guyana">Гайана</option>
  <option value="Haiti">Гаити</option>
  <option value="Honduras">Гондурас</option>
  <option value="Hungary">Венгрия</option>
  <option value="Iceland">Исландия</option>
  <option value="India">Индия</option>
  <option value="Indonesia">Индонезия</option>
  <option value="Iran">Иран</option>
  <option value="Iraq">Ирак</option>
  <option value="Ireland">Ирландия</option>
  <option value="Israel">Израиль</option>
  <option value="Italy">Италия</option>
  <option value="Jamaica">Ямайка</option>
  <option value="Japan">Япония</option>
  <option value="Jordan">Иордания</option>
  <option value="Kazakhstan">Казахстан</option>
  <option value="Kenya">Кения</option>
  <option value="Kiribati">Кирибати</option>
  <option value="Korea, North">Северная Корея</option>
  <option value="Korea, South">Южная Корея</option>
  <option value="Kosovo">Косово</option>
  <option value="Kuwait">Кувейт</option>
  <option value="Kyrgyzstan">Киргизия</option>
  <option value="Laos">Лаос</option>
  <option value="Latvia">Латвия</option>
  <option value="Lebanon">Ливан</option>
  <option value="Lesotho">Лесото</option>
  <option value="Liberia">Либерия</option>
  <option value="Libya">Ливия</option>
  <option value="Liechtenstein">Лихтенштейн</option>
  <option value="Lithuania">Литва</option>
  <option value="Luxembourg">Люксембург</option>
  <option value="Madagascar">Мадагаскар</option>
  <option value="Malawi">Малави</option>
  <option value="Malaysia">Малайзия</option>
  <option value="Maldives">Мальдивы</option>
  <option value="Mali">Мали</option>
  <option value="Malta">Мальта</option>
  <option value="Marshall Islands">Маршалловы Острова</option>
  <option value="Mauritania">Мавритания</option>
  <option value="Mauritius">Маврикий</option>
  <option value="Mexico">Мексика</option>
  <option value="Micronesia">Микронезия</option>
  <option value="Moldova">Молдова</option>
  <option value="Monaco">Монако</option>
  <option value="Mongolia">Монголия</option>
  <option value="Montenegro">Черногория</option>
  <option value="Morocco">Марокко</option>
  <option value="Mozambique">Мозамбик</option>
  <option value="Myanmar">Мьянма</option>
  <option value="Namibia">Намибия</option>
  <option value="Nauru">Науру</option>
  <option value="Nepal">Непал</option>
  <option value="Netherlands">Нидерланды</option>
  <option value="New Zealand">Новая Зеландия</option>
  <option value="Nicaragua">Никарагуа</option>
  <option value="Niger">Нигер</option>
  <option value="Nigeria">Нигерия</option>
  <option value="North Macedonia">Северная Македония</option>
  <option value="Norway">Норвегия</option>
  <option value="Oman">Оман</option>
  <option value="Pakistan">Пакистан</option>
  <option value="Palau">Палау</option>
  <option value="Panama">Панама</option>
  <option value="Papua New Guinea">Папуа‑Новая Гвинея</option>
  <option value="Paraguay">Парагвай</option>
  <option value="Peru">Перу</option>
  <option value="Philippines">Филиппины</option>
  <option value="Poland">Польша</option>
  <option value="Portugal">Португалия</option>
  <option value="Qatar">Катар</option>
  <option value="Romania">Румыния</option>
  <option value="Russia">Россия</option>
  <option value="Rwanda">Руанда</option>
  <option value="Saint Kitts and Nevis">Сент‑Китс и Невис</option>
  <option value="Saint Lucia">Сент‑Люсия</option>
  <option value="Saint Vincent and the Grenadines">Сент‑Винсент и Гренадины</option>
  <option value="Samoa">Самоа</option>
  <option value="San Marino">Сан‑Марино</option>
  <option value="Sao Tome and Principe">Сан‑Томе и Принсипи</option>
  <option value="Saudi Arabia">Саудовская Аравия</option>
  <option value="Senegal">Сенегал</option>
  <option value="Serbia">Сербия</option>
  <option value="Seychelles">Сейшелы</option>
  <option value="Sierra Leone">Сьерра‑Леоне</option>
  <option value="Singapore">Сингапур</option>
  <option value="Slovakia">Словакия</option>
  <option value="Slovenia">Словения</option>
  <option value="Solomon Islands">Соломоновы Острова</option>
  <option value="Somalia">Сомали</option>
  <option value="South Africa">Южная Африка</option>
  <option value="Spain">Испания</option>
  <option value="Sri Lanka">Шри‑Ланка</option>
  <option value="Sudan">Судан</option>
  <option value="Suriname">Суринам</option>
  <option value="Sweden">Швеция</option>
  <option value="Switzerland">Швейцария</option>
  <option value="Syria">Сирия</option>
  <option value="Taiwan">Тайвань</option>
  <option value="Tanzania">Танзания</option>
  <option value="Thailand">Таиланд</option>
  <option value="Timor‑Leste">Восточный Тимор</option>
  <option value="Togo">Того</option>
  <option value="Tonga">Тонга</option>
  <option value="Trinidad and Tobago">Тринидад и Тобаго</option>
  <option value="Tunisia">Тунис</option>
  <option value="Turkey">Турция</option>
  <option value="Turkmenistan">Туркменистан</option>
  <option value="Tuvalu">Тувалу</option>
  <option value="Uganda">Уганда</option>
  <option value="Ukraine">Украина</option>
  <option value="United Arab Emirates">ОАЭ</option>
  <option value="United Kingdom">Великобритания</option>
  <option value="United States">США</option>
  <option value="Uruguay">Уругвай</option>
  <option value="Uzbekistan">Узбекистан</option>
  <option value="Vanuatu">Вануату</option>
  <option value="Vatican City">Ватикан</option>
  <option value="Venezuela">Венесуэла</option>
  <option value="Vietnam">Вьетнам</option>
  <option value="Yemen">Йемен</option>
  <option value="Zambia">Замбия</option>
  <option value="Zimbabwe">Зимбабве</option>
                </select>
              </div>
            </div>

            {/* Сохранить кнопка справа */}
            <div className="absolute top-26 right-5">
              <button
                onClick={handleSave}
                className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-colors"
              >
                Сохранить
              </button>
            </div>
          </div>
        ) : (
          // Отображение сохраненной информации
          <div className="flex flex-col items-center gap-4 text-center">
            <img
              src={avatar}
              alt=""
              className="w-32 h-32 rounded-full border-4 border-sky-300 object-cover shadow-lg"
            />
            <h2 className="text-xl font-semibold">
              {firstName} {lastName}
            </h2>
            <p>
              <span className="font-semibold">Телефон:</span> {phone}
            </p>
            <p>
              <span className="font-semibold">Дата Рождения:</span> {birthDate}
            </p>
            <p>
              <span className="font-semibold">Пол:</span>{" "}
              {gender === "male"
                ? "Мужской"
                : gender === "female"
                ? "Женский"
                : "Другое"}
            </p>
            <p>
              <span className="font-semibold">Город:</span> {city}
            </p>

            {/* Редактировать профиль */}
            <button
              onClick={handleEdit}
              className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded-full shadow transition-colors"
            >
              Редактировать профиль
            </button>
            <Link to="/cart">
      <button className="h-[35px] w-[150px] rounded-2xl font-bold bg-blue-500">⭐Корзина⭐</button></Link>
          </div>
        )}
      </div>

    </div>
  );
}

export default ProfilePage;
