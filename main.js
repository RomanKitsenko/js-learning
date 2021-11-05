let password = "ghg_11217";

if ((password.length > 4 && password.includes("-")) || password.includes("_")) {
  console.log("Пароль достаточно надежный");
} else {
  console.log("Пароль недостаточно надежный");
}
