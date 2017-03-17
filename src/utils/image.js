export const base64 = url => {
  return new Promise((resolve, reject) => {
    let img = new Image();

    img.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
      resolve(canvas.toDataURL("image/jpeg", 1.0));
    };

    img.onerror = err => {
      reject(err);
    };

    img.src = url;
  });
};

export const compress = (imageData, quality = 0.8, maxWidth = 1200) => {
  const image = new Image();
  image.src = imageData;
  let natW = image.naturalWidth;
  let natH = image.naturalHeight;
  const ratio = natH / natW;
  if (natW > maxWidth) {
    natW = maxWidth;
    natH = ratio * maxWidth;
  }

  const canvas = document.createElement("canvas");
  canvas.width = natW;
  canvas.height = natH;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0, natW, natH);
  return canvas.toDataURL("image/jpeg", quality);
};

export const upload = source => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    if (source.target && source.target.files) {
      source = source.target.files[0];
    }

    reader.onloadend = () => {
      resolve({source, result: reader.result});
    };

    reader.onerror = err => {
      reject(err);
    };

    reader.readAsDataURL(source);
  });
};