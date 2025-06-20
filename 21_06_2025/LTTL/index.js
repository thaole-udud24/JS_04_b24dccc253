

// Hàm cộng hai số
function cong(a, b) {
  return a + b;
}

// Hàm trừ hai số
function tru(a, b) {
  return a - b;
}

// Hàm nhân hai số
function nhan(a, b) {
  return a * b;
}

// Hàm chia hai số
function chia(a, b) {
  if (b === 0) {
    return 'Không thể chia cho 0';
  }
  return a / b;
}

// Gói vào một object và export mặc định
const calcUtils = {
  cong,
  tru,
  nhan,
  chia
};

export default calcUtils;
