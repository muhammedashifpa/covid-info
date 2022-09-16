import { AxiosInstance } from "../../axios/axios"


export interface CovidDataInterface{
    Date:string,
    NewConfirmed: number,
    TotalConfirmed: number,
    NewDeaths: number,
    TotalDeaths: number,
    NewRecovered: number,
    TotalRecovered: number
} 


export const fetchWorldWIP = (datetime:any=undefined) => {
    datetime = '2021-03-01T00:00:00Z&to=2022-04-01T00:00:00Z';
    return AxiosInstance.get<CovidDataInterface[]>(`world?from=${datetime}`)
}

export const fetchByCountry = (datetime:any=undefined, country_slug:string='india') => {
    datetime = '2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z';
    return AxiosInstance
        .get<CovidDataInterface[]>(`country/${country_slug}?from=${datetime}`)
}