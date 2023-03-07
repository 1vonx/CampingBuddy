import { CampSite } from "./campSite";
import { User } from "./user";

export interface Reservation 
{
    id: number,
    camp: CampSite,
    totalPrice: number,
    //client: User,
    startDate: string,
    endDate: string,
}