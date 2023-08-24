const sendDecryptedText = (res, decryptedText) => {
  res.send({
    answer: decryptedText,
  });
};

const sendErrorWithDecrpytion = (res) => {
  res.status(401).send('Error');
};

export default {
  sendErrorWithDecrpytion,
  sendDecryptedText,
};
