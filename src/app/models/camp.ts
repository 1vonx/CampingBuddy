import { CampSite } from "./campSite";

export interface Camp
{
    id: number,
    name: string,
    spots: CampSite[],
    longitude: string,
    latidude: string,
    address: string,
    dailyPrice: number

}