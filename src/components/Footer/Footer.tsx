import React, {useState} from 'react';

type FooterType = {
    topCars: Array<topCarsType>
}
export  type topCarsType = {
    id: number
    manufacturer: string
    model: string
}

// let [cars, setCars] = useState([
//         {id: 1, manufacturer: 'BMW', model: 'm5cs'},
//         {id: 2, manufacturer: 'Mercedes', model: 'e63s'},
//         {id: 3, manufacturer: 'Audi', model: 'rs6'}
//     ]
// )
const Footer: React.FC<FooterType> = (props) => {
    // const topCars = [
    //     {id: 1, manufacturer: 'BMW', model: 'm5cs'},
    //     {id: 2, manufacturer: 'Mercedes', model: 'e63s'},
    //     {id: 3, manufacturer: 'Audi', model: 'rs6'}
    // ]
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <div>
            {props.topCars.map((topCars: any, index: number) => {

                return (
                    <table key={index}>
                        <tr>
                            <td>Manufacturer</td>
                            <td>{topCars.manufacturer}</td>
                        </tr>
                        <tr>
                            <td>Model</td>
                            <td>model:{topCars.model}</td>
                        </tr>
                    </table>
            )
            })
            }
        </div>
            )
            };

export default Footer;