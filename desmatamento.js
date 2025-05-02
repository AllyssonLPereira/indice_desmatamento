function analisarDesmatamentoPorDecada(data) {
    let decadas = {
        "1980-1990": [],
        "1990-2000": [],
        "2000-2010": [],
        "2010-2020": []
    };

    data.forEach(([ano, valor]) => {
        if (ano >= 1980 && ano <= 1989) decadas["1980-1990"].push(valor);
        if (ano >= 1990 && ano <= 1999) decadas["1990-2000"].push(valor);
        if (ano >= 2000 && ano <= 2009) decadas["2000-2010"].push(valor);
        if (ano >= 2010 && ano <= 2019) decadas["2010-2020"].push(valor);
    });

    let result = Object.keys(decadas)
        .filter(decada => decadas[decada].length > 0) // Filtra décadas com valores
        .map(decada => {
            let total = decadas[decada].reduce((acc, cur) => acc + cur, 0);
            let media = total / decadas[decada].length;

            return {
                decada: decada,
                total: total,
                media: media
            };
        });

    return result;
}

console.log(analisarDesmatamentoPorDecada([[2010, 10], [1995, 5], [2005, 58], [2013, 64]]));
