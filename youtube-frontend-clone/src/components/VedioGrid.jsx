import VedioComponent from "./VedioComponent"

const vedios = [1,2,3,4,5,6,7,8,9,10,11,12]

export function VedioGrid(){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {vedios.map(vedioNumber => <VedioComponent key={vedioNumber} />) }
        </div>
    )
}