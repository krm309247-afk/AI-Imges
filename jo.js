const key = "cfdbbba847c24d04830dd585368c81fc";
const imges = document.getElementById("imges");
const input = document.getElementById("inp");

let btn = document.getElementById("bt");

const getImges = async () => {
  // request To api
  const ap = await fetch("https://gateway.pixazo.ai/sd3/v1/getData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": `${key}`,
    },
    body: JSON.stringify({
      prompt: input.value,
      negative_prompt: "Low-quality, blurry image, cartoonish",
      width: 512,
      height: 512,
      n: 3,
    }),
  })
    .then((im) => im.json())

    .then((list) => {
      // this Array

      const daat = [list.imageUrl, list.imageUrl, list.imageUrl];

      imges.innerHTML = "";
      daat.map((e) => {
        // this div
        const cont = document.createElement("div");
        imges.append(cont);
        // this img
        const img = document.createElement("img");
        img.src = e;
        cont.append(img);
      });
    });
  input.value = "";
};
