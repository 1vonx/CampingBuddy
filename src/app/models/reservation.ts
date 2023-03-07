import { CampSite } from "./campSite";

export interface Reservation 
{
    id: number,
    camp: CampSite,
    totalPrice: number,
    startDate: string,
    endDate: string,
}