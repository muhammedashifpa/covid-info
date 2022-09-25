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
    const makeDate = new Date();
    makeDate.setHours(0,0,0,0)
    const toDate = makeDate.toISOString()

    const fromDate = new Date(makeDate.setMonth(makeDate.getMonth() - 1)).toISOString()

    const changeDdateTime = `${fromDate}&to=${toDate}`;

    return AxiosInstance.get<CovidDataInterface[]>(`world?from=${changeDdateTime}`)
}