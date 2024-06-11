function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let fano = document.getElementById("txtano");
  var res = document.getElementById("resultado");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    alert("[ERROR] Verifique os dados e tente novamente");
  } else {
    let fsex = document.getElementsByName("radsex");
    let idade = ano - Number(fano.value);
    let img = document.createElement("img");
    img.setAttribute("id", "foto");

    let genero = "";
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "/imagem/bebe homem.jpg");
      } else if (idade >= 10 && idade < 21) {
        img.setAttribute("src", "/imagem/Foto-Jovem-M.jpg");
      } else if (idade >= 21 && idade < 50) {
        img.setAttribute("src", "/imagem/foto-Homem adulto.jpg");
      } else if (idade >= 60 && idade < 110) {
        img.setAttribute("src", "/imagem/idoso.jpg");
      } else if (idade > 110) {
        img.setAttribute("src", "/imagem/caixao.jpg");
      }
    } else if (fsex[1].checked) {
      genero = "mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "/imagem/bebe mulher.jpg");
      } else if (idade >= 10 && idade < 21) {
        img.setAttribute("src", "/imagem/Foto-jovem-F.jpg");
      } else if (idade >= 21 && idade < 50) {
        img.setAttribute("src", "/imagem/Foto Mulher adulta.jpg");
      } else if (idade >= 60 && idade < 110) {
        img.setAttribute("src", "/imagem/idosa.jpg");
      } else if (idade > 110) {
        img.setAttribute("src", "/imagem/caixao.jpg");
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} Anos`;
    res.appendChild(img);
  }
}
