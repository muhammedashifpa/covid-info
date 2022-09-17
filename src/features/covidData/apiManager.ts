import { AxiosInstance } from "../../axios/axios"


export interface CovidDataInterface{
    Date:string ,
    NewConfirmed: number,
    TotalConfirmed: number,
    NewDeaths: number,
    TotalDeaths: number,
    NewRecovered: number,
    TotalRecovered: number
} 



export const fetchWorldWIP = () => {
    var datetime;
    datetime = '2022-08-01T00:00:00Z&to=2022-09-01T00:00:00Z';
    return AxiosInstance.get<CovidDataInterface[]>(`world?from=${datetime}`)
}