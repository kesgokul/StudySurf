import * as use from "@tensorflow-models/universal-sentence-encoder";
import * as tf from "@tensorflow/tfjs";

async function makeFileObj(file) {
  try {
    const fileName = file.slice(1);
    const fetchedFile = await fetch(`${file}`);

    const blob = await fetchedFile.blob();
    const fileObj = new File([blob], `${fileName}`, { type: "text/plain" });
    return fileObj;
  } catch (e) {
    reject(e);
  }
}

async function parseText(file) {
  const fileObj = await makeFileObj(file);
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (evt) => {
      resolve(evt.target.result);
    };

    reader.onerror = (evt) => {
      reject(evt.target.error);
    };

    reader.readAsText(fileObj);
  });
}

function cosinesim(arr1, arr2) {
  (arr1 = arr1[0]), (arr2 = arr2[0]);
  var dotproduct = 0;
  var res1 = 0;
  var res2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    dotproduct += arr1[i] * arr2[i];
    res1 += arr1[i] * arr1[i];
    res2 += arr2[i] * arr2[i];
  }
  res1 = Math.sqrt(res1);
  res2 = Math.sqrt(res2);
  var similarity = dotproduct / (res1 * res2);
  return similarity;
}

export async function similarity(file1, file2) {
  //   console.log(file1, file2);
  const text1 = await parseText(file1);
  const text2 = await parseText(file2);

  console.log(text1);
  console.log(text2);
  // Load the model.
  var arr1, arr2;
  const model = await use.load();
  // Embed an array of sentences.
  const sentence1 = [text1];
  const sentence2 = [text2];
  const embeddings1 = await model.embed(sentence1);
  const embeddings2 = await model.embed(sentence2);
  arr1 = embeddings1.arraySync();
  arr2 = embeddings2.arraySync();
  return (cosinesim(arr1, arr2) * 100).toFixed(2);
}
