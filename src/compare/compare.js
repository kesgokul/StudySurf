import {} from "@tensorflow/tfjs";
import { model } from "@tensorflow-models/universal-sentence-encoder";

function cosinesim(arr1, arr2) {
  (arr1 = arr1[0]), (arr2 = arr2[0]);
  var dotproduct = 0;
  var res1 = 0;
  var res2 = 0;
  for (i = 0; i < arr1.length; i++) {
    dotproduct += arr1[i] * arr2[i];
    res1 += arr1[i] * arr1[i];
    res2 += arr2[i] * arr2[i];
  }
  res1 = Math.sqrt(res1);
  res2 = Math.sqrt(res2);
  var similarity = dotproduct / (res1 * res2);
  return similarity;
}

export function similarity() {
  // Load the model.
  var arr1, arr2;
  use.load().then((model) => {
    // Embed an array of sentences.
    const sentence1 = [text1];
    const sentence2 = [text2];
    model.embed(sentence1).then((embeddings) => {
      // `embeddings` is a 2D tensor consisting of the 512-dimensional embeddings for each sentence.
      // So in this example `embeddings` has the shape [2, 512].
      arr1 = embeddings.arraySync();
      model.embed(sentence2).then((embeddings) => {
        // `embeddings` is a 2D tensor consisting of the 512-dimensional embeddings for each sentence.
        // So in this example `embeddings` has the shape [2, 512].
        arr2 = embeddings.arraySync();
        return (cosinesim(arr1, arr2) * 100).toFixed(2);
      });
    });
  });
}
