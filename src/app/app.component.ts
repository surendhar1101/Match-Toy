import { Component } from '@angular/core';
import { match } from 'match-toy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Match-Toy';
  response = {
    status: 200,
    user: {
      name: 'Surendhar',
      age: 30,
      address: {
        city: 'New York',
        country: 'USA',
      },
    },
  };
  message: string = '';

  getUserResponse = match
    .case(
      `{ status, user: { name, age, address: { city, country } }}`,
      ({ name, age, city }: any) => {
        this.message = `User name is ${name} at ${age} from ${city}`;
      }
    )
    .else(() => (this.message = 'No user found'))
    .catch((e: any) => console.log('Error on getUserResponse', e))
    .end();

  // getUserResponse(response: any) {
  //   try {
  //     if (response && response.status === 200) {
  //       if (response.user) {
  //         let name;
  //         let address;
  //         if (response.user.name && typeof response.user.name === 'string') {
  //           name = response.user.name;
  //         }
  //         if (response.user.address) {
  //           address = response.user.address.city;
  //         }
  //         if (name && address) {
  //           this.message = `User name is ${name} and lives on ${address}`;
  //         }
  //       } else {
  //         this.message = 'No user found';
  //       }
  //     } else {
  //       this.message = 'No user found';
  //     }
  //   } catch (e) {
  //     console.log('Error on getUserResponse', e);
  //   }
  // }
}
