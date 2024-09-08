# Conversor de Moedas

Este é um projeto simples de conversor de moedas utilizando HTML, CSS e JavaScript. O projeto faz uso de uma API pública, [ExchangeRatesAPI](https://exchangeratesapi.io/), para buscar as taxas de câmbio em tempo real e realizar a conversão entre diferentes moedas. O usuário pode informar o valor que deseja converter e selecionar as moedas de origem e destino.

## Funcionalidades

- Conversão entre várias moedas.
- Interface amigável e simples de usar.
- Atualização em tempo real das taxas de câmbio.
- Utilização da API ExchangeRatesAPI para obter as cotações.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página.
- **CSS**: Estilos e layout da página.
- **JavaScript**: Lógica de conversão e comunicação com a API.

## Instalação

1. Clone este repositório para sua máquina local:

    ```bash
    git clone https://github.com/kadu-jpeg/conversordemoedas.git
    ```

2. Acesse o diretório do projeto:

    ```bash
    cd conversordemoedas
    ```

3. Abra o arquivo `index.html` em seu navegador.

## Como Utilizar

1. Na página inicial, insira o valor que deseja converter.
2. Selecione a moeda de origem e a moeda de destino.
3. Clique no botão **Converter** para obter o valor convertido com base na cotação mais recente.

## Exemplo de Uso

- Se você quiser converter 100 dólares americanos (USD) para euros (EUR), insira "100" no campo de valor, selecione "USD" como moeda de origem e "EUR" como moeda de destino, e clique em **Converter**. O resultado será exibido logo abaixo do formulário.

## API

Este projeto utiliza a API pública ExchangeRatesAPI. Para que o projeto funcione, é necessário obter uma chave de API gratuita:

1. Crie uma conta no [ExchangeRatesAPI](https://exchangeratesapi.io/).
2. Gere uma chave de API gratuita.
3. Adicione sua chave de API no arquivo `script.js` para que as requisições funcionem corretamente:

    ```js
    const apiKey = 'SUA_CHAVE_DE_API';
    ```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias.

---

Desenvolvido por [Kadu](https://github.com/kadu-jpeg).
