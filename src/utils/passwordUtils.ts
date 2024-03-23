// const bcrypt = require("bcryptjs");

// const saltRounds = 10; // 솔트의 라운드 수

// // 비밀번호를 해싱하는 함수
// const hashPassword = async (password) => {
//   try {
//     const salt = await bcrypt.genSalt(saltRounds);
//     const hash = await bcrypt.hash(password, salt);
//     return hash;
//   } catch (error) {
//     // 에러 처리
//     console.error("Error hashing password:", error);
//     throw error;
//   }
// };

// // 비밀번호 비교 함수
// const comparePassword = async (password, hashedPassword) => {
//   try {
//     const isMatch = await bcrypt.compare(password, hashedPassword);
//     return isMatch;
//   } catch (error) {
//     // 에러 처리
//     console.error("Error comparing passwords:", error);
//     throw error;
//   }
// };
