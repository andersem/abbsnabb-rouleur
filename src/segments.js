const segments = [
    {id: 12098216, name: 'The Real Gjøkbakken'},
    {id: 1387885, name: 'Oslos fineste bakke'},
    {id: 1942901, name: 'Klatringen til Tryvann fra Gressbanen (offisiell)'},
    {id: 4252879, name: 'Olaf Bulls vei BUSSTOPP (Offisiell)'},
    {id: 5311719, name: 'sørkedalen ut'},
    {id: 632847, name: 'Kongsveien'},
    {id: 660072, name: 'Grefsenkollen'},
    {id: 665413, name: 'Hverven - Tusenfryd (Rundkjøring)'},
    {id: 7121442, name: 'SKF Maridalen'},
    {id: 734891, name: 'Kirkerudbakken'}
];

export const segmentName = function(segmentId) {
    if (!segmentId) {
        return '';
    }
    return segments.find(segment => segment.id.toString() === segmentId).name;
};
export default segments

