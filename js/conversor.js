document.getElementById('resultadoConversao').style.display = 'none';

const apiKey = 'YOUR_API_KEY';
const apiUrl = `https://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}&format=1`;

const moedas = [
    { value: "", name: "Selecione..." },
    { value: "AED", name: "Dirham dos Emirados Árabes Unidos (AED)" },
    { value: "AFN", name: "Afegane Afegão (AFN)" },
    { value: "ALL", name: "Lek Albanês (ALL)" },
    { value: "AMD", name: "Dram Armênio (AMD)" },
    { value: "ANG", name: "Florim das Antilhas Neerlandesas (ANG)" },
    { value: "AOA", name: "Kwanza Angolano (AOA)" },
    { value: "ARS", name: "Peso Argentino (ARS)" },
    { value: "AUD", name: "Dólar Australiano (AUD)" },
    { value: "AWG", name: "Florim Arubano (AWG)" },
    { value: "AZN", name: "Manat Azeri (AZN)" },
    { value: "BAM", name: "Marco Conversível da Bósnia-Herzegovina (BAM)" },
    { value: "BBD", name: "Dólar Barbadense (BBD)" },
    { value: "BDT", name: "Taka de Bangladesh (BDT)" },
    { value: "BGN", name: "Lev Búlgaro (BGN)" },
    { value: "BHD", name: "Dinar do Bahrein (BHD)" },
    { value: "BIF", name: "Franco Burundiano (BIF)" },
    { value: "BMD", name: "Dólar Bermudense (BMD)" },
    { value: "BND", name: "Dólar do Brunei (BND)" },
    { value: "BOB", name: "Boliviano (BOB)" },
    { value: "BRL", name: "Real Brasileiro (BRL)" },
    { value: "BSD", name: "Dólar Bahamense (BSD)" },
    { value: "BTC", name: "Bitcoin (BTC)" },
    { value: "BTN", name: "Ngultrum do Butão (BTN)" },
    { value: "BWP", name: "Pula de Botswana (BWP)" },
    { value: "BYN", name: "Rublo Bielorrusso (BYN)" },
    { value: "BYR", name: "Rublo Bielorrusso Antigo (BYR)" },
    { value: "BZD", name: "Dólar Belizenho (BZD)" },
    { value: "CAD", name: "Dólar Canadense (CAD)" },
    { value: "CDF", name: "Franco Congolês (CDF)" },
    { value: "CHF", name: "Franco Suíço (CHF)" },
    { value: "CLF", name: "Unidade de Fomento Chilena (CLF)" },
    { value: "CLP", name: "Peso Chileno (CLP)" },
    { value: "CNY", name: "Yuan Chinês (CNY)" },
    { value: "CNH", name: "Yuan Chinês Offshore (CNH)" },
    { value: "COP", name: "Peso Colombiano (COP)" },
    { value: "CRC", name: "Colón Costarriquenho (CRC)" },
    { value: "CUC", name: "Peso Cubano Conversível (CUC)" },
    { value: "CUP", name: "Peso Cubano (CUP)" },
    { value: "CVE", name: "Escudo Cabo-Verdiano (CVE)" },
    { value: "CZK", name: "Coroa Checa (CZK)" },
    { value: "DJF", name: "Franco Djiboutiano (DJF)" },
    { value: "DKK", name: "Coroa Dinamarquesa (DKK)" },
    { value: "DOP", name: "Peso Dominicano (DOP)" },
    { value: "DZD", name: "Dinar Argelino (DZD)" },
    { value: "EGP", name: "Libra Egípcia (EGP)" },
    { value: "ERN", name: "Nakfa da Eritreia (ERN)" },
    { value: "ETB", name: "Birr Etíope (ETB)" },
    { value: "EUR", name: "Euro (EUR)" },
    { value: "FJD", name: "Dólar Fijiano (FJD)" },
    { value: "FKP", name: "Libra das Ilhas Falkland (FKP)" },
    { value: "GBP", name: "Libra Esterlina (GBP)" },
    { value: "GEL", name: "Lari Georgiano (GEL)" },
    { value: "GGP", name: "Libra de Guernsey (GGP)" },
    { value: "GHS", name: "Cedi Ganês (GHS)" },
    { value: "GIP", name: "Libra de Gibraltar (GIP)" },
    { value: "GMD", name: "Dalasi Gambiano (GMD)" },
    { value: "GNF", name: "Franco Guineano (GNF)" },
    { value: "GTQ", name: "Quetzal Guatemalteco (GTQ)" },
    { value: "GYD", name: "Dólar Guianense (GYD)" },
    { value: "HKD", name: "Dólar de Hong Kong (HKD)" },
    { value: "HNL", name: "Lempira Hondurenha (HNL)" },
    { value: "HRK", name: "Kuna Croata (HRK)" },
    { value: "HTG", name: "Gourde Haitiano (HTG)" },
    { value: "HUF", name: "Forint Húngaro (HUF)" },
    { value: "IDR", name: "Rupia Indonésia (IDR)" },
    { value: "ILS", name: "Novo Shekel Israelense (ILS)" },
    { value: "IMP", name: "Libra da Ilha de Man (IMP)" },
    { value: "INR", name: "Rupia Indiana (INR)" },
    { value: "IQD", name: "Dinar Iraquiano (IQD)" },
    { value: "IRR", name: "Rial Iraniano (IRR)" },
    { value: "ISK", name: "Coroa Islandesa (ISK)" },
    { value: "JEP", name: "Libra de Jersey (JEP)" },
    { value: "JMD", name: "Dólar Jamaicano (JMD)" },
    { value: "JOD", name: "Dinar Jordaniano (JOD)" },
    { value: "JPY", name: "Iene Japonês (JPY)" },
    { value: "KES", name: "Xelim Queniano (KES)" },
    { value: "KGS", name: "Som Quirguiz (KGS)" },
    { value: "KHR", name: "Riel Cambojano (KHR)" },
    { value: "KMF", name: "Franco Comorense (KMF)" },
    { value: "KPW", name: "Won Norte-Coreano (KPW)" },
    { value: "KRW", name: "Won Sul-Coreano (KRW)" },
    { value: "KWD", name: "Dinar Kuwaitiano (KWD)" },
    { value: "KYD", name: "Dólar das Ilhas Cayman (KYD)" },
    { value: "KZT", name: "Tenge Cazaque (KZT)" },
    { value: "LAK", name: "Kip Lao (LAK)" },
    { value: "LBP", name: "Libra Libanesa (LBP)" },
    { value: "LKR", name: "Rupia do Sri Lanka (LKR)" },
    { value: "LRD", name: "Dólar Liberiano (LRD)" },
    { value: "LSL", name: "Loti do Lesoto (LSL)" },
    { value: "LTL", name: "Litas Lituano (LTL)" },
    { value: "LVL", name: "Lats Letão (LVL)" },
    { value: "LYD", name: "Dinar Líbio (LYD)" },
    { value: "MAD", name: "Dirham Marroquino (MAD)" },
    { value: "MDL", name: "Leu Moldavo (MDL)" },
    { value: "MGA", name: "Ariary Malgaxe (MGA)" },
    { value: "MKD", name: "Dinar Macedônio (MKD)" },
    { value: "MMK", name: "Quiate de Mianmar (MMK)" },
    { value: "MNT", name: "Tugrik Mongol (MNT)" },
    { value: "MOP", name: "Pataca de Macau (MOP)" },
    { value: "MRO", name: "Ouguiya Mauritana (MRO)" },
    { value: "MUR", name: "Rupia Mauriciana (MUR)" },
    { value: "MVR", name: "Rufiyaa Maldiva (MVR)" },
    { value: "MWK", name: "Kwacha Malauiana (MWK)" },
    { value: "MXN", name: "Peso Mexicano (MXN)" },
    { value: "MYR", name: "Ringgit Malaio (MYR)" },
    { value: "MZN", name: "Metical Moçambicano (MZN)" },
    { value: "NAD", name: "Dólar Namibiano (NAD)" },
    { value: "NGN", name: "Naira Nigeriana (NGN)" },
    { value: "NIO", name: "Córdoba Nicaraguense (NIO)" },
    { value: "NOK", name: "Coroa Norueguesa (NOK)" },
    { value: "NPR", name: "Rupia Nepalesa (NPR)" },
    { value: "NZD", name: "Dólar Neozelandês (NZD)" },
    { value: "OMR", name: "Rial Omanense (OMR)" },
    { value: "PAB", name: "Balboa Panamenha (PAB)" },
    { value: "PEN", name: "Sol Peruano (PEN)" },
    { value: "PGK", name: "Kina Papua-Nova Guiné (PGK)" },
    { value: "PHP", name: "Peso Filipino (PHP)" },
    { value: "PKR", name: "Rupia Paquistanesa (PKR)" },
    { value: "PLN", name: "Złoty Polonês (PLN)" },
    { value: "PYG", name: "Guarani Paraguaio (PYG)" },
    { value: "QAR", name: "Rial Catarense (QAR)" },
    { value: "RON", name: "Leu Romeno (RON)" },
    { value: "RSD", name: "Dinar Sérvio (RSD)" },
    { value: "RUB", name: "Rublo Russo (RUB)" },
    { value: "RWF", name: "Franco Ruandês (RWF)" },
    { value: "SAR", name: "Rial Saudita (SAR)" },
    { value: "SBD", name: "Dólar das Ilhas Salomão (SBD)" },
    { value: "SCR", name: "Rupia das Seicheles (SCR)" },
    { value: "SDG", name: "Libra Sudanesa (SDG)" },
    { value: "SEK", name: "Coroa Sueca (SEK)" },
    { value: "SGD", name: "Dólar de Singapura (SGD)" },
    { value: "SHP", name: "Libra de Santa Helena (SHP)" },
    { value: "SLL", name: "Leone de Serra Leoa (SLL)" },
    { value: "SOS", name: "Xelim Somali (SOS)" },
    { value: "SRD", name: "Dólar Surinamês (SRD)" },
    { value: "SSP", name: "Libra Sul-Sudanesa (SSP)" },
    { value: "STD", name: "Dobra de São Tomé e Príncipe (STD)" },
    { value: "STN", name: "Dobra de São Tomé e Príncipe Nova (STN)" },
    { value: "SVC", name: "Colón Salvadorenho (SVC)" },
    { value: "SYP", name: "Libra Síria (SYP)" },
    { value: "SZL", name: "Lilangeni Suazilandês (SZL)" },
    { value: "THB", name: "Baht Tailandês (THB)" },
    { value: "TJS", name: "Somoni Tadjique (TJS)" },
    { value: "TMT", name: "Manat Turcomeno (TMT)" },
    { value: "TND", name: "Dinar Tunisiano (TND)" },
    { value: "TOP", name: "Paʻanga Tonganesa (TOP)" },
    { value: "TRY", name: "Lira Turca (TRY)" },
    { value: "TTD", name: "Dólar de Trinidad e Tobago (TTD)" },
    { value: "TWD", name: "Novo Dólar Taiwanês (TWD)" },
    { value: "TZS", name: "Xelim Tanzaniano (TZS)" },
    { value: "UAH", name: "Hryvnia Ucraniana (UAH)" },
    { value: "UGX", name: "Xelim Ugandês (UGX)" },
    { value: "USD", name: "Dólar Americano (USD)" },
    { value: "UYU", name: "Peso Uruguaio (UYU)" },
    { value: "UZS", name: "Som Uzbeque (UZS)" },
    { value: "VEF", name: "Bolívar Venezuelano (VEF)" },
    { value: "VES", name: "Bolívar Venezuelano Soberano (VES)" },
    { value: "VND", name: "Dong Vietnamita (VND)" },
    { value: "VUV", name: "Vatu Vanuatuense (VUV)" },
    { value: "WST", name: "Tala Samoano (WST)" },
    { value: "XAF", name: "Franco CFA BEAC (XAF)" },
    { value: "XAG", name: "Prata (XAG)" },
    { value: "XAU", name: "Ouro (XAU)" },
    { value: "XCD", name: "Dólar do Caribe Oriental (XCD)" },
    { value: "XDR", name: "Direito Especial de Saque (XDR)" },
    { value: "XOF", name: "Franco CFA BCEAO (XOF)" },
    { value: "XPD", name: "Paládio (XPD)" },
    { value: "XPF", name: "Franco CFP (XPF)" },
    { value: "XPT", name: "Platina (XPT)" },
    { value: "YER", name: "Rial Iemenita (YER)" },
    { value: "ZAR", name: "Rand Sul-Africano (ZAR)" },
    { value: "ZMK", name: "Kwacha Zambiano (ZMK)" },
    { value: "ZMW", name: "Kwacha Zambiano Novo (ZMW)" },
    { value: "ZWL", name: "Dólar Zimbabuense (ZWL)" }
];

const moedaOrigemSelected = document.getElementById('moedaOrigem');
const moedaDestinoSelected = document.getElementById('moedaDestino');

moedas.forEach(moeda => {
    const option = document.createElement('option');
    option.value = moeda.value;
    option.textContent = moeda.name;
    moedaOrigemSelected.appendChild(option);
    moedaDestinoSelected.appendChild(option.cloneNode(true));
});

async function getExchangeRates(moedaOrigem, moedaDestino, valor) {
    try {

        const response = await fetch(apiUrl);
        const data = await response.json();

        const exchangeRates = data.rates;

        const taxaOrigem = exchangeRates[moedaOrigem];
        const taxaDestino = exchangeRates[moedaDestino];
        const valorConvertido = (valor / taxaOrigem) * taxaDestino;

        document.getElementById('moedaOrigem').textContent = `${valor.toFixed(2)} ${moedaOrigem}`;
        document.getElementById('moedaDestino').textContent = `${valorConvertido.toFixed(2)} ${moedaDestino}`;

        const resultadoConversao = document.getElementById('resultadoConversao');
        document.getElementById('resultadoConversao').style.display = '';
        resultadoConversao.innerHTML =
            `<p><i class="fa-solid fa-circle-info fa-fade"></i> ${valor.toFixed(2)} ${moedaOrigem} ` +
            `equivale a ${valorConvertido.toFixed(2)} ${moedaDestino}</p>`;
    } catch (error) {
        console.error('Erro ao obter as taxas de câmbio:', error.message);
    }
}

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const moedaOrigem = document.getElementById('moedaOrigem').value;
    const moedaDestino = document.getElementById('moedaDestino').value;
    const valor = parseFloat(document.getElementById('valor').value);

    getExchangeRates(moedaOrigem, moedaDestino, valor);
});
