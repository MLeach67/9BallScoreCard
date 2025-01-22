let str = ""

const skill1 = (score) => {
  if (score < 3) str = '20-0';
  if (score === 3) str = '19-1';
  if (score === 4) str = '18-2';
  if (score >= 5 && score <= 6) str = '17-3';
  if (score === 7) str = '16-4';
  if (score === 8) str = '15-5';
  if (score >= 9 && score <= 10) str = '14-6';
  if (score === 11) str = '13-7';
  if (score >= 12 && score <= 13) str = '12-8';
  };

const skill2 = (score) => {
  if (score < 4) str = '20-0';
  if (score >= 4 && score <= 5 ) str = '19-1';
  if (score >= 6 && score <= 7 ) str = '18-2';
  if (score === 8) str = '17-3';
  if (score >= 9 && score <= 10 ) str = '16-4';
  if (score >= 11 && score <= 12 ) str = '15-5';
  if (score >= 13 && score <= 14) str = '14-6';
  if (score >= 15 && score <= 16 ) str = '13-7';
  if (score >= 17 && score <= 18) str = '12-8';
  };

const skill3 = (score) => {
  if (score < 5) str = '20-0';
  if (score >= 5 && score <= 6) str = '19-1';
  if (score >= 7 && score <= 9) str = '18-2';
  if (score >= 10 && score <= 11) str = '17-3';
  if (score >= 12 && score <= 14) str = '16-4';
  if (score >= 15 && score <= 16) str = '15-5';
  if (score >= 17 && score <= 19) str = '14-6';
  if (score >= 20 && score <= 21) str = '13-7';
  if (score >= 22 && score <= 24) str = '12-8';
  };

const skill4 = (score) => {
  if (score < 6) str = '20-0';
  if (score >= 6 && score <= 8) str = '19-1';
  if (score >= 9 && score <= 11) str = '18-2';
  if (score >= 12 && score <= 14) str = '17-3';
  if (score >= 15 && score <= 18) str = '16-4';
  if (score >= 19 && score <= 21) str = '15-5';
  if (score >= 22 && score <= 24) str = '14-6';
  if (score >= 25 && score <= 27) str = '13-7';
  if (score >= 28 && score <= 30) str = '12-8';
  };

const skill5 = (score) => {
  if (score < 7) str = '20-0';
  if (score >= 7 && score <= 10) str = '19-1';
  if (score >= 11 && score <= 14) str = '18-2';
  if (score >= 15 && score <= 18) str = '17-3';
  if (score >= 19 && score <= 22) str = '16-4';
  if (score >= 23 && score <= 26) str = '15-5';
  if (score >= 27 && score <= 29) str = '14-6';
  if (score >= 30 && score <= 33) str = '13-7';
  if (score >= 34 && score <= 37) str = '12-8';
  };

const skill6 = (score) => {
  if (score < 9) str = '20-0';
  if (score >= 9 && score <= 12) str = '19-1';
  if (score >= 13 && score <= 17) str = '18-2';
  if (score >= 18 && score <= 22) str = '17-3';
  if (score >= 23 && score <= 27) str = '16-4';
  if (score >= 28 && score <= 31) str = '15-5';
  if (score >= 32 && score <= 36) str = '14-6';
  if (score >= 37 && score <= 40) str = '13-7';
  if (score >= 41 && score <= 45) str = '12-8';
  };

const skill7 = (score) => {
  if (score < 11) str = '20-0';
  if (score >= 11 && score <= 15) str = '19-1';
  if (score >= 16 && score <= 21) str = '18-2';
  if (score >= 22 && score <= 26) str = '17-3';
  if (score >= 27 && score <= 32) str = '16-4';
  if (score >= 33 && score <= 37) str = '15-5';
  if (score >= 38 && score <= 43) str = '14-6';
  if (score >= 44 && score <= 49) str = '13-7';
  if (score >= 50 && score <= 54) str = '12-8';
  };

const skill8 = (score) => {
  if (score < 14) str = '20-0';
  if (score >= 14 && score <= 19) str = '19-1';
  if (score >= 20 && score <= 26) str = '18-2';
  if (score >= 27 && score <= 32) str = '17-3';
  if (score >= 33 && score <= 39) str = '16-4';
  if (score >= 40 && score <= 45) str = '15-5';
  if (score >= 46 && score <= 52) str = '14-6';
  if (score >= 53 && score <= 58) str = '13-7';
  if (score >= 59 && score <= 64) str = '12-8';
  };

const skill9 = (score) => {
  if (score < 18) str = '20-0';
  if (score >= 18 && score <= 24) str = '19-1';
  if (score >= 25 && score <= 31) str = '18-2';
  if (score >= 32 && score <= 38) str = '17-3';
  if (score >= 39 && score <= 46) str = '16-4';
  if (score >= 47 && score <= 53) str = '15-5';
  if (score >= 54 && score <= 60) str = '14-6';
  if (score >= 61 && score <= 67) str = '13-7';
  if (score >= 68 && score <= 74) str = '12-8';
  };

export function getSplit(skill, score) {
  if (skill === '1') skill1(score);
  if (skill === '2') skill2(score);
  if (skill === '3') skill3(score);
  if (skill === '4') skill4(score);
  if (skill === '5') skill5(score);
  if (skill === '6') skill6(score);
  if (skill === '7') skill7(score);
  if (skill === '8') skill8(score);
  if (skill === '9') skill9(score);
  return str;
};

export function flipSplit(str) {
    return str.split("-").reverse().join("-");
};

