1.
const welcome = () => {
  document.getElementById("text").innerHTML =
    "<b>به دنیای جاوااسکریپت خوش امدید</b>";
  document.getElementById("text").style.color = "purple";
};

2.
const Person = {
  firstname: "Niloufar",
  age: 26,
  job: "fullstack-developer",
};
for (let x in Person) {
  console.log(Person[x]);
}

3.
const NewArray = () => {
  const carArr = ["Persia", "Tiba", "Rana", "Cerato", "Dena"];

  console.log(carArr.length);

  for (let i = 0, len = carArr.length; i < len; i++) {
    console.log(carArr[i]);
  }
};

4.
const NowDateTime = () => {
  const now = new Date();
  document.getElementById("date").textContent =
    "تاریخ" + now.toLocaleDateString();
  document.getElementById("time").textContent =
    "زمان" + now.toLocaleTimeString();
};

5.
const testPassword = () => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const password = document.getElementById("password").value;
  const phone = document.getElementById("phone").value;

  console.log("شماره تماس:", phone);
  console.log("پسورد:", password);

  if (passwordRegex.test(password)) {
    alert("پسورد شما امن است");
  } else {
    alert("پسورد شما امن نیست");
  }
};
