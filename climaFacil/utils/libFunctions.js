export function convertDateISOtoBR(isodate){
    const databr = isodate.split("-");

    return databr[2] + '/' + databr[1] + '/' + databr[0];
}

export function formatHours(isodate){
    const date = new Date(isodate);

    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
}