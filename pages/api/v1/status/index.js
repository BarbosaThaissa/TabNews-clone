function status(request, response) {
  response
    .status(200)
    .json({
      chave:
        "Em menos de tres meses vou estar trabalhando para uma empresa da california, EUA"
    });
}

export default status;
