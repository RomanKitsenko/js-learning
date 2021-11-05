let pass = "-cxcc";

if (pass.length > 4 && (pass.includes("-") || pass.includes("_"))) {
  console.log("Пароль достаточно надежный");
} else {
  console.log("Пароль недостаточно надежный");
}
