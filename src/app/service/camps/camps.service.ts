import { Injectable } from '@angular/core';
import { Camp } from 'src/app/models/camp';

@Injectable({
  providedIn: 'root'
})
export class CampsService {

CAMPS : Camp[]= [
    {
        "id": 0,
        "name": "Gradishte",
        "type": "RV/Van Camping",
        "spots": 30,
        "longitude": "40.993957",
        "latitude": "20.802233",
        "address": "Gradishte 503, Ohrid",
        "dailyPrice": "10",
        "categories": "beach,bars,party,canoeing,snorkeling",
        "imgUrl": "https://live.staticflickr.com/3082/3155610349_afcfddcbbc_c.jpg",
    },
    {
        "id": 1,
        "name": "Free Camp",
        "type": "Backpacking",
        "spots": 15,
        "longitude": "41.679489",
        "latitude": "20.735416",
        "address": "Kichinitsa 413,Ohrid",
        "dailyPrice": "0",
        "categories": "beach,fishing,biking,swimming",
        "imgUrl": "https://www.telegraph.co.uk/content/dam/Travel/2018/July/Scotland-campingGettyImages-526564828.jpg",
    },
    {
        "id": 2,
        "name": "Camper 4 Night",
        "type": "Backyard Camping",
        "spots": 24,
        "longitude": "41.992792",
        "latitude": "21.437236",
        "address": "Mirche Acev, Skopje",
        "dailyPrice": "30",
        "categories": "photography,fun activities,movie night,games",
        "imgUrl": "https://images.unsplash.com/photo-1587547131116-a0655a526190?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtcGluZyUyMHRlbnR8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
        "id": 3,
        "name": "Ljubanishta",
        "type": "Car Camping",
        "spots": 18,
        "longitude": "40.924428",
        "latitude": "20.774201",
        "address": "Ljubanishta Village, Ohrid",
        "dailyPrice": "5",
        "categories": "cooking,paddle boarding,kayaking,canoeing",
        "imgUrl": "https://live.staticflickr.com/65535/51277454149_a8b1b0b68f_b.jpg"
    },
    {
        "id": 4,
        "name": "Titov Vrv Camp",
        "type": "Survival Camping",
        "spots": 10,
        "longitude": "42.119786",
        "latitude": "20.938561",
        "address": "Shar Planina, Tetovo",
        "dailyPrice": "6",
        "categories": "hiking,exploring,wood whittling",
        "imgUrl": "https://images.unsplash.com/photo-1464547323744-4edd0cd0c746?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGNhbXBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
        "id": 5,
        "name": "Big Lake",
        "type": "Overlanding",
        "spots": 14,
        "longitude": "21.205536",
        "latitude": "40.969075",
        "address": "Golemo Ezero, Nizepole",
        "dailyPrice": "20",
        "categories": "mountain biking,hiking,swimming,picnic,star watching,offroading",
        "imgUrl": "https://live.staticflickr.com/4328/35458139403_be1346e336_b.jpg",
    },
    {
        "id": 6,
        "name": "Brnicki Waterfall",
        "type": "Hammock Camping",
        "spots": 7,
        "longitude": "21.666846",
        "latitude": "41.083223",
        "address": "Crna Reka, Rapesh",
        "dailyPrice": "16",
        "categories": "hiking,fishing,hunting,cooking",
        "imgUrl": "https://macedoniasightseeing.mk/storage/2017/02/b10c21a731ce655ab93125566da61747.jpg"
    },
    {
        "id": 7,
        "name": "Shula Mina",
        "type": "Backpacking",
        "spots": 60,
        "longitude": "21.237450",
        "latitude": "41.374642",
        "address": "Shula Mina, Krushevo",
        "dailyPrice": "40",
        "categories": "fun activities,firewood foraging,campfire bonding,climbing",
        "imgUrl": "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbXBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"

    },
    {
        "id": 8,
        "name": "Youth Association",
        "type": "Backpacking",
        "spots": 60,
        "longitude": "21.237450",
        "latitude": "41.374642",
        "address": "Korab Planina, Tanushe",
        "dailyPrice": "0",
        "categories": "fun activities,firewood foraging,campfire bonding,climbing",
        "imgUrl": "https://www.buffaloriver.com/wp-content/uploads/2015/10/camping-kyles-landing-scaled.jpg",
    },
];

  constructor() { }

  getAllCamps(): Camp[] {
    return this.CAMPS;
  }

  getCampById(id: string) {
    return this.CAMPS.find(c => c.id === Number(id));
  }

  searchByName(searchTerm: string) {
    return this.CAMPS.filter(camp => camp.name.toLocaleLowerCase()
    .includes(searchTerm.toLocaleLowerCase()));
  }
}
